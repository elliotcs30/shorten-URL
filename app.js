// 載入 express 並建構應用程式伺服器
const express = require('express')
// 載入 express-handlebars 並命名為 exphbs
const exphbs = require('express-handlebars')
// 載入 shorten URL model
const ShortURL = require('./models/shortURL')
// 引用 body-parser
const bodyParser = require('body-parser')

const app = express()
const host = 'localhost'
const PORT = 3000

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

// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))

// 設定靜態檔案
app.use(express.static('public'))

// 設定 port 3000
app.listen(PORT, () => {
  console.log(`App is running on http://${host}:${PORT}`)
})