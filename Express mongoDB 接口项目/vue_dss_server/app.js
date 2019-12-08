const express = require('express')
const compression = require('compression')//gzip压缩
const app = express()

app.use(compression())//gzip配置必须写在前面
app.use(express.static('./dist'))


app.listen(80,()=>{
    console.log('服务运行成功，请访问http://127.0.0.1')
})