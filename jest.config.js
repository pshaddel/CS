module.exports = {
	roots: ["<rootDir>"],
	transform: {
		"^.+\\.tsx?$": ["@swc/jest", { module: { type: "commonjs" } }]
	},
	testEnvironment: "node",
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
	moduleFileExtensions: ["ts", "js", "json", "node"],
	coverageThreshold: {
		global: {
			branches: 70,
			functions: 70,
			lines: 70
		}
	},
	coverageReporters: ["json-summary", "text", "lcov"]
};
