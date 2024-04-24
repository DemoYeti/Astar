(function() {var implementors = {
"moonbeam_rpc_txpool":[["impl&lt;B, C, A&gt; <a class=\"trait\" href=\"moonbeam_rpc_txpool/trait.TxPoolServer.html\" title=\"trait moonbeam_rpc_txpool::TxPoolServer\">TxPoolServer</a> for <a class=\"struct\" href=\"moonbeam_rpc_txpool/struct.TxPool.html\" title=\"struct moonbeam_rpc_txpool::TxPool\">TxPool</a>&lt;B, C, A&gt;<span class=\"where fmt-newline\">where\n    C: ProvideRuntimeApi&lt;B&gt; + HeaderMetadata&lt;B, Error = Error&gt; + HeaderBackend&lt;B&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    B: BlockT&lt;Hash = H256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    A: ChainApi&lt;Block = B&gt; + 'static,\n    C::Api: <a class=\"trait\" href=\"moonbeam_rpc_primitives_txpool/trait.TxPoolRuntimeApi.html\" title=\"trait moonbeam_rpc_primitives_txpool::TxPoolRuntimeApi\">TxPoolRuntimeApi</a>&lt;B&gt;,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()