//顶部导航栏--游戏全目录
var but=document.getElementById("ain")
var er=document.getElementById("er")
var bin=document.getElementById("bin")
var bin2=document.getElementById("bin2")

but.onmouseover=function(){
    er.style.display="block"
}

er.onmouseover=function(){
    er.style.display="block"
}

er.onmouseout=function(){
    er.style.display="none"
}

but.onmouseout=function(){
    er.style.display="none"
}




//顶部导航栏--广告
var bin=document.getElementById("bin")
var bin1=document.getElementById("bin1")
var bin2=document.getElementById("bin2")
bin.onmouseover=function(){
    bin2.style.display="block"
    bin.style.background="none"
}
bin.onmouseout=function(){
    bin2.style.display="none"
    bin.style.background="url(C:/Users/Li/Desktop/阴阳师/img/1.png)"
}

//导航栏


window.onscroll=function(){
    var topscroll=window.pageYOffset
    var miannav=document.getElementById("mian-nav")
    var topdown=document.getElementById("topdown")
    if(topscroll>60){
        miannav.style.position="fixed"
        miannav.style.top="0"
        topdown.style.display="block"
    }else{
        miannav.style.position="absolute"
        miannav.style.top="0px"
        topdown.style.display="none"
    }
}

//同人大触

var next2=document.getElementById("next2")
var boxs=document.getElementById("boxs")
var xul=boxs.getElementsByTagName("ul")
var index4=0;

function z(){
   inde4x++
   if(index4>=xul.length){
       index4=0
   }
   img4()
}

function img4(){
    for(i4=0;i4<xul.length;i4++){
    xul[i4].style.display="none"    
    }
    xul[index4].style.display="block"
}

next2.onclick=function(){
    index4++;
    if(index4>=xul.length)
    index4=0
    img4()
}


//平安世界--声优阵
var lisyz=document.getElementById("lisyz")
var syz=document.getElementById("syz")
lisyz.onclick=function(){
    syz.style.display="block"
    sis.style.display="none"
    lisyz.className="avt"
    lissl.classList.remove("avt")
    yys.style.display="none"
    lizjl.classList.remove("avt")
}


//平安世界--式神录
var lissl=document.getElementById("lissl")
var links=document.getElementById("links")
var sis=document.getElementById("sis")
var yys=document.getElementById("yys")
var sslb=document.getElementById("sslb")
var ssqt=document.getElementById("ssqt")

lissl.onclick=function(){
    links.style.display="block"
    syz.style.display="none"
    lissl.className="avt"
    lisyz.classList.remove("avt")
    yys.style.display="none"
    lizjl.classList.remove("avt")
    sis.style.display="block"
}

links.onclick=function(){
    sslb.style.display="block"
    ssqt.style.display="none"
    setTimeout(function(){
    links.style.display="none"
    },30)
}




var ssrw=document.getElementById("ssrw")
var ssa=ssrw.getElementsByTagName("a")
var rw=document.getElementById("rw")
var ssdiv=rw.getElementsByTagName("div")
var aniu=document.getElementById("aniu")
var ii=0,timer=null;

function ssl(){
    ii++;
    if(ii>=ssdiv.length){
        ii=0
    }
    sslu()
}

function sslu(){
    for(is=0;is<ssdiv.length;is++){
       ssdiv[is].style.display="none"
       ssa[is].style.color="#000"
     
      
    }
      ssdiv[ii].style.display="block"
      ssa[ii].style.color="#c2a060"
    //  console.log(ssdiv[ii].offsetWidth)
      if(ssdiv[ii].offsetWidth>1060){
          aniu.style.display="block"
      }else{
        aniu.style.display="none"
      }
}

for(var s=0;s<ssa.length;s++){
    ssa[s].id=s
    ssa[s].onclick=function(){
     ii=this.id
     sslu()
 
    }
}

var sang=document.getElementById("sang")
var xia=document.getElementById("xia")
var SR=document.getElementById("SR")
var R=document.getElementById("R")
var sss=1060


sang.onclick=function(){
    SR.style.left=SR.offsetLeft+sss+"px"
    R.style.left=R.offsetLeft+sss+"px"
    SR.style.transition="0.8s"
    R.style.transition="0.8s"
    console.log(SR.offsetLeft)
 
}

xia.onclick=function(){
    SR.style.left=SR.offsetLeft+-sss+"px"
    R.style.left=R.offsetLeft+-sss+"px"
    SR.style.transition="0.8s"
    R.style.transition="0.8s"
    console.log(SR.offsetLeft)
   
}




//平安世界--主角录
var ssleft=document.getElementById("ssleft")
var ssright=document.getElementById("ssright")
var bimg=document.getElementById("big-img")
var ssdiv=bimg.getElementsByTagName("div")
var ssmz=document.getElementById("ssmz")
var ssa1=ssmz.getElementsByTagName("a")
var tet=document.getElementById("tet")
var rtet=document.getElementById("rtet")
var lizjl=document.getElementById("lizjl")
var yys=document.getElementById("yys")
var ssdex=0,timer=null;

lizjl.onclick=function(){
yys.style.display="block"
lizjl.className="avt"
sis.style.display="none"
syz.style.display="none"
links.style.display="none"
lissl.classList.remove("avt")
lisyz.classList.remove("avt")
}

function ssss(){
    ssdex++;
    if(ssdex>=ssdiv.length){
        ssdex=0
    }
    ssimg()
}

function ssimg(){
    for(var ssi=0;ssi<ssdiv.length;ssi++){
       ssdiv[ssi].style.display="none"
       ssa1[ssi].className=""
      
    }
     ssdiv[ssdex].style.display="block"
     ssa1[ssdex].className="cc"
}

ssright.onclick=function(){
    ssdex++;
    if(ssdex>=ssdiv.length)
    ssdex=0
    ssimg()
    text()
  
}

function text(){
    rtet.innerHTML=ssdiv[ssdex+1].getAttribute("data-name")
    tet.innerHTML=ssdiv[ssdex-1].getAttribute("data-name")
}

function text2(){
    
    tet.innerHTML=ssdiv[ssdex-1].getAttribute("data-name")
    rtet.innerHTML=ssdiv[ssdex+1].getAttribute("data-name")
}



ssleft.onclick=function(){
    ssdex--;
    if(ssdex<0)
    ssdex=ssdiv.length-1;
    ssimg()
   text2()
}


for(var rr=0;rr<ssa1.length;rr++){
    ssa1[rr].id=rr
    ssa1[rr].onclick=function(){

        ssdex=this.id
        ssimg()
    }
}

//平安世界--式神录切图
var sslast=document.getElementById("sslast")
var ssnext=document.getElementById("ssnext")
var ssbimg=document.getElementById("ssbimg")
var ssdiv2=ssbimg.getElementsByTagName("div")
var las=document.getElementById("las")
var nex=document.getElementById("nex")
var ssdex2=0;

function ssss2(){
   ssdex2++;
   if(ssdex2>=ssdiv2.length){
       ssdex2=0
   }
   ssimg2()
}

function ssimg2(){
    for(var ssi2=0;ssi2<ssdiv2.length;ssi2++){
        ssdiv2[ssi2].style.display="none"
    }
     ssdiv2[ssdex2].style.display="block"
    

}

sslast.onclick=function(){
    ssdex2--;
    if(ssdex2<0)
    ssdex2=ssdiv2.length-1
    ssimg2()
    text3()
}

ssnext.onclick=function(){
    ssdex2++;
    if(ssdex2>=ssdiv2.length)
    ssdex2=0
    ssimg2()
    text4()
}

function text3(){
    nex.innerHTML=(ssdiv2[ssdex2+1].getAttribute("data-name"))
    las.innerHTML=(ssdiv2[ssdex2-1].getAttribute("data-name"))
}


function text4(){
    las.innerHTML=(ssdiv2[ssdex2-1].getAttribute("data-name"))
    nex.innerHTML=(ssdiv2[ssdex2+1].getAttribute("data-name"))
}



//中间背景大图轮播

    var mian=document.getElementById("mian")
    var banner=document.getElementById("banner")
    var odiv=banner.getElementsByTagName("div")
    var index=0 ,timer=null;
    
    mian.onmousemove=function(){
        clearInterval(timer)
    }
    mian.onmouseout=function(){
        timer=setInterval(function(){
           index++;
           if(index>=odiv.length){
              index=0
           }
           img()
        },5000)
    }
    mian.onmouseout()
    
    function img(){
        for(var i=0;i<odiv.length;i++){
            odiv[i].style.display="none"
            }
          odiv[index].style.display="block" 
    }

//中间背景小图轮播

function getstyle(obj,name){
    if(obj.currentstyle){
       return objet.currentstyle[name]
    }else{
        return getComputedStyle(obj,false)[name];
    }
    }

var oBox=document.getElementById("innerbox")
var ul=document.getElementById("zul")
var oLeft=document.getElementById("left")
var oRight=document.getElementById("right")

//中间二维码扫描
var ewm=document.getElementById("ewmimg")
var spee=0;
function move(){
    setInterval(function(){
    if(ewm.offsetTop<98){
          spee++
    }else if(ewm.offsetTop>=101){
          spee--
    }
    ewm.style.top=ewm.offsetTop+spee+"px"
    },50)
}

move()


//同人手账--热门活动
var imgs=document.getElementById("cardimgs")
var oa=imgs.getElementsByTagName("a")
var ico=document.getElementById("ico")
var qspan=ico.getElementsByTagName("span")
var timer=null,index2=0;

imgs.onmousemove=function(){
    clearInterval(timer)
}

imgs.onmouseout=function(){
    timer=setInterval(function(){
      index2++;
      if(index2>=oa.length){
        index2=0;
      }
      img2()
    },5000)
}

imgs.onmouseout()

function img2(){
    for(var i2=0;i2<oa.length;i2++){
        oa[i2].style.display="none"
        qspan[i2].className=" "
    }
    oa[index2].style.display="block"
    qspan[index2].className="cc"
}

for(var n=0;n<qspan.length;n++){
  qspan[n].id=n
  qspan[n].onclick=function(){
      index2=this.id
      img()
  }
}

//同人手账--热门作品

var inner=document.getElementById("inner")
var oul=inner.getElementsByTagName("ul")
var next=document.getElementById("next")
var timer=null,index3=0;
 
inner.onmouseover=function(){
    clearInterval(timer)
}

inner.onmouseout=function(){
    timer=setInterval(function(){
     index3++;
     if(index3>=oul.length){
       index3=0
     }
     img3()
    },5000)
}

inner.onmouseout()

function img3(){
    for(var i3=0;i3<oul.length;i3++){
      oul[i3].style.display="none"
    }
    oul[index3].style.display="block"
}

next.onclick=function(){
   index3++;
   if(index3>=oul.length)
   index3=0
   img3()  
}



//游戏攻略

var news=document.getElementById("news")
var ot=news.getElementsByTagName("div")
var lul=document.getElementById("nows-w")
var pli=lul.getElementsByTagName("li")
var ooa=lul.getElementsByTagName("a")
var index5=0 ,timer=null;

ot.onmouseover=function(){
    clearInterval(timer)
}

ot.onmouseout=function(){
    timer=setInterval(function(){
        index5++;
        if(index5>=ot.length){
         index5=0
        }
        img5()
    },3000)
}

ot.onmouseout()

function img5(){
    for(var i5=0;i5<ot.length;i5++){
        ot[i5].style.display="none"    
        ooa[i5].className=" "
    }
    ot[index5].style.display="block"    
    ooa[index5].className="on"
}

for(var v=0;v<ooa.length;v++){
    ooa[v].id=v;
    ooa[v].onmousemove=function(){
        index5=this.id
        img5()
    }

}

//导航栏二级菜单
var oa1=document.getElementById("a1")
var oa2=document.getElementById("a2")
var oa3=document.getElementById("a3")
var oa4=document.getElementById("a4")
var oa5=document.getElementById("a5")
var oa6=document.getElementById("a6")
var oa7=document.getElementById("a7")
var oa8=document.getElementById("a8")
var oa9=document.getElementById("a9")
var oa10=document.getElementById("a10")

var oe1=document.getElementById("e1")
var oe2=document.getElementById("e2")
var oe3=document.getElementById("e3")
var oe4=document.getElementById("e4")
var oe5=document.getElementById("e5")
var oe6=document.getElementById("e6")
var oe7=document.getElementById("e7")

var oiner=document.getElementById("innerX")
var onaw=document.getElementById("nawX")
var onae=document.getElementById("inerY")


oa2.onmousemove=function(){
    oiner.style.display="block"
    oe1.style.display="block"
}




oa3.onmousemove=function(){
    oiner.style.display="block"
    oe2.style.display="block"
    oe1.style.display="none"
}

oa4.onmousemove=function(){
    oiner.style.display="block"
    oe3.style.display="block"
    oe2.style.display="none"
    oe1.style.display="none"
}

oa5.onmousemove=function(){
    oiner.style.display="block"
    oe4.style.display="block"
    oe3.style.display="none"
    oe2.style.display="none"
    oe1.style.display="none"
}

oa6.onmousemove=function(){
    oiner.style.display="block"
    oe5.style.display="block"
    oe4.style.display="none"
    oe3.style.display="none"
    oe2.style.display="none"
    oe1.style.display="none"
}

oa7.onmousemove=function(){
    oiner.style.display="block"
    oe6.style.display="block"
    oe5.style.display="none"
    oe4.style.display="none"
    oe3.style.display="none"
    oe2.style.display="none"
    oe1.style.display="none"
}


oa9.onmousemove=oa1.onmousemove=oa8.onmousemove=function(){
    oiner.style.display="none"
}

oa10.onmousemove=function(){
    oiner.style.display="block"
    oe7.style.display="block"
    oe6.style.display="none"
    oe5.style.display="none"
    oe4.style.display="none"
    oe3.style.display="none"
    oe2.style.display="none"
    oe1.style.display="none"
}

oa10.onmouseout=function(){
    oe7.style.display="none"
}


// 泛娱乐
var sixul=document.getElementById("sixul")
var sixleft=document.getElementById("sixleft")
var sixright=document.getElementById("sixright")

var x=230;
if(sixul.offsetLeft == 0){
    sixleft.style.display="none"
}



sixleft.onclick=function(){
    sixul.style.left=sixul.offsetLeft+x+"px"
    console.log(sixul.offsetLeft)
    if(sixul.offsetLeft < 0){
        sixleft.style.display="block"
     }else if(sixul.offsetLeft == 0){
         sixleft.style.display="none"
     }

     if(sixul.offsetLeft == -230){
        sixleft.style.display="none"
     }

      if(sixul.offsetLeft != -460){
         sixright.style.display="block"
      }
}

sixright.onclick=function(){
    sixul.style.left=sixul.offsetLeft+-x+"px"
    console.log(sixul.offsetLeft)
    if(sixul.offsetLeft != 0){
        sixleft.style.display="block"
     }else if(sixul.offsetLeft == 0){
        left.style.display="none"
    }
     
    if(sixul.offsetLeft == -230){
        sixleft.style.display="none"
     }
      if(sixul.offsetLeft == -460){
         sixright.style.display="none"
     }
}

//京都商业街
var xboxs=document.getElementById("xboxs")
var ximg=document.getElementById("ximg")
var seekbar=document.getElementById("seekbar")
var bar=document.getElementById("bar")

var zzz=0;

bar.onmousedown=function(ev){
var zzz=ev.clientX-bar.offsetLeft
   document.onmousemove=function(ev){
       var n=ev.clientX-zzz
       if(n<0){
             n=0
       }else if(n>seekbar.offsetWidth-bar.offsetWidth){
         n=seekbar.offsetWidth-bar.offsetWidth
        }
        bar.style.left=n+"px"
        var scale=n/(seekbar.offsetWidth-bar.offsetWidth)
        ximg.style.left=-scale*(ximg.offsetWidth-xboxs.offsetWidth)+"px"
   }
    document.onmouseup=function(){
        document.onmousemove=null
        document.onmouseup=null
    }
}


   