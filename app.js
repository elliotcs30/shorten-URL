// 載入 express 並建構應用程式伺服器
const express = require('express')
// 載入 express-handlebars 並命名為 exphbs
const exphbs = require('express-handlebars')
const app = express()

const mongoose = require('mongoose') // 載入 mongoose
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // 設定連線到 mongoDB

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

// 建立名為 handlebars 的樣版引擎，並傳入 exphbs 與相關參數
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
// 透過 app.set 告訴 express 說要設定 view engine 是 handlebars
// 啟用樣版引擎 handlebars
app.set('view engine', 'handlebars')

// 設定首頁路由
app.get('/', (req, res) => {
  res.render('index')
})

// 設定 port 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})