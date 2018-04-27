'use strict'
const merge = require('webpack-merge')
 // 构建环境
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"'
})
