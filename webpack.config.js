module.exports = {
	entry: './packages/index.js',
	output: {
		//node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径
		path: __dirname,
		filename: './release/bundle.js'
	},
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader'
		}]
	},
	mode: 'development'
};
