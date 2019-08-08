const MoonCompiler = require("moon-compiler");
const createFilter = require("rollup-pluginutils").createFilter;

module.exports = function MoonPlugin(options) {
	if (options === undefined) {
		options = {};
	}

	const filter = createFilter(options.include, options.exclude);

	return {
		name: "MoonPlugin",
		transform(code, id) {
			return filter(id) ? { code: MoonCompiler.compile(code), map: null } : undefined;
		}
	};
};
