const mongoose = require('mongoose')
const glob = require('glob')
const { resolve } = require('path')

import dbConfig from './config.js';
console.log(dbConfig.db);
// 设置默认 mongoose 连接
// const db = 'mongodb://@localhost:27017/Vuetube'
// 让 mongoose 使用全局 Promise 库
mongoose.Promise = global.Promise
exports.initSchemas = () => {
  glob.sync(resolve(__dirname, './schema', '**/*.js')).forEach(require)
}

exports.connect = () => {
  let maxConnectTimes = 0

  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true)
    }
  
    mongoose.connect(dbConfig.db, { useNewUrlParser: true })
  
    mongoose.connection.on('disconnected', () => {
      maxConnectTimes++
      if (maxConnectTimes < 5) {
        mongoose.connect(dbConfig.db, { useNewUrlParser: true })
      } else {
        throw new Error('数据库挂了')
      }
    })
  
    mongoose.connection.on('error', err => {
      maxConnectTimes++
      if (maxConnectTimes < 5) {
        mongoose.connect(dbConfig.db, { useNewUrlParser: true })
      } else {
        // throw new Error('数据库挂了')
        // reject(err)
        console.log(err)
      }
    })
  
    mongoose.connection.once('open', err => {
      resolve()
      console.log('MongoDB Connected scuucessfully');
    })
  })

}