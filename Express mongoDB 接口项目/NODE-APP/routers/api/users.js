const express = require('express')//引入express框架
const router = express.Router();//引入router

const bcrypt = require('bcryptjs')//引入第三方包，用来对密码加密
const gravatar = require('gravatar')//引入第三方包，处理用户头像图片
const jwt = require('jsonwebtoken')//引入第三方包jwt，用来实现Token 
const passport = require('passport')//引入第三方包passport,验证登陆的token

//引入jwt的加密名称
const key = require('../../config/key')

//引入用户集合
const Users = require('../../models/users')

//注册接口
router.post("/register", (req, res) => {
  //查询数据库中是否拥有邮箱
  Users.findOne({ email: req.body.email })
    .then((user) => {//拿到数据库返回结果
      if (user) {//如果邮箱已存在
        return res.status(400).json("邮箱已被注册!")//返回400,及通知信息
      } else {//不存在
        var avatar = gravatar.url(req.body.email, { s: '200', r: 'pg', d: 'mm' });
        //向集合中添加注册的数据
        const newUser = new Users({
          name: req.body.name,
          password: req.body.password,
          email: req.body.email,
          avatar,
          identity: req.body.identity
        })
        //对注册密码进行加密
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(newUser.password, salt, function (err, hash) {
            if (err) throw err;//如果出现异常，将错误抛出
            newUser.password = hash //密码就是hash加密后的密码
            //向集合中提交注册的数据
            newUser.save()
              .then(user => res.json(user))//成功后,将数据返回
              .catch(err => console.log(err))
          });
        });
      }
    })
})

//登陆接口
router.post("/login", (req, res) => {
  //获取用户登陆的数据
  const email = req.body.email
  const password = req.body.password
  //查询数据库，email是否存在
  Users.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json('邮箱不存在')
      }
      // 对登陆密码，进行验证
      bcrypt.compare(password, user.password)
        .then(isMath => {
          if (isMath) {//验证通过
            //使用jwt生成token,发送给客户端
            const rule = { id: user.id, name: user.name, identity: user.identity, avatar: user.avatar }//jwt加密规则
            jwt.sign(rule, key.secretOrKey, { expiresIn: 3600 }, (err, token) => {
              if (err) throw err;
              res.json({ msg: '登陆成功', token: "Bearer " + token })//返回token
            })
          } else {
            return res.status(400).json('密码错误')
          }
        })

    })
})

//验证token的测试接口 使用passport中的authenticate方法对jwt进行验证
router.get("/current", passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({//将登陆用户的数据发送给服务端
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
    identity: req.user.identity
  })
})

module.exports = router