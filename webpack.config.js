const path = require('path')

module.exports = {
  entry: {
    entry: './src/entry.js',
    entry2: './src/entry2.js'
  }, // 入口文件
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].js'
  }, // 出口文件
  module: {}, // 模块
  plugins: [], // 插件
  devServer: {}, // 配置服务
}