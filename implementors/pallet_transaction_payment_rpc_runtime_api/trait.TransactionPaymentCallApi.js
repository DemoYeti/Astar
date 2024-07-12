(function() {var implementors = {
"astar_runtime":[["impl&lt;__SrApiBlock__: BlockT + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>, RuntimeApiImplCall: CallApiAt&lt;__SrApiBlock__&gt; + 'static&gt; TransactionPaymentCallApi&lt;__SrApiBlock__, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u128.html\">u128</a>, <a class=\"enum\" href=\"astar_runtime/enum.RuntimeCall.html\" title=\"enum astar_runtime::RuntimeCall\">RuntimeCall</a>&gt; for <a class=\"struct\" href=\"astar_runtime/struct.RuntimeApiImpl.html\" title=\"struct astar_runtime::RuntimeApiImpl\">RuntimeApiImpl</a>&lt;__SrApiBlock__, RuntimeApiImplCall&gt;<span class=\"where fmt-newline\">where\n    RuntimeApiImplCall::StateBackend: StateBackend&lt;HashingFor&lt;__SrApiBlock__&gt;&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.reference.html\">&amp;'static RuntimeApiImplCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    <a class=\"enum\" href=\"astar_runtime/enum.RuntimeCall.html\" title=\"enum astar_runtime::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u32.html\">u32</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    RuntimeDispatchInfo&lt;<a class=\"type\" href=\"astar_runtime/type.Balance.html\" title=\"type astar_runtime::Balance\">Balance</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    FeeDetails&lt;<a class=\"type\" href=\"astar_runtime/type.Balance.html\" title=\"type astar_runtime::Balance\">Balance</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    Weight: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"type\" href=\"astar_runtime/type.Balance.html\" title=\"type astar_runtime::Balance\">Balance</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    __SrApiBlock__::Header: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,</span>"]],
"local_runtime":[["impl&lt;__SrApiBlock__: BlockT + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>, RuntimeApiImplCall: CallApiAt&lt;__SrApiBlock__&gt; + 'static&gt; TransactionPaymentCallApi&lt;__SrApiBlock__, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u128.html\">u128</a>, <a class=\"enum\" href=\"local_runtime/enum.RuntimeCall.html\" title=\"enum local_runtime::RuntimeCall\">RuntimeCall</a>&gt; for <a class=\"struct\" href=\"local_runtime/struct.RuntimeApiImpl.html\" title=\"struct local_runtime::RuntimeApiImpl\">RuntimeApiImpl</a>&lt;__SrApiBlock__, RuntimeApiImplCall&gt;<span class=\"where fmt-newline\">where\n    RuntimeApiImplCall::StateBackend: StateBackend&lt;HashingFor&lt;__SrApiBlock__&gt;&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.reference.html\">&amp;'static RuntimeApiImplCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    <a class=\"enum\" href=\"local_runtime/enum.RuntimeCall.html\" title=\"enum local_runtime::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u32.html\">u32</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    RuntimeDispatchInfo&lt;<a class=\"type\" href=\"astar_primitives/type.Balance.html\" title=\"type astar_primitives::Balance\">Balance</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    FeeDetails&lt;<a class=\"type\" href=\"astar_primitives/type.Balance.html\" title=\"type astar_primitives::Balance\">Balance</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    Weight: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"type\" href=\"astar_primitives/type.Balance.html\" title=\"type astar_primitives::Balance\">Balance</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    __SrApiBlock__::Header: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,</span>"]],
"shibuya_runtime":[["impl&lt;__SrApiBlock__: BlockT + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>, RuntimeApiImplCall: CallApiAt&lt;__SrApiBlock__&gt; + 'static&gt; TransactionPaymentCallApi&lt;__SrApiBlock__, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u128.html\">u128</a>, <a class=\"enum\" href=\"shibuya_runtime/enum.RuntimeCall.html\" title=\"enum shibuya_runtime::RuntimeCall\">RuntimeCall</a>&gt; for <a class=\"struct\" href=\"shibuya_runtime/struct.RuntimeApiImpl.html\" title=\"struct shibuya_runtime::RuntimeApiImpl\">RuntimeApiImpl</a>&lt;__SrApiBlock__, RuntimeApiImplCall&gt;<span class=\"where fmt-newline\">where\n    RuntimeApiImplCall::StateBackend: StateBackend&lt;HashingFor&lt;__SrApiBlock__&gt;&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.reference.html\">&amp;'static RuntimeApiImplCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    <a class=\"enum\" href=\"shibuya_runtime/enum.RuntimeCall.html\" title=\"enum shibuya_runtime::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u32.html\">u32</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    RuntimeDispatchInfo&lt;<a class=\"type\" href=\"shibuya_runtime/type.Balance.html\" title=\"type shibuya_runtime::Balance\">Balance</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    FeeDetails&lt;<a class=\"type\" href=\"shibuya_runtime/type.Balance.html\" title=\"type shibuya_runtime::Balance\">Balance</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    Weight: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"type\" href=\"shibuya_runtime/type.Balance.html\" title=\"type shibuya_runtime::Balance\">Balance</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    __SrApiBlock__::Header: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,</span>"]],
"shiden_runtime":[["impl&lt;__SrApiBlock__: BlockT + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>, RuntimeApiImplCall: CallApiAt&lt;__SrApiBlock__&gt; + 'static&gt; TransactionPaymentCallApi&lt;__SrApiBlock__, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u128.html\">u128</a>, <a class=\"enum\" href=\"shiden_runtime/enum.RuntimeCall.html\" title=\"enum shiden_runtime::RuntimeCall\">RuntimeCall</a>&gt; for <a class=\"struct\" href=\"shiden_runtime/struct.RuntimeApiImpl.html\" title=\"struct shiden_runtime::RuntimeApiImpl\">RuntimeApiImpl</a>&lt;__SrApiBlock__, RuntimeApiImplCall&gt;<span class=\"where fmt-newline\">where\n    RuntimeApiImplCall::StateBackend: StateBackend&lt;HashingFor&lt;__SrApiBlock__&gt;&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.reference.html\">&amp;'static RuntimeApiImplCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    <a class=\"enum\" href=\"shiden_runtime/enum.RuntimeCall.html\" title=\"enum shiden_runtime::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u32.html\">u32</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    RuntimeDispatchInfo&lt;<a class=\"type\" href=\"shiden_runtime/type.Balance.html\" title=\"type shiden_runtime::Balance\">Balance</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    FeeDetails&lt;<a class=\"type\" href=\"shiden_runtime/type.Balance.html\" title=\"type shiden_runtime::Balance\">Balance</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    Weight: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"type\" href=\"shiden_runtime/type.Balance.html\" title=\"type shiden_runtime::Balance\">Balance</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    __SrApiBlock__::Header: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()