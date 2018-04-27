'use strict'
const merge = require('webpack-merge')
 // 构建环境
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
