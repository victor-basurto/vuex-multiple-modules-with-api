const webpack = require('webpack');
const fs = require('fs');

// exports.chainWebpack = webpackConfig => {
// 	webpackConfig
// 		.entry('app')
// 		.clear()
// 		.add('./src/entry-client.ts');

// 	// webpackConfig.devServer.host = 'localhost';
// 	// webpackConfig.devServer.disableHostCheck = true;
// 	// webpackConfig.devServer.https.key = fs.readFileSync('./certs/dev_localhost.key');
// 	// webpackConfig.devServer.https.cert = fs.readFileSync('./certs/dev_localhost.pem');
// 	// webpackConfig.devServer.public = 'https://localhost:8080/';

// 	webpackConfig.optimization.splitChunks(false).minimize(false);

// 	webpackConfig.plugins.delete('hmr');
// 	webpackConfig.plugins.delete('preload');
// 	webpackConfig.plugins.delete('prefetch');
// 	webpackConfig.plugins.delete('progress');
// 	webpackConfig.plugins.delete('friendly-errors');
// 	webpackConfig.plugin('limit').use(
// 		new webpack.optimize.LimitChunkCountPlugin({
// 			maxChunks: 1
// 		})
// 	);
// };

module.exports = {
	pages: {
		index: {
			entry: 'src/entry-client.ts'
		}
	},
	devServer: {
		host: 'localhost',
		disableHostCheck: true,
		https: {
			key: fs.readFileSync('./certs/dev_localhost.key'),
			cert: fs.readFileSync('./certs/dev_localhost.pem'),
		},
		public: 'https://localhost:8080/'
	},
	// chainWebpack: config => {
    //     // ...other chains
    //     config.module // fixes https://github.com/graphql/graphql-js/issues/1272
    //         .rule('mjs$')
    //         .test(/\.mjs$/)
    //         .include
    //             .add(/node_modules/)
    //             .end()
    //         .type('javascript/auto');
    // },
    // configureWebpack: {
    //     resolve: {
    //         // .mjs needed for https://github.com/graphql/graphql-js/issues/1272
    //         extensions: ['*', '.mjs', '.js', '.vue', '.json']
    //     }
    // }
}
