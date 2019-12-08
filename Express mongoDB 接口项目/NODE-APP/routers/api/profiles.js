const express = require('express')//引入express框架
const router = express.Router();//引入router
const passport = require('passport')//引入第三方包passport,验证登陆的token

//引入profile集合
const profiles=require("../../models/Profile")

//测试接口 http://localhost:5000/api/profiles/test
router.get('/test',(req,res)=>{
    res.json({msg:'测试接口3'})
})

//添加数据接口  验证token
router.post('/add',passport.authenticate('jwt', { session: false }),(req,res)=>{
    //用来存储，添加上传的各项数据
    const profileFilelds={}
     //如果上传数据存在,将各项数据存储到profileFilelds对象中
    if(req.body.type) profileFilelds.type=req.body.type;
    if(req.body.describe) profileFilelds.describe=req.body.describe;
    if(req.body.income) profileFilelds.income=req.body.income;
    if(req.body.expend) profileFilelds.expend=req.body.expend;
    if(req.body.cach) profileFilelds.cach=req.body.cach;
    if(req.body.remark) profileFilelds.remark=req.body.remark;
    //向数据库profile集合中添加数据
    new profiles(profileFilelds).save()
    //添加成功
     .then(profile=>{
         res.json(profile)//将数据,返回给客户端
     })
     .catch(err=>{
         res.status(404).json(err)
     })
}) 

//请求所有数据接口
router.get('/',passport.authenticate('jwt', { session: false }),(req,res)=>{
    //查找profiles集合中的所有数据
    profiles.find()
     .then(profile=>{
         if(profile){
             res.json(profile)
         }else{
             return res.status(404).json({msg:'没有数据'})
         }
     })
     .catch(err=>{
         res.status(404).json(err)
     })
}) 

//请求单条数据接口
router.get('/:id',passport.authenticate('jwt', { session: false }),(req,res)=>{
    //查找profiles集合中的某一条数据
    profiles.findOne({_id:req.params.id})//请求单条数据的id
     .then(profile=>{
         if(profile){
             res.json(profile)
         }else{
             return res.status(404).json({msg:'没有该数据'})
         }
     })
     .catch(err=>{
         res.status(404).json(err)
     })
})

//更新某条数据接口
router.put('/edit/:id',passport.authenticate('jwt', { session: false }),(req,res)=>{
     //用来存储,编辑时上传的各项数据
     const profileFilelds={}
     //如果上传数据存在,将各项数据存储到profileFilelds对象中
    if(req.body.type) profileFilelds.type=req.body.type;
    if(req.body.describe) profileFilelds.describe=req.body.describe;
    if(req.body.income) profileFilelds.income=req.body.income;
    if(req.body.expend) profileFilelds.expend=req.body.expend;
    if(req.body.cach) profileFilelds.cach=req.body.cach;
    if(req.body.remark) profileFilelds.remark=req.body.remark;

    profiles.findOneAndUpdate(
        {_id:req.params.id},//更新编辑数据的id
        {$set:profileFilelds},//更新的数据
        {new:true}
    ).then(profile=>res.json(profile))//数据更新成功后，将数据返回给客户端
     .catch(err=>res.status(404).json(err))
})

//删除某条数据接口
router.delete('/delete/:id',passport.authenticate('jwt', { session: false }),(req,res)=>{
 profiles.findOneAndRemove({_id:req.params.id})//删除某条数据的id
   .then(profile=>{
       profile.save()//数据删除成功后，将数据库集合的数据，保存一下
       .then(profile=>{res.json(profile)})//将删除成功后的数据返回给客户端
   })
   .catch(err=>{
       res.status(404).json(err)
   })
})


module.exports=router