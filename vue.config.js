const path = require('path');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    publicPath: './', // 基本路径
    outputDir: 'dist', // 输出文件目录
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
    // 修改 pages 入口
    pages: {
        index: {
            entry: 'examples/main.js', // 入口
            template: 'public/index.html', // 模板
            filename: 'index.html' // 输出文件
        }
    },
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    // webpack配置
    chainWebpack: (config) => {
        config.plugins.delete('prefetch');
        // @ 默认指向 src 目录，这里要改成 examples
        // 另外也可以新增一个 ~ 指向 packages
        config.resolve.alias
            .set('_', path.resolve('examples'))
            .set('~', path.resolve('packages'));
        // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
        config.module
            .rule('js')
            .include.add(/packages/).end()
            .include.add(/examples/).end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options;
            });
        // config.plugins.delete('preload');
        
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production';
            // 将每个依赖包打包成单独的js文件
            // let optimization = {
            //     runtimeChunk: 'single',
            //     splitChunks: {
            //         chunks: 'all',
            //         maxInitialRequests: Infinity,
            //         minSize: 20000,
            //         cacheGroups: {
            //             vendor: {
            //                 test: /[\\/]node_modules[\\/]/,
            //                 name(module) {
            //                     // get the name. E.g. node_modules/packageName/not/this/part.js
            //                     // or node_modules/packageName
            //                     const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            //                     // npm package names are URL-safe, but some servers don't like @ symbols
            //                     return `npm.${packageName.replace('@', '')}`
            //                 }
            //             }
            //         }
            //     },
            //     minimizer: [new UglifyPlugin({
            //         uglifyOptions: {
            //             compress: {
            //                 warnings: false,
            //                 drop_console: true, // console
            //                 drop_debugger: false,
            //                 pure_funcs: ['console.log'] // 移除console
            //             }
            //         }
            //     })]
            // };
            // Object.assign(config, {
            //     optimization
            // })
        } else {
            // 为开发环境修改配置...
            config.mode = 'development';
        }
    },
    productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
    // css相关配置
    css: {
        extract: true, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: false, // 开启 CSS source maps?
        loaderOptions: {
            css: {}, // 这里的选项会传递给 css-loader
            postcss: {} // 这里的选项会传递给 postcss-loader
        }, // css预设器配置项
        modules: false // 启用 CSS modules for all css / pre-processor files.
    },
    // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
    parallel: require('os').cpus().length > 1,
    // PWA 插件相关配置 see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0', // 允许外部ip访问
        port: 8080, // 端口
        https: false, // 启用https
        // 错误、警告在页面弹出
        overlay: {
            warnings: true,
            errors: true
        }
        // 代理转发配置，用于调试环境
        // proxy: {
        //     '/api': {
        //         target: 'http://www.baidu.com/api',
        //         changeOrigin: true, // 允许websockets跨域
        //         // ws: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }
    },
    // 第三方插件配置
    pluginOptions: {}
};
