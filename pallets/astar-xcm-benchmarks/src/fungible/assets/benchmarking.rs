// This file is part of Astar.

// Copyright (C) 2019-2023 Stake Technologies Pte.Ltd.
// SPDX-License-Identifier: GPL-3.0-or-later

// Astar is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Astar is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Astar. If not, see <http://www.gnu.org/licenses/>.

// Copyright (C) Parity Technologies (UK) Ltd.
use super::*;
use crate::{account_and_location, new_executor, AssetTransactorOf, XcmCallOf};
use frame_benchmarking::{benchmarks_instance_pallet, BenchmarkError, BenchmarkResult};
use frame_support::traits::fungible::Inspect;
use sp_runtime::traits::Zero;
use sp_std::{prelude::*, vec};
use xcm::latest::{prelude::*, Weight};
use xcm_executor::traits::{Convert, TransactAsset};

benchmarks_instance_pallet! {
    where_clause { where
        <
            <
                T::TransactAsset
                as
                Inspect<T::AccountId>
            >::Balance
            as
            TryInto<u128>
        >::Error: sp_std::fmt::Debug,

            <   T::TransactAsset
                as
                Inspect<T::AccountId>
            >::Balance : Into<u128>

    }

    withdraw_asset {
        let (sender_account, sender_location) = account_and_location::<T>(1);
        let worst_case_holding = T::worst_case_holding(0);
        let asset = T::get_multi_asset();

        <AssetTransactorOf<T>>::deposit_asset(
            &asset,
            &sender_location,
            &XcmContext {
                origin: Some(sender_location.clone()),
                message_hash: [0; 32],
                topic: None,
            },
        ).unwrap();
        // check the assets of origin.
        assert!(!T::TransactAsset::balance(&sender_account).is_zero());

        let mut executor = new_executor::<T>(sender_location);
        executor.set_holding(worst_case_holding.into());
        let instruction = Instruction::<XcmCallOf<T>>::WithdrawAsset(vec![asset.clone()].into());
        let xcm = Xcm(vec![instruction]);
    }: {
        executor.bench_process(xcm)?;
    } verify {
        // check one of the assets of origin.
        assert!(T::TransactAsset::balance(&sender_account).is_zero());
        assert!(executor.holding().ensure_contains(&vec![asset].into()).is_ok());
    }

    transfer_asset {
        let (sender_account, sender_location) = account_and_location::<T>(1);
        let mut asset = T::get_multi_asset();
        let assets: MultiAssets = vec![ asset.clone() ].into();
        // this xcm doesn't use holding

        let dest_location = T::valid_destination()?;
        let dest_account = T::AccountIdConverter::convert(dest_location.clone()).unwrap();
        <AssetTransactorOf<T>>::deposit_asset(
            &asset,
            &sender_location,
            &XcmContext {
                origin: Some(sender_location.clone()),
                message_hash: [0; 32],
                topic: None,
            },
        ).unwrap();
        assert!(T::TransactAsset::balance(&dest_account).is_zero());

        // reducing some assets for Existential deposit
        if let Fungible(x) = asset.fun {
            asset.fun = Fungible(x/10)
        };

        let assets: MultiAssets = vec![ asset.clone() ].into();
        log::trace!(
            target: "xcm::process",
            "assets is {:?}",assets.clone());

        <AssetTransactorOf<T>>::transfer_asset(
            &asset,
            &sender_location,
            &dest_location,
            &XcmContext {
                origin: Some(sender_location.clone()),
                message_hash: [0; 32],
                topic: None,
            },
        ).unwrap();
        let mut executor = new_executor::<T>(sender_location);
        let instruction = Instruction::TransferAsset { assets, beneficiary: dest_location };
        let xcm = Xcm(vec![instruction]);
        log::trace!(
            target: "xcm::process",
            "destination balance is {:?}, sender balance is {:?}",T::TransactAsset::balance(&dest_account),T::TransactAsset::balance(&sender_account));
        assert!(!T::TransactAsset::balance(&dest_account).is_zero());
        let previous_balance: u128 = T::TransactAsset::balance(&dest_account).into();
    }: {
        executor.bench_process(xcm)?;
    } verify {
        log::trace!(
            target: "xcm::process",
            "destination balance is {:?}, sender balance is {:?}",T::TransactAsset::balance(&dest_account),T::TransactAsset::balance(&sender_account));
        assert!(T::TransactAsset::balance(&dest_account).into() == 2 * previous_balance);
    }

    transfer_reserve_asset {
        let (sender_account, sender_location) = account_and_location::<T>(1);
        let dest_location = T::valid_destination()?;
        let dest_account = T::AccountIdConverter::convert(dest_location.clone()).unwrap();

        let mut asset = T::get_multi_asset();
        <AssetTransactorOf<T>>::deposit_asset(
            &asset,
            &sender_location,
            &XcmContext {
                origin: Some(sender_location.clone()),
                message_hash: [0; 32],
                topic: None,
            },
        ).unwrap();

        assert!(T::TransactAsset::balance(&dest_account).is_zero());

        if let Fungible(x) = asset.fun {
            asset.fun = Fungible(x/10)
        };

        <AssetTransactorOf<T>>::transfer_asset(
            &asset,
            &sender_location,
            &dest_location,
            &XcmContext {
                origin: Some(sender_location.clone()),
                message_hash: [0; 32],
                topic: None,
            },
        ).unwrap();
        let assets: MultiAssets = vec![ asset ].into();
        let mut executor = new_executor::<T>(sender_location);
        let instruction = Instruction::TransferReserveAsset {
            assets,
            dest: dest_location,
            xcm: Xcm::new()
        };
        let xcm = Xcm(vec![instruction]);
        assert!(!T::TransactAsset::balance(&dest_account).is_zero());
        let previous_balance: u128 = T::TransactAsset::balance(&dest_account).into();
    }: {
        executor.bench_process(xcm)?;
    } verify {
        assert!(T::TransactAsset::balance(&dest_account).into() == 2 * previous_balance);
    }

    receive_teleported_asset {
    } : {
        Err(BenchmarkError::Override(BenchmarkResult::from_weight(Weight::MAX)))?;
    }

    deposit_asset {
        let asset = T::get_multi_asset();
        let mut holding = T::worst_case_holding(1);

        // Add our asset to the holding.
        holding.push(asset.clone());

        // our dest must have no balance initially.
        let dest_location = T::valid_destination()?;
        let dest_account = T::AccountIdConverter::convert(dest_location.clone()).unwrap();
        assert!(T::TransactAsset::balance(&dest_account).is_zero());

        let mut executor = new_executor::<T>(Default::default());
        executor.set_holding(holding.into());
        let instruction = Instruction::<XcmCallOf<T>>::DepositAsset {
            assets: asset.into(),
            beneficiary: dest_location,
        };
        let xcm = Xcm(vec![instruction]);
    }: {
        executor.bench_process(xcm)?;
    } verify {
        // dest should have received some asset.
        assert!(!T::TransactAsset::balance(&dest_account).is_zero())
    }

    deposit_reserve_asset {
        let asset = T::get_multi_asset();
        let mut holding = T::worst_case_holding(1);

        // Add our asset to the holding.
        holding.push(asset.clone());

        // our dest must have no balance initially.
        let dest_location = T::valid_destination()?;
        let dest_account = T::AccountIdConverter::convert(dest_location.clone()).unwrap();
        assert!(T::TransactAsset::balance(&dest_account).is_zero());

        let mut executor = new_executor::<T>(Default::default());
        executor.set_holding(holding.into());
        let instruction = Instruction::<XcmCallOf<T>>::DepositReserveAsset {
            assets: asset.into(),
            dest: dest_location,
            xcm: Xcm::new(),
        };
        let xcm = Xcm(vec![instruction]);
    }: {
        executor.bench_process(xcm)?;
    } verify {
        // dest should have received some asset.
        assert!(!T::TransactAsset::balance(&dest_account).is_zero())
    }

    initiate_teleport {
    }: {
        Err(BenchmarkError::Override(BenchmarkResult::from_weight(Weight::MAX)))?;
    }

    impl_benchmark_test_suite!(
        Pallet,
        crate::fungible::mock::new_test_ext(),
        crate::fungible::mock::Test
    );
}