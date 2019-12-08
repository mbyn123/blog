const mongoose = require('mongoose')

// 为路由中的users定义集合规则 定义注册需要使用的数据
const ProfileSchema = new mongoose.Schema({
    type: {
        type: String,
    },
    describe:{
        type:String
    },
    income: {
        type: String,
        //required: true
    },
    expend: {
        type: String,
       // required:true
    },
    cach:{
        type:String,
        require:true
    },
    remark:{
        type:String
    },
    date:{
        type: Date,
        default: Date.now
    }
})

// 创建profile的集合
const profile=mongoose.model('profiles',ProfileSchema)

module.exports = profile