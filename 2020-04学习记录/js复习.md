# 变量

1. var str = propmt('弹窗对话框')
2. 字符串转化为Number 计算

    parseInt(str) 整数
    parseFloat(str) 浮点数,小数
    
3. 递增运算符
     
     num++
4. 递减运算符
     
     num--

# 数组

    乘法表
    var str = ''
    for(var i=1;i<=9;i++){
        for(var j=1;j<=i;j++){
            str += `${j}x${i}=${j*i}\t` 
        }
        str += '\n'
    }
    console.log(str)
    
    提取链接
    function httpString(s) {
        var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
        //var reg = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        //var reg=/(http(s)?\:\/\/)?(www\.)?(\w+\:\d+)?(\/\w+)+\.(swf|gif|jpg|bmp|jpeg)/gi;
        //var reg=/(http(s)?\:\/\/)?(www\.)?(\w+\:\d+)?(\/\w+)+\.(swf|gif|jpg|bmp|jpeg)/gi;
        var reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
        //var reg= /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/;
        //v = v.replace(reg, "<a href='$1$2'>$1$2</a>"); //这里的reg就是上面的正则表达式
        //s = s.replace(reg, "$1$2"); //这里的reg就是上面的正则表达式
        s = s.match(reg);
        console.log(s)
        return (s)
    }
    var str = '女神节大牌手机优惠提前抢！手机全场至高24期免息，满减直降，价格超优惠！主会场https://u.jd.com/o62axm华为京东自营https://u.jd.com/wgwATTvivo京东自营https://u.jd.com/2L28cuoppo京东自营https://u.jd.com/JIcAMB华为畅享10 4GB+64GB 幻夜黑 抢购价 1049元https://u.jd.com/AHBli9 华为nova6【8+128G】5G/4G可选 普罗旺斯 抢购价 3399元https://u.jd.com/VLWsAt 华为 HUAWEI nova 6 SE 8+128G 樱雪晴空抢购价 2049元https://u.jd.com/8kPtX4 OPPO reno3 8GB+128GB 月夜黑 5G全网通抢购价 2999元 https://u.jd.com/UL5X8X OPPO A8 4GB+128GB 天青色 赠送扫地机器人抢购价 1199元 https://u.jd.com/0H51lA '
    httpString(str)

    提取最大值 
    var arr=[55,44,25,12,199,45,36,89]
    var max = arr[0]
    for(var i=0;i<arr.length;i++ ){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    console.log(max)

    数组新增1-100
    var arr2=[]
    for(var i=0;i<100;i++){
        arr2[i]=i+1
    }
    console.log(arr2)

    提取大于10的数
    var arr3=[1,22,36,51,1,4,22,14,98,49,31,5,4,9,7]
    var newarr=[]
    var j=0
    for(var i=0;i<arr3.length;i++){
        if(arr3[i]>10){
          newarr[newarr.length]=arr3[i]
          j++
        }
    }
    console.log(newarr)

    删除数组指定值
    var arr4=[1,22,36,51,1,4,22,14,98,49,31,5,4,9,7]
    var newarr2=[]
    for(var i=0;i<arr4.length;i++){
        if(arr4[i]!==1){
          newarr2[newarr2.length]=arr4[i]
        }
    }
    console.log(newarr2)

    数组反序
    var arr4=[1,22,36,51,1,4,22,14,98,49,31,5,4,9,7]
    var newarr2=[]
    for(var i=arr4.length-1;i>=0;i--){
          newarr2[newarr2.length]=arr4[i]
    }
    console.log(newarr2)

    冒泡排序
    var arr=[87,66,44,22,99,101,2,8,4,-1,9]
    for(var i=0;i<=arr.length-1;i++){// 外层循环次数 数组长度-1
        for(var j=0;j<=arr.length-i-1;j++){ // 里层循环交换次数 数组长度- i -1
            if(arr[j]>arr[j+1]){ // 前后两个元素相互比较,互换位置
              var temp = arr[j]
              arr[j] = arr[j+1]
              arr[j+1] = temp
            }
        }
    }
    console.log(arr)