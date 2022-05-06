const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
	mode: "production",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: "public/**/*",
					globOptions: {
						ignore: [
							"**/.DS_Store",
							path.posix.join(__dirname, "public/index.html"),
							// path.posix.join(__dirname, "public/asdasd.md"), //if open this. will throw error
							// `ERROR in unable to locate '/project-root-dir/public/**/*' glob`
						],
					},
				},
			],
		}),
	],
};
