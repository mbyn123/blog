const express = require('express')
const mongoose = require('mongoose')
const bodyParser= require('body-parser')//用于获取post请求参数
const passport = require('passport')//引入第三方包passport,验证登陆的token
const app = express()


//引入mongoDB数据库地址
const db = require("./config/key").mongoURL
//1.连接数据库 
mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err, '数据库连接失败'))

    
//初始化passport身份验证登陆token
app.use(passport.initialize());
//将passport引到passport.js文件中去单独配置
require('./config/passport')(passport)

//引入body-parser用于获取post请求的参数
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//2.引入路由，api接口地址
const users=require("./routers/api/users")
const profiles=require("./routers/api/profiles")

//3.使用api接口地址
app.use("/api/users",users)
app.use("/api/profiles",profiles)


//4.设置环境变量 端口
const port = process.env.PORT || 5000;
//5.监听端口
app.listen(port, () => {
    console.log(`服务器运行成功，请访问${port}端口`)
})