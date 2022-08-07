# shorten-URL

## 專案功能
* 使用者可以使用短網址連向原始網站
* 使用者可以按 Copy 來複製縮短後的網址
* 若使用者沒有輸入內容，就按下了送出鈕，需要防止表單送出並提示使用者

## 開始使用
1.確認已安裝Node.js  

2.將本專案clone進本地端

3.安裝套件
```js
npm i express@4.17.1 express-handlebars@4.0.2 mongoose@6.0.4 
```

4. 資料庫連線設定，在 Terminal 輸入以下內容並替換帳號、密碼
```js
export MONGODB_URI="mongodb+srv://<your account>:<your password>@cluster0.ayhtm.mongodb.net/shorten-url?retryWrites=true&w=majority"
```

5.執行程式
```js
npm run start
```

6.當cmd出現以下這行表示啟動成功
```js
App is running on http://localhost:3000

```
7.接著在瀏覽器輸入
```js
http://localhost:3000
```