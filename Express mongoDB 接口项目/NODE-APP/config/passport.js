
//引入mongoose 数据库
const mongoose=require('mongoose')
//获取数据库中的users集合   
const User=require("../models/users")

//引入token的加密名称
const key=require('../config/key')

//从passport-jwt中引入的方法
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key.secretOrKey;

//获取到从app.js中引入的passport
module.exports=passport=>{
    //从passport-jwt中引入的方法,验证token
    passport.use(new JwtStrategy(opts,(jwt_payload, done)=>{
      //查找数据库,使用登录用户的id,拿到用户的数据  
      User.findById(jwt_payload.id)
       .then(user=>{
           if(user){//如果用户存在
               return done(null,user)//就将用户数据,return出去
           }
           return done(null.false)
       })
       .catch(err=>console.log(err))
    }));
}
 