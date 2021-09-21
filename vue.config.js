const webpack = require('webpack');

exports.chainWebpack = webpackConfig => {
	webpackConfig
		.entry('app')
		.clear()
		.add('./src/entry-client.ts');

	webpackConfig.optimization.splitChunks(false).minimize(false);

	webpackConfig.plugins.delete('hmr');
	webpackConfig.plugins.delete('preload');
	webpackConfig.plugins.delete('prefetch');
	webpackConfig.plugins.delete('progress');
	webpackConfig.plugins.delete('friendly-errors');
	webpackConfig.plugin('limit').use(
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1
		})
	);
};
