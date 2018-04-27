// 在webpack.dev.conf.js中出现webpack.base.conf.js，这个文件是开发环境和生产环境，甚至测试环境，这些环境的公共webpack配置。可以说，这个文件相当重要
'use strict'
const path = require('path')// node自带的文件路径工具
const utils = require('./utils')// 工具函数集合
const config = require('../config')// 配置文件
const vueLoaderConfig = require('./vue-loader.conf') // 工具函数集合
// vux配置
const vuxLoader = require('vux-loader')

/**
 * 获得绝对路径
 * dir 相对于本文件的路径
 *   绝对路径
 */
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

const originalConfig = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
     // 编译输出的静态资源根路径
    path: config.build.assetsRoot,
    // 编译输出的文件名
    filename: '[name].js',
    // 正式发布环境下编译输出的上线路径的根路径
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    // 自动补全的扩展名
    extensions: ['.js', '.vue', '.json'],
    // 路径别名
    alias: {
      // 例如 import Vue from 'vue'，会自动到 'vue/dist/vue.common.js'中寻找
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      'services': resolve('src/services'),
      'store': resolve('src/store'),
      'utils': resolve('src/utils'),
      'views': resolve('src/views'),
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
          // 处理 vue文件
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
         // 编译 js
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        // 处理图片文件
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
         // 处理媒体文件
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
         // 处理字体文件
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
const webpackConfig = originalConfig // 原来的 module.exports 代码赋值给变量 webpackConfig
module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui']
})
