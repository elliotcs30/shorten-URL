const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shortURLSchema = new Schema({
  originURL: { type: String, required: true }, // 資料型別是字串, 必填欄位
  shortURL: { type: String, required: true }
})

module.exports = mongoose.model('shortURL', shortURLSchema)