const mongoose = require('mongoose')

// 为路由中的users定义集合规则 定义注册需要使用的数据
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: {//头像
        type: String,
    },
    identity:{//身份
        type:String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// 创建users的集合
const users=mongoose.model('users',UserSchema)

module.exports = users