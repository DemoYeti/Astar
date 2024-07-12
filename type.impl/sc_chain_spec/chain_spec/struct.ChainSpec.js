(function() {var type_impls = {
"astar_collator":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericChainSpec%3CG,+E,+EHF%3E\" class=\"impl\"><a href=\"#impl-GenericChainSpec%3CG,+E,+EHF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;G, E, EHF&gt; ChainSpec&lt;G, E, EHF&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.boot_nodes\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">boot_nodes</a>(&amp;self) -&gt; &amp;[MultiaddrWithPeerId]</h4></section></summary><div class=\"docblock\"><p>A list of bootnode addresses.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.name\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">name</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.str.html\">str</a></h4></section></summary><div class=\"docblock\"><p>Spec name.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.id\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">id</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.str.html\">str</a></h4></section></summary><div class=\"docblock\"><p>Spec id.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.telemetry_endpoints\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">telemetry_endpoints</a>(&amp;self) -&gt; &amp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;TelemetryEndpoints&gt;</h4></section></summary><div class=\"docblock\"><p>Telemetry endpoints (if any)</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.protocol_id\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">protocol_id</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Network protocol id.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fork_id\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">fork_id</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Optional network fork identifier.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.properties\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">properties</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.117/serde_json/map/struct.Map.html\" title=\"struct serde_json::map::Map\">Map</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"https://docs.rs/serde_json/1.0.117/serde_json/value/enum.Value.html\" title=\"enum serde_json::value::Value\">Value</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Additional loosly-typed properties of the chain.</p>\n<p>Returns an empty JSON object if ‘properties’ not defined in config</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.add_boot_node\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">add_boot_node</a>(&amp;mut self, addr: MultiaddrWithPeerId)</h4></section></summary><div class=\"docblock\"><p>Add a bootnode to the list.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extensions\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">extensions</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;E</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to the defined chain spec extensions.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extensions_mut\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">extensions_mut</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut E</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the defined chain spec extensions.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_genesis\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">from_genesis</a>&lt;F&gt;(\n    name: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.str.html\">str</a>,\n    id: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.str.html\">str</a>,\n    chain_type: ChainType,\n    constructor: F,\n    boot_nodes: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;MultiaddrWithPeerId&gt;,\n    telemetry_endpoints: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;TelemetryEndpoints&gt;,\n    protocol_id: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.str.html\">str</a>&gt;,\n    fork_id: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.str.html\">str</a>&gt;,\n    properties: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.117/serde_json/map/struct.Map.html\" title=\"struct serde_json::map::Map\">Map</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"https://docs.rs/serde_json/1.0.117/serde_json/value/enum.Value.html\" title=\"enum serde_json::value::Value\">Value</a>&gt;&gt;,\n    extensions: E,\n    code: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>]\n) -&gt; ChainSpec&lt;G, E, EHF&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; G + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</div></h4></section><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated: <code>from_genesis</code> is planned to be removed in May 2024. Use <code>builder()</code> instead.</span></div></span></summary><div class=\"docblock\"><p>Create hardcoded spec.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.builder\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">builder</a>(code: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>], extensions: E) -&gt; ChainSpecBuilder&lt;G, E, EHF&gt;</h4></section></summary><div class=\"docblock\"><p>Provides a <code>ChainSpec</code> builder.</p>\n</div></details></div></details>",0,"astar_collator::local::chain_spec::ChainSpec","astar_collator::parachain::chain_spec::astar::AstarChainSpec","astar_collator::parachain::chain_spec::shibuya::ShibuyaChainSpec","astar_collator::parachain::chain_spec::shiden::ShidenChainSpec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericChainSpec%3CG,+E,+EHF%3E\" class=\"impl\"><a href=\"#impl-GenericChainSpec%3CG,+E,+EHF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;G, E, EHF&gt; ChainSpec&lt;G, E, EHF&gt;<div class=\"where\">where\n    G: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.203/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,\n    E: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.203/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_json_bytes\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">from_json_bytes</a>(\n    json: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>]&gt;&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;ChainSpec&lt;G, E, EHF&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Parse json content into a <code>ChainSpec</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_json_file\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">from_json_file</a>(path: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;ChainSpec&lt;G, E, EHF&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Parse json file into a <code>ChainSpec</code></p>\n</div></details></div></details>",0,"astar_collator::local::chain_spec::ChainSpec","astar_collator::parachain::chain_spec::astar::AstarChainSpec","astar_collator::parachain::chain_spec::shibuya::ShibuyaChainSpec","astar_collator::parachain::chain_spec::shiden::ShidenChainSpec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericChainSpec%3CG,+E,+EHF%3E\" class=\"impl\"><a href=\"#impl-GenericChainSpec%3CG,+E,+EHF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;G, E, EHF&gt; ChainSpec&lt;G, E, EHF&gt;<div class=\"where\">where\n    G: RuntimeGenesis,\n    E: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.203/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static,\n    EHF: HostFunctions,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_json\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">as_json</a>(&amp;self, raw: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Dump the chain specification to JSON string.</p>\n</div></details></div></details>",0,"astar_collator::local::chain_spec::ChainSpec","astar_collator::parachain::chain_spec::astar::AstarChainSpec","astar_collator::parachain::chain_spec::shibuya::ShibuyaChainSpec","astar_collator::parachain::chain_spec::shiden::ShidenChainSpec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BuildStorage-for-GenericChainSpec%3CG,+E,+EHF%3E\" class=\"impl\"><a href=\"#impl-BuildStorage-for-GenericChainSpec%3CG,+E,+EHF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;G, E, EHF&gt; BuildStorage for ChainSpec&lt;G, E, EHF&gt;<div class=\"where\">where\n    G: RuntimeGenesis,\n    EHF: HostFunctions,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.assimilate_storage\" class=\"method trait-impl\"><a href=\"#method.assimilate_storage\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">assimilate_storage</a>(&amp;self, storage: &amp;mut Storage) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class='docblock'>Assimilate the storage for this module into pre-existing overlays.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.build_storage\" class=\"method trait-impl\"><a href=\"#method.build_storage\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">build_storage</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Storage, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class='docblock'>Build the storage out of this builder.</div></details></div></details>","BuildStorage","astar_collator::local::chain_spec::ChainSpec","astar_collator::parachain::chain_spec::astar::AstarChainSpec","astar_collator::parachain::chain_spec::shibuya::ShibuyaChainSpec","astar_collator::parachain::chain_spec::shiden::ShidenChainSpec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-GenericChainSpec%3CG,+E,+EHF%3E\" class=\"impl\"><a href=\"#impl-Clone-for-GenericChainSpec%3CG,+E,+EHF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;G, E, EHF&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for ChainSpec&lt;G, E, EHF&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; ChainSpec&lt;G, E, EHF&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","astar_collator::local::chain_spec::ChainSpec","astar_collator::parachain::chain_spec::astar::AstarChainSpec","astar_collator::parachain::chain_spec::shibuya::ShibuyaChainSpec","astar_collator::parachain::chain_spec::shiden::ShidenChainSpec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ChainSpec-for-GenericChainSpec%3CG,+E,+EHF%3E\" class=\"impl\"><a href=\"#impl-ChainSpec-for-GenericChainSpec%3CG,+E,+EHF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;G, E, EHF&gt; ChainSpec for ChainSpec&lt;G, E, EHF&gt;<div class=\"where\">where\n    G: RuntimeGenesis + 'static,\n    E: GetExtension + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.203/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    EHF: HostFunctions,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.boot_nodes\" class=\"method trait-impl\"><a href=\"#method.boot_nodes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">boot_nodes</a>(&amp;self) -&gt; &amp;[MultiaddrWithPeerId]</h4></section></summary><div class='docblock'>A list of bootnode addresses.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.name\" class=\"method trait-impl\"><a href=\"#method.name\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">name</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.str.html\">str</a></h4></section></summary><div class='docblock'>Spec name.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.id\" class=\"method trait-impl\"><a href=\"#method.id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">id</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.str.html\">str</a></h4></section></summary><div class='docblock'>Spec id.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.chain_type\" class=\"method trait-impl\"><a href=\"#method.chain_type\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">chain_type</a>(&amp;self) -&gt; ChainType</h4></section></summary><div class='docblock'>Type of the chain.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.telemetry_endpoints\" class=\"method trait-impl\"><a href=\"#method.telemetry_endpoints\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">telemetry_endpoints</a>(&amp;self) -&gt; &amp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;TelemetryEndpoints&gt;</h4></section></summary><div class='docblock'>Telemetry endpoints (if any)</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.protocol_id\" class=\"method trait-impl\"><a href=\"#method.protocol_id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">protocol_id</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class='docblock'>Network protocol id.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fork_id\" class=\"method trait-impl\"><a href=\"#method.fork_id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fork_id</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class='docblock'>Optional network fork identifier. <code>None</code> by default.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.properties\" class=\"method trait-impl\"><a href=\"#method.properties\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">properties</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.117/serde_json/map/struct.Map.html\" title=\"struct serde_json::map::Map\">Map</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"https://docs.rs/serde_json/1.0.117/serde_json/value/enum.Value.html\" title=\"enum serde_json::value::Value\">Value</a>&gt;</h4></section></summary><div class='docblock'>Additional loosly-typed properties of the chain. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.add_boot_node\" class=\"method trait-impl\"><a href=\"#method.add_boot_node\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">add_boot_node</a>(&amp;mut self, addr: MultiaddrWithPeerId)</h4></section></summary><div class='docblock'>Add a bootnode to the list.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extensions\" class=\"method trait-impl\"><a href=\"#method.extensions\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">extensions</a>(&amp;self) -&gt; &amp;dyn GetExtension</h4></section></summary><div class='docblock'>Returns a reference to the defined chain spec extensions.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extensions_mut\" class=\"method trait-impl\"><a href=\"#method.extensions_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">extensions_mut</a>(&amp;mut self) -&gt; &amp;mut dyn GetExtension</h4></section></summary><div class='docblock'>Returns a mutable reference to the defined chain spec extensions.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_json\" class=\"method trait-impl\"><a href=\"#method.as_json\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">as_json</a>(&amp;self, raw: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class='docblock'>Return spec as JSON.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_storage_builder\" class=\"method trait-impl\"><a href=\"#method.as_storage_builder\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">as_storage_builder</a>(&amp;self) -&gt; &amp;dyn BuildStorage</h4></section></summary><div class='docblock'>Return StorageBuilder for this spec.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.cloned_box\" class=\"method trait-impl\"><a href=\"#method.cloned_box\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">cloned_box</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn ChainSpec&gt;</h4></section></summary><div class='docblock'>Returns a cloned <code>Box&lt;dyn ChainSpec&gt;</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_storage\" class=\"method trait-impl\"><a href=\"#method.set_storage\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">set_storage</a>(&amp;mut self, storage: Storage)</h4></section></summary><div class='docblock'>Set the storage that should be used by this chain spec. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.code_substitutes\" class=\"method trait-impl\"><a href=\"#method.code_substitutes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">code_substitutes</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/collections/btree/map/struct.BTreeMap.html\" title=\"struct alloc::collections::btree::map::BTreeMap\">BTreeMap</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt;&gt;</h4></section></summary><div class='docblock'>Returns code substitutes that should be used for the on chain wasm.</div></details></div></details>","ChainSpec","astar_collator::local::chain_spec::ChainSpec","astar_collator::parachain::chain_spec::astar::AstarChainSpec","astar_collator::parachain::chain_spec::shibuya::ShibuyaChainSpec","astar_collator::parachain::chain_spec::shiden::ShidenChainSpec"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()