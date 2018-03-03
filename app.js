/**
 * Created by 12 on 2017/7/3.
 */
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 跨域设置
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true)
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8")
  next()
})

app.get('/', function (req, res) {
  res.send('hello express')
})

app.get('/book', require('./router/book'))

app.get('/booklist', require('./router/booklist'))

app.get('/titles', require('./router/booktitles'))

app.get('/type', require('./router/type'))

app.get('/banner', require('./router/banner'))
app.get('/top', require('./router/top'))
app.get('/savebook', require('./router/savebook'))
app.post('/login', require('./router/user/login'))

const port = process.env.PORT || 3333

app.listen(3333, () => {
  console.log(`server running @${port}`)
})
