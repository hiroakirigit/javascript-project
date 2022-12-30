const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const filePath = {
	ejs: './resources/views/'
}


//ejsビルド
const WebpackWatchedGlobEntries = require("webpack-watched-glob-entries-plugin");
const entries = WebpackWatchedGlobEntries.getEntries([path.resolve(__dirname, `${filePath.ejs}**/*.ejs`)], {
	ignore: path.resolve(__dirname, `${filePath.ejs}**/_*.ejs`),
})();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { htmlWebpackPluginTemplateCustomizer } = require("template-ejs-loader");
const htmlGlobPlugins = (entries) => {
	return Object.keys(entries).map(key => new HtmlWebpackPlugin({
		//出力ファイル名
		filename: `${key}.html`,
		//ejsファイルの読み込み
		template: htmlWebpackPluginTemplateCustomizer({
		  htmlLoaderOption: {
			//ファイル自動読み込みと圧縮を無効化
			sources: false,
			minimize: false
		  },
		  templatePath: `${filePath.ejs}${key}.ejs`,
		}),

		//JS・CSS自動出力と圧縮を無効化
		// inject: false,
		// minify: false,
	  })
	);
  };

  ///css ビルド
const MODE = "development";
const enabledSourceMap = MODE === "development";
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//画像 ビルド
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: MODE,
	entry: './resources/assets/js/index.js',　//編集ファイルのパスを定義
	output: {
			path: path.resolve(__dirname, './public'), //出力先のパスを入力
			filename: 'assets/js/index-bundle.js', //ファイルの名前を変えたいときの出力
	// assetModuleFilename: 'assets/images/[name][ext]',
	clean: true,
	},
	module: {
		rules: [
			{
				test: /\.ejs$/i,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: false
						},
					},
					{
						loader: 'template-ejs-loader'
					}
				]
			},
			{
				test: /\.(c|sa|sc)ss/,
				use: [
					{
							loader:  MiniCssExtractPlugin.loader,
					},
					{
							loader: 'css-loader',
					},
					{
							loader: 'sass-loader',
					},
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: `assets/images/[name][ext]`,
				},
			}
		]
	},
	plugins: [
		...htmlGlobPlugins(entries),
		new MiniCssExtractPlugin({
			filename: 'assets/css/style.css' //出力されるcssの名前
		}),
		new CopyPlugin({
			patterns: [
				//画像コピー
				{
				from: path.resolve(__dirname, 'resources/assets/images/'),
				to: path.resolve(__dirname, 'public/assets/images'),
				},
			],
			}),
		new BrowserSyncPlugin({
			// browse to http://localhost:3000/ during development,
			// ./public directory is being served
			host: 'localhost',
			port: 9000,
			server: { baseDir: ['public'] }
		})
	],
	devtool: 'source-map',
	watchOptions: {
		ignored: /node_modules/  //正規表現で指定
	},
	devServer: {
		hot: true, //ホットリロードを有効化（変更された部分のみを更新）
		static: path.resolve(__dirname, 'public'),
		open: true
	},
	target: 'web', //ローカルサーバのリロードを有効化する
}
