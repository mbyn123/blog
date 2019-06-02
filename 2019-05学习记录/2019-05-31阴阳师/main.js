//顶部导航栏--游戏全目录
var but = document.getElementById("ain")
var er = document.getElementById("er")
var bin = document.getElementById("bin")
var bin2 = document.getElementById("bin2")

but.onmouseover = function () {
    er.style.display = "block"
}

er.onmouseover = function () {
    er.style.display = "block"
}

er.onmouseout = function () {
    er.style.display = "none"
}

but.onmouseout = function () {
    er.style.display = "none"
}




//顶部导航栏--广告
var bin = document.getElementById("bin")
var bin1 = document.getElementById("bin1")
var bin2 = document.getElementById("bin2")
bin.onmouseover = function () {
    bin2.style.display = "block"
    bin.style.background = "none"
}
bin.onmouseout = function () {
    bin2.style.display = "none"
    bin.style.background = "url(C:/Users/Li/Desktop/阴阳师/img/1.png)"
}

//顶部导航栏--垂直轮播

var topdin = document.getElementById('topdin');
var one = document.getElementById('one');
var two = document.getElementById('two');
var speed = 10;
var t = 2000;
var speeds = 54;
var timer = null;
two.innerHTML = one.innerHTML;
topdin.scrollTop = 0;

function Move() {
    topdin.scrollTop++;
    timer = setInterval("scrollUp()", speed);
}
//
function scrollUp() {
    if (topdin.scrollTop % speeds == 0) {
        clearInterval(timer);
        setTimeout("Move()", t);
    }
    else {
        topdin.scrollTop++;
        if (topdin.scrollTop >= topdin.scrollHeight / 2) {
            topdin.scrollTop = 0;
        }
    }
}
//
setTimeout("Move()", t);//初始化




//导航栏

window.onscroll = function () {
    var topscroll = window.pageYOffset
    var miannav = document.getElementById("mian-nav")
    var topdown = document.getElementById("topdown")
    if (topscroll > 60) {
        miannav.style.position = "fixed"
        miannav.style.top = "0"
        topdown.style.display = "block"
    } else {
        miannav.style.position = "absolute"
        miannav.style.top = "0px"
        topdown.style.display = "none"
    }
}






//中间背景大图轮播
function zzzz() {
    var mian = document.getElementById("mian")
    var banner = document.getElementById("banner")
    var odiv = banner.getElementsByTagName("div")

    var indexz = 0, timer = null;

    mian.onmousemove = function () {
        clearInterval(timer)
    }
    mian.onmouseout = function () {
        timer = setInterval(function () {
            indexz++;
            if (indexz >= odiv.length) {
                indexz = 0
            }
            img()
        }, 4000)
    }
    mian.onmouseout()

    function img() {
        for (var iz = 0; iz < odiv.length; iz++) {
            odiv[iz].style.display = "none"
        }
        odiv[indexz].style.display = "block"
    }

}
zzzz()
//中间背景小图轮播

var oBox = document.getElementById("innerbox")
var zul = document.getElementById("zul")
var zleft = document.getElementById("left")
var zright = document.getElementById("right")
var cur = 0; //定义一个变量用于设置left值
var ztimer = null; //定义一个计时器
var target = 0;
var ztimer1 = null;
var iz = 0;
ztimer = setInterval(autoPlay, 2000); // 定义计时器每25毫秒执行一次
function autoPlay() { //执行每次执行函数，left值减1
    if (target <= -300) {
        cur = 1;
        target = 0;
    } else {
        target -= 102;
    }
    sport(target);

}

zright.onclick = function (argument) {
    if (target <= -300) {
        cur = 0;
        target = -100;
    } else {
        target -= 100;
    }
    sport(target);

}

zleft.onclick = function (argument) {
    if (target > -100) {
        cur -= 400;
        target = -300;

    } else {
        target += 100;
    }
    sport(target);
}

function sport(tar) {
    clearInterval(ztimer1);
    ztimer1 = setInterval(autoPlay, 30); //设置定时器每30毫秒执行一次
    function autoPlay() {
        if (cur == tar) {
            clearInterval(ztimer1) //大于目标值时，清空计时器
        } else {
            zspeed = (tar - cur) / 7; //计算速度
            zspeed = zspeed > 0 ? Math.ceil(zspeed) : Math.floor(zspeed); //取整
            cur = cur + zspeed;
            zul.style.left = cur + "%";
        }
    }
}
oBox.onmouseover = function () { //移出时清除计时器
    clearInterval(ztimer);
}
oBox.onmouseout = function () { //移入时开始计时器
    ztimer = setInterval(autoPlay, 2000);
}

function aaxbj() {
    var axbj = [
        {
            h2: "新闻  |  玉藻前登场！《阴阳师》百鬼幼儿园更新啦！",
            p: "百鬼幼儿园第五百届夏季运动会火热进行中！SSR班和SR班的比赛，到了最关键时刻！白狼VS御馔津，究竟谁的箭术更胜一筹？酒吞童子……",
            img: "http://prqnryn2v.bkt.clouddn.com/22.png"
        },
        {
            h2: "新闻  |  玉藻前登场！《阴阳师》百鬼幼儿园更新啦！",
            p: "百鬼幼儿园第五百届夏季运动会火热进行中！SSR班和SR班的比赛，到了最关键时刻！白狼VS御馔津，究竟谁的箭术更胜一筹？酒吞童子……",
            img: "http://prqnryn2v.bkt.clouddn.com/22.png"
        },
        {
            h2: "新闻  |  玉藻前登场！《阴阳师》百鬼幼儿园更新啦！",
            p: "百鬼幼儿园第五百届夏季运动会火热进行中！SSR班和SR班的比赛，到了最关键时刻！白狼VS御馔津，究竟谁的箭术更胜一筹？酒吞童子……",
            img: "http://prqnryn2v.bkt.clouddn.com/22.png"
        },
        {
            h2: "新闻  |  花泽香菜献声《阴阳师》面灵气同人曲日本版！！",
            p: "为了让阴阳师们的作品收获更多喜爱，在与原创团队充分友好沟通后，寮办诚邀面灵气CV花泽香菜演唱同人歌曲《心生七面，善恶难辨》的日……",
            img: "http://prqnryn2v.bkt.clouddn.com/22.png"
        },

        {
            h2: "新闻  |  穿越现世！《阴阳师》“离岛之歌”主题cosplay摄影周回顾",
            p: "初入皐月，夏日气息扑面。一键换装、摄影录像，主题cosplay摄影周刚刚过去，阴阳师们一起来回顾一下现场的盛况吧！【“离岛之歌”……",
            img: "http://prqnryn2v.bkt.clouddn.com/22.png"
        },
        {
            h2: "新闻  |  洒墨染纸 妙笔成卷《阴阳师》风格化同人佳作欣赏！",
            p: "听闻有这样一群阴阳师，他们绘百鬼阴阳，录平安风貌。为了能一睹传说中的佳作，寮办不远万里请到了风格迥异的三位大触……",
            img: "http://prqnryn2v.bkt.clouddn.com/22.png"
        },
        {
            h2: "新闻  |  伪神降临！《阴阳师》全新战场玩法来袭",
            p: "平安京晨露未干，幽光已隐隐浮现。恍然间，一个声音浮现于耳畔“找到她们！魂灵骚动的真相已经慢慢明晰，原来是无辜的少女被献祭成巫女……",
            img: "http://prqnryn2v.bkt.clouddn.com/22.png"
        },
        {
            h2: "新闻  |  全新传记解锁《阴阳师》式神专属配饰、姿度重磅更新！",
            p: "夏日初晴映平安，暖风和煦添新貌。春夏交替之际，六式神全新传记来袭，本次又新增了什么专属的配饰和姿度呢？寮办将在此为各位一一揭晓……",
            img: "http://prqnryn2v.bkt.clouddn.com/22.png"
        },
        {
            h2: "新闻  |  成吨快乐来袭！《阴阳师》同人衍生动画视频创作大赛开启<",
            p: "梦幻夏日已经开启，幼儿园里都是小鬼们的欢声笑语。坐上竹子车，扛上鬼葫芦，快乐的小鬼派对从这里开始！【拼豆模型】在像素风的拼豆模……",
            img: "http://prqnryn2v.bkt.clouddn.com/22.png"
        },
        {
            h2: "新闻  |  八岐大兔？《没出息的阴阳师一家》第3话更新！",
            p: "天下武功，唯快不破。在针锋相对的斗技场上，速度决定了能否抢占先机。可是...为什么每次都比对手慢呢？！屡战屡败的山兔含泪发誓……",
            img: "http://prqnryn2v.bkt.clouddn.com/22.png"
        },
        {
            h2: "新闻  |  素纸雏心《阴阳师》匣中少女全新皮肤上线！！",
            p: "在传说中，女儿节人偶中寄宿着灵魂，这个灵魂会守护着人偶的主人，为其带走厄运。岁月流淌，灯火不息，人们世世代代相信着这个关于守护……",
            img: "http://prqnryn2v.bkt.clouddn.com/22.png"
        },
        {
            h2: "新闻  |  萌鬼运动会开幕！《阴阳师》《百鬼幼儿园》更新啦！",
            p: "彩旗迎风飘扬，战鼓轰隆擂响。一声可爱的呼喊响彻天际，“Holahola~”主持人山兔宣布：百鬼幼儿园第500届夏季运动会正式开……",
            img: "http://prqnryn2v.bkt.clouddn.com/22.png"
        },

        {
            h2: "新闻  |  守护的契约《阴阳师》公益猫盒设计大赛开启！",
            p: "阳光懒懒地洒在庭院里，顽皮活泼的小动物们四处打闹,在阴阳师们的温暖陪伴下尽情撒欢。为给现世的流浪小动物也带去温暖，寮办希望与大……",
            img: "http://prqnryn2v.bkt.clouddn.com/22.png"
        },

        {
            h2: "新闻  |  协力同行《阴阳师》 守护系统全新升级！",
            p: "今天庭院的门廊外，隐隐传来一阵嘈杂声：“呀，今天和后辈约好了八点上线！”“少年，快试试我刚送你的五星暴击针女，不用谢！“体力不……",
            img: "http://prqnryn2v.bkt.clouddn.com/22.png"
        },
        {
            h2: "新闻  |  星河流萤似花灯《阴阳师》椒图全新皮肤即将上线！",
            p: "皓月当空，星河隐现，流水涓涓，润物无声。“嘭——”庆典的花火突然升空，倏地将寂静的庭院点亮。这位独居深海的少女，不知道已经迎来……",
            img: "http://prqnryn2v.bkt.clouddn.com/22.png"
        },

        {
            h2: "新闻  |  真爱回馈《阴阳师》福利大放送！",
            p: "5月的阳光映出斑驳的影子，庭院的树下放着一堆亮眼的礼包，这难道是......感恩与热爱的气息扑来，空气中也弥漫起了节日的气氛……",
            img: "http://prqnryn2v.bkt.clouddn.com/22.png"
        },


    ]
    var content = " "
    for (var i = 0; i < axbj.length; i++) {
        content +=(`<li><a><h2>${axbj[i].h2}</h2><p>${axbj[i].p}</p></a><span><img src='${axbj[i].img}'\/></span></li>`)
    }
    zul.innerHTML = content

}
aaxbj()

//中间二维码扫描
var ewm = document.getElementById("ewmimg")
var spee = 0;
function move() {
    setInterval(function () {
        if (ewm.offsetTop < 98) {
            spee++
        } else if (ewm.offsetTop >= 101) {
            spee--
        }
        ewm.style.top = ewm.offsetTop + spee + "px"
    }, 50)
}

move()







//导航栏二级菜单
var oa1 = document.getElementById("a1")
var oa2 = document.getElementById("a2")
var oa3 = document.getElementById("a3")
var oa4 = document.getElementById("a4")
var oa5 = document.getElementById("a5")
var oa6 = document.getElementById("a6")
var oa7 = document.getElementById("a7")
var oa8 = document.getElementById("a8")
var oa9 = document.getElementById("a9")
var oa10 = document.getElementById("a10")

var oe1 = document.getElementById("e1")
var oe2 = document.getElementById("e2")
var oe3 = document.getElementById("e3")
var oe4 = document.getElementById("e4")
var oe5 = document.getElementById("e5")
var oe6 = document.getElementById("e6")
var oe7 = document.getElementById("e7")

var oiner = document.getElementById("innerX")
var onaw = document.getElementById("nawX")
var onae = document.getElementById("inerY")

function aaaae() {
    var aae1 = [
        {
            img: "https://nie.res.netease.com/r/pic/20190523/e06effd0-3cc4-4a84-815b-36d20352dee8.jpg",
            s: "新闻",
            p: "感谢一路有你！网易大神周年庆多重好礼等你解锁"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/navimg/3.jpg",
            s: "新闻",
            p: "怨念的呼唤 《阴阳师》全新SP阶式神御怨般若登场！"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190522/9b379a96-477a-4ae1-9ac0-6089905a682d.jpg",
            s: "新闻",
            p: "【推广】堡垒前线：今日全平台火爆公测"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/navimg/1.jpg",
            s: "新闻",
            p: "999天签到福利  《阴阳师》神乐皮肤·稚子之忆登场"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/navimg/5.jpg",
            s: "新闻",
            p: "花泽香菜现身！《阴阳师》 春和演武战队赛暨“大触觉醒”颁奖典礼售票启动！"
        },
    ]

    aae2 = [
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/img/subnav/shishen/ss_1_2fa7e81.jpg",
            s: "联动"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/img/subnav/shishen/ss_2_a4916b4.jpg",
            s: "SP"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/img/subnav/shishen/ss_1_2fa7e81.jpg",
            s: "SSR"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/img/subnav/shishen/ss_2_a4916b4.jpg",
            s: "SR"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/img/subnav/shishen/ss_1_2fa7e81.jpg",
            s: "R"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/img/subnav/shishen/ss_2_a4916b4.jpg",
            s: "N"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/img/subnav/shishen/ss_1_2fa7e81.jpg",
            s: "呱太"
        },

    ]

    aae3 = [
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/img/subnav/gonglue/pic_4_171aa2f.jpg",
            s: "萌新上路"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/img/subnav/gonglue/pic_1_fb5f1d1.jpg",
            s: "式神御魂"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/img/subnav/gonglue/pic_2_f1ba243.jpg",
            s: "秘闻副本"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/img/subnav/gonglue/pic_4_171aa2f.jpg",
            s: "斗技阵容"
        },
    ]

    aae4 = [
        {
            img: "https://nie.res.netease.com/r/pic/20190516/e7f34b05-b911-4616-b1fa-99dcb8f5d32c.jpg",
            s: "公益猫盒 设计大赛"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190516/2a940657-b72c-4605-8f6e-33e3808f4080.jpg",
            s: "不知火降临脑洞百科"
        }
    ]

    aae4a = [
        {
            a1: "每日精选",
            a2: "同人绘画",
            a3: "玩家cos",
            a4: "同人视频",
            a5: "同人小说",
            a6: "同人绘画",
        }
    ]
    aae4b = [
        {
            a1: "#百鬼幼儿园#",
            a2: "#不知火#",
            a3: "#集绘千卷#",
            a4: "#结缘物华#",
            a5: "#百绘罗衣#",
        }

    ]
    aae5 = [
        {
            img: "https://nie.res.netease.com/r/pic/20180919/47d761fa-3493-4b2c-8c1d-9065c5ac7816.png",
            s: "泡面番：平安物语"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20180919/b72ed9bd-7507-420a-b270-86c6c11d2b32.png",
            s: "动画：百鬼幼儿园"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190314/7839eb35-7723-433a-86ea-60097c00c481.png",
            s: "音乐剧：大江山之章"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20180919/e0ac4f21-6274-4739-96f3-49aee84c5c5e.png",
            s: "漫画：官方漫画"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20180919/709619be-531e-4c68-ab39-b80492260b56.png",
            s: "商业街：周边商城"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20180919/9099e3fb-854b-48b5-ae43-4a7f935c867e.png",
            s: "大事记：线下大事记"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20180919/8e6605d3-e335-46be-a5be-e1bfd3bd74ef.png",
            s: "电台：京都放映町"
        },
    ]

    aae6 = [
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/img/subnav/gonglue/pic_1_fb5f1d1.jpg",
            s: "视频中心"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/img/subnav/gonglue/pic_2_f1ba243.jpg",
            s: "原画壁纸"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/img/subnav/gonglue/pic_3_6b1c9bd.jpg",
            s: "游戏原声"
        },
    ]



    var content = " "
    for (var i = 0; i < aae1.length; i++) {
        content += ("<a>" + "<img src='" + aae1[i].img + "'" + "\/>" + "  <span class='i'>" + aae1[i].s + "</span>" + "<span class=i2>" + "</span>" + "<p>" + aae1[i].p + "</p>" + "</a>")
    }

    oe1.innerHTML = content

    var content2 = " "
    for (var i = 0; i < aae2.length; i++) {
        content2 += ("<a>" + "<img src='" + aae2[i].img + "'" + "\/>" + "<span>" + aae2[i].s + "</span>" + "</a>")
    }

    oe2.innerHTML = content2

    var content3 = " "
    for (var i = 0; i < aae3.length; i++) {
        content3 += ("<a>" + "<img src='" + aae3[i].img + "'" + "\/>" + "<span>" + aae3[i].s + "</span>" + "</a>")
    }

    oe3.innerHTML = content3

    var content4 = " "
    for (var i = 0; i < aae4.length; i++) {
        content4 += ("<a class='aa'>" + "<img src='" + aae4[i].img + "'" + "\/>" + "<span class='s1'>" + "<span class='s2'>" + aae4[i].s + "</span>" + "</span>" + "</a>")
    }

    document.getElementById("ooe4").innerHTML = content4

    var content4a = " "
    for (var i = 0; i < aae4a.length; i++) {
        content4a += ("<div class='ht clearfix'>" + "<div class='ht-img'>" + "</div>" + "<div class='rm'>" + "<a>" + aae4a[i].a1 + "</a>" +
            "<a>" + aae4a[i].a2 + "</a>" + "<a>" + aae4a[i].a3 + "<a>" + aae4a[i].a4 + "</a>" + "<a>" + aae4a[i].a5 + "</a>" + "<a>" + aae4a[i].a6 + "</a>" + "</a>" + "</div>")
    }

    document.getElementById("ooe4a").innerHTML = content4a

    var content4b = " "
    for (var i = 0; i < aae4b.length; i++) {
        content4b += ("<div class='bq clearfix'>" + "<div class='bq-img'>" + "</div>" + "<div class='rn'>" + "<a>" + aae4b[i].a1 + "</a>" +
            "<a>" + aae4b[i].a2 + "</a>" + "<a>" + aae4b[i].a3 + "<a>" + aae4b[i].a4 + "</a>" + "<a>" + aae4b[i].a5 + "</a>" + "</a>" + "</div>")
    }

    document.getElementById("ooe4b").innerHTML = content4b

    var content5 = " "
    for (var i = 0; i < aae5.length; i++) {
        content5 += ("<a>" + "<img src='" + aae5[i].img + "'" + "\/>" + "<span>" + aae5[i].s + "</span>" + "</a>")
    }

    oe5.innerHTML = content5

    var content6 = " "
    for (var i = 0; i < aae6.length; i++) {
        content6 += ("<a>" + "<img src='" + aae6[i].img + "'" + "\/>" + "<span>" + aae6[i].s + "</span>" + "</a>")
    }

    oe6.innerHTML = content6



}
aaaae()





oa2.onmousemove = function () {
    oiner.style.display = "block"
    oe1.style.display = "block"
}




oa3.onmousemove = function () {
    oiner.style.display = "block"
    oe2.style.display = "block"
    oe1.style.display = "none"
}

oa4.onmousemove = function () {
    oiner.style.display = "block"
    oe3.style.display = "block"
    oe2.style.display = "none"
    oe1.style.display = "none"
}

oa5.onmousemove = function () {
    oiner.style.display = "block"
    oe4.style.display = "block"
    oe3.style.display = "none"
    oe2.style.display = "none"
    oe1.style.display = "none"
}

oa6.onmousemove = function () {
    oiner.style.display = "block"
    oe5.style.display = "block"
    oe4.style.display = "none"
    oe3.style.display = "none"
    oe2.style.display = "none"
    oe1.style.display = "none"
}

oa7.onmousemove = function () {
    oiner.style.display = "block"
    oe6.style.display = "block"
    oe5.style.display = "none"
    oe4.style.display = "none"
    oe3.style.display = "none"
    oe2.style.display = "none"
    oe1.style.display = "none"
}


oa9.onmousemove = oa1.onmousemove = oa8.onmousemove = function () {
    oiner.style.display = "none"
}

oa10.onmousemove = function () {
    oiner.style.display = "block"
    oe7.style.display = "block"
    oe6.style.display = "none"
    oe5.style.display = "none"
    oe4.style.display = "none"
    oe3.style.display = "none"
    oe2.style.display = "none"
    oe1.style.display = "none"
}

oa10.onmouseout = function () {
    oe7.style.display = "none"
}







//平安世界--式神录
var lissl = document.getElementById("lissl")
var links = document.getElementById("links")
var sis = document.getElementById("sis")
var yys = document.getElementById("yys")
var sslb = document.getElementById("sslb")
var ssqt = document.getElementById("ssqt")

lissl.onclick = function () {
    links.style.display = "block"
    syz.style.display = "none"
    lissl.className = "avt"
    lisyz.classList.remove("avt")
    yys.style.display = "none"
    lizjl.classList.remove("avt")
    sis.style.display = "block"
}

links.onclick = function () {
    sslb.style.display = "block"
    ssqt.style.display = "none"
    setTimeout(function () {
        links.style.display = "none"
    }, 30)
}

function aaasslb() {
    var asp = document.getElementById("asp")
    var assr = document.getElementById("assr")
    var asr1 = document.getElementById("asr1")
    var asr2 = document.getElementById("asr2")
    var ar1 = document.getElementById("ar1")
    var ar2 = document.getElementById("ar2")
    var an = document.getElementById("an")
    var agt = document.getElementById("agt")

    var asslb = [
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/328.png?",
            p: "赤影妖刀姬"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/327.png?",
            p: "苍风一目连"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/326.png?",
            p: "稻荷神御馔津"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/322.png?",
            p: "炼狱茨木童子"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/315.png?",
            p: "少羽大天狗"
        },
    ]

    var asslb2 = [
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/330.png?",
            p: "不知火"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/325.png?",
            p: "八岐大蛇"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/316.png?",
            p: "白藏主"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/312.png?",
            p: "鬼切"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/311.png?",
            p: "面灵气"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/328.png?",
            p: "山风"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/296.png?",
            p: "御馔津"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/326.png?",
            p: "稻荷神御馔津"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/304.png?",
            p: "玉藻前"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/315.png?",
            p: "雪童子"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/328.png?",
            p: "彼岸花"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/326.png?",
            p: "荒"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/300.png?",
            p: "花鸟卷"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/292.png?",
            p: "少羽大天狗"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/288.png?",
            p: "大天狗"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/283.png?",
            p: "荒川之主"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/279.png?",
            p: "阎魔"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/280.png?",
            p: "两面佛"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/315.png?",
            p: "妖刀姬"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/287.png?",
            p: "雪童子"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/248.png?",
            p: "炼狱茨木童子"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/255.png?",
            p: "青行灯"
        },
    ]

    var asslb3 = [
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/280.png?",
            p: "两面佛"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/315.png?",
            p: "妖刀姬"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/287.png?",
            p: "雪童子"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/248.png?",
            p: "炼狱茨木童子"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/255.png?",
            p: "青行灯"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/330.png?",
            p: "不知火"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/325.png?",
            p: "八岐大蛇"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/316.png?",
            p: "白藏主"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/312.png?",
            p: "鬼切"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/311.png?",
            p: "面灵气"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/328.png?",
            p: "山风"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/296.png?",
            p: "御馔津"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/326.png?",
            p: "稻荷神御馔津"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/304.png?",
            p: "玉藻前"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/315.png?",
            p: "雪童子"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/328.png?",
            p: "彼岸花"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/326.png?",
            p: "荒"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/300.png?",
            p: "花鸟卷"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/292.png?",
            p: "少羽大天狗"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/288.png?",
            p: "大天狗"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/283.png?",
            p: "荒川之主"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/279.png?",
            p: "阎魔"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/316.png?",
            p: "白藏主"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/312.png?",
            p: "鬼切"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/311.png?",
            p: "面灵气"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/328.png?",
            p: "山风"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/296.png?",
            p: "御馔津"
        },

    ]

    var asslb4 = [
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/280.png?",
            p: "两面佛"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/315.png?",
            p: "妖刀姬"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/287.png?",
            p: "雪童子"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/248.png?",
            p: "炼狱茨木童子"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/255.png?",
            p: "青行灯"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/330.png?",
            p: "不知火"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/325.png?",
            p: "八岐大蛇"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/316.png?",
            p: "白藏主"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/312.png?",
            p: "鬼切"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/311.png?",
            p: "面灵气"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/328.png?",
            p: "山风"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/296.png?",
            p: "御馔津"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/326.png?",
            p: "稻荷神御馔津"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/304.png?",
            p: "玉藻前"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/315.png?",
            p: "雪童子"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/328.png?",
            p: "彼岸花"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/326.png?",
            p: "荒"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/300.png?",
            p: "花鸟卷"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/292.png?",
            p: "少羽大天狗"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/288.png?",
            p: "大天狗"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/283.png?",
            p: "荒川之主"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/279.png?",
            p: "阎魔"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/316.png?",
            p: "白藏主"
        },

    ]


    var asslb5 = [
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/328.png?",
            p: "彼岸花"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/326.png?",
            p: "荒"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/300.png?",
            p: "花鸟卷"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/292.png?",
            p: "少羽大天狗"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/288.png?",
            p: "大天狗"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/280.png?",
            p: "两面佛"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/315.png?",
            p: "妖刀姬"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/287.png?",
            p: "雪童子"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/248.png?",
            p: "炼狱茨木童子"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/255.png?",
            p: "青行灯"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/330.png?",
            p: "不知火"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/325.png?",
            p: "八岐大蛇"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/316.png?",
            p: "白藏主"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/312.png?",
            p: "鬼切"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/311.png?",
            p: "面灵气"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/328.png?",
            p: "山风"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/296.png?",
            p: "御馔津"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/326.png?",
            p: "稻荷神御馔津"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/283.png?",
            p: "荒川之主"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/279.png?",
            p: "阎魔"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/316.png?",
            p: "白藏主"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/312.png?",
            p: "鬼切"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/311.png?",
            p: "面灵气"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/328.png?",
            p: "山风"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/296.png?",
            p: "御馔津"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/304.png?",
            p: "玉藻前"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/315.png?",
            p: "雪童子"
        },

    ]


    var asslb6 = [
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/325.png?",
            p: "八岐大蛇"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/316.png?",
            p: "白藏主"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/312.png?",
            p: "鬼切"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/311.png?",
            p: "面灵气"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/328.png?",
            p: "彼岸花"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/326.png?",
            p: "荒"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/300.png?",
            p: "花鸟卷"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/292.png?",
            p: "少羽大天狗"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/288.png?",
            p: "大天狗"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/280.png?",
            p: "两面佛"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/315.png?",
            p: "妖刀姬"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/287.png?",
            p: "雪童子"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/248.png?",
            p: "炼狱茨木童子"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/255.png?",
            p: "青行灯"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/330.png?",
            p: "不知火"
        },

    ]

    var asslb7 = [
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/203.png?",
            p: "灯笼鬼"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/245.png?",
            p: "提灯小僧"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/246.png?",
            p: "赤舌"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/400.png?",
            p: "盗墓小鬼"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/401.png?",
            p: "寄生魂"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/403.png?",
            p: "天邪鬼绿"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/404.png?",
            p: "天邪鬼赤"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/405.png?",
            p: "天邪鬼黄"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/406.png?",
            p: "天邪鬼青"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/407.png?",
            p: "帚神"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/409.png?",
            p: "涂壁"
        },

    ]

    var asslb8 = [
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/203.png?",
            p: "彼岸花呱"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/245.png?",
            p: "荒呱"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/246.png?",
            p: "辉夜姬呱"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/400.png?",
            p: "花鸟卷呱"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/401.png?",
            p: "一目连呱"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/403.png?",
            p: "青行灯呱"
        },
        {
            img: "https://yys.res.netease.com/pc/gw/20180913151832/data/shishen/404.png?",
            p: "茨木呱"
        }
    ]


    var content = " "
    for (var i = 0; i < asslb.length; i++) {
        content += ("<li>" + "<a>" + "<span>" + "</span>" + "<img src='" + asslb[i].img + "'" + "\/>" + "</a>" + "<p>" + asslb[i].p + "</p>" + "</li>")
    }
    asp.innerHTML = content

    var content2 = " "
    for (var i = 0; i < asslb2.length; i++) {
        content2 += ("<li>" + "<a>" + "<span>" + "</span>" + "<img src='" + asslb2[i].img + "'" + "\/>" + "</a>" + "<p>" + asslb2[i].p + "</p>" + "</li>")
    }
    assr.innerHTML = content2

    var content3 = " "
    for (var i = 0; i < asslb3.length; i++) {
        content3 += ("<li>" + "<a>" + "<span>" + "</span>" + "<img src='" + asslb3[i].img + "'" + "\/>" + "</a>" + "<p>" + asslb3[i].p + "</p>" + "</li>")
    }
    asr1.innerHTML = content3

    var content4 = " "
    for (var i = 0; i < asslb4.length; i++) {
        content4 += ("<li>" + "<a>" + "<span>" + "</span>" + "<img src='" + asslb4[i].img + "'" + "\/>" + "</a>" + "<p>" + asslb4[i].p + "</p>" + "</li>")
    }
    asr2.innerHTML = content4

    var content5 = " "
    for (var i = 0; i < asslb5.length; i++) {
        content5 += ("<li>" + "<a>" + "<span>" + "</span>" + "<img src='" + asslb5[i].img + "'" + "\/>" + "</a>" + "<p>" + asslb5[i].p + "</p>" + "</li>")
    }
    ar1.innerHTML = content5

    var content6 = " "
    for (var i = 0; i < asslb6.length; i++) {
        content6 += ("<li>" + "<a>" + "<span>" + "</span>" + "<img src='" + asslb6[i].img + "'" + "\/>" + "</a>" + "<p>" + asslb6[i].p + "</p>" + "</li>")
    }
    ar2.innerHTML = content6


    var content7 = " "
    for (var i = 0; i < asslb7.length; i++) {
        content7 += ("<li>" + "<a>" + "<span>" + "</span>" + "<img src='" + asslb7[i].img + "'" + "\/>" + "</a>" + "<p>" + asslb7[i].p + "</p>" + "</li>")
    }
    an.innerHTML = content7

    var content8 = " "
    for (var i = 0; i < asslb8.length; i++) {
        content8 += ("<li>" + "<a>" + "<span>" + "</span>" + "<img src='" + asslb8[i].img + "'" + "\/>" + "</a>" + "<p>" + asslb8[i].p + "</p>" + "</li>")
    }
    agt.innerHTML = content8




}

aaasslb()

var ssrw = document.getElementById("ssrw")
var ssa = ssrw.getElementsByTagName("a")
var rw = document.getElementById("rw")
var sssdiv = rw.getElementsByTagName("div")
var aniu = document.getElementById("aniu")
var ii = 0, timer = null;

function ssl() {
    ii++;
    if (ii >= sssdiv.length) {
        ii = 0
    }
    sslu()
}

function sslu() {
    for (is = 0; is < sssdiv.length; is++) {
        sssdiv[is].style.display = "none"
        ssa[is].style.color = "#000"

    }
    sssdiv[ii].style.display = "block"
    ssa[ii].style.color = "#c2a060"
    //  console.log(ssdiv[ii].offsetWidth)
    if (sssdiv[ii].offsetWidth > 1060) {
        aniu.style.display = "block"
    } else {
        aniu.style.display = "none"
    }
}

for (var s = 0; s < ssa.length; s++) {
    ssa[s].id = s
    ssa[s].onclick = function () {
        ii = this.id
        sslu()

    }
}

var sang = document.getElementById("sang")
var xia = document.getElementById("xia")
var SR = document.getElementById("SR")
var R = document.getElementById("R")
var sss = 1060


sang.onclick = function () {
    SR.style.left = SR.offsetLeft + sss + "px"
    R.style.left = R.offsetLeft + sss + "px"
    SR.style.transition = "0.8s"
    R.style.transition = "0.8s"
    console.log(SR.offsetLeft)

}

xia.onclick = function () {
    SR.style.left = SR.offsetLeft + -sss + "px"
    R.style.left = R.offsetLeft + -sss + "px"
    SR.style.transition = "0.8s"
    R.style.transition = "0.8s"
    console.log(SR.offsetLeft)

}

function aaassl() {
    var gg1 = document.getElementById("gg1")
    var gg2 = document.getElementById("gg2")
    var gg3 = document.getElementById("gg3")
    var gg4 = document.getElementById("gg4")
    var gg5 = document.getElementById("gg5")
    var gg6 = document.getElementById("gg6")
    var gg7 = document.getElementById("gg7")
    var gg8 = document.getElementById("gg8")
    var gg9 = document.getElementById("gg9")
    var gg10 = document.getElementById("gg10")
    var gg11 = document.getElementById("gg11")
    var gg12 = document.getElementById("gg12")
    var gg13 = document.getElementById("gg13")

    var aazjl = [
        {

            img1: "https://yys.res.netease.com/pc/gw/20180913151832/data/role/330.png",
            img2: "https://yys.res.netease.com/pc/gw/20180913151832/data/name/330.png?"
        },
    ]

    var aazjl2 = [
        {

            img1: "https://yys.res.netease.com/pc/gw/20180913151832/data/role/328.png",
            img2: "https://yys.res.netease.com/pc/gw/20180913151832/data/name/328.png?"
        },
    ]

    var aazjl3 = [
        {

            img1: "https://yys.res.netease.com/pc/gw/20180913151832/data/role/327.png",
            img2: "https://yys.res.netease.com/pc/gw/20180913151832/data/name/327.png?"
        },
    ]
    var aazjl4 = [
        {
            img1: "https://yys.res.netease.com/pc/gw/20180913151832/data/role/326.png",
            img2: "https://yys.res.netease.com/pc/gw/20180913151832/data/name/326.png?"
        },
    ]
    var azjl5 = [
        {

            img1: "https://yys.res.netease.com/pc/gw/20180913151832/data/role/324.png",
            img2: "https://yys.res.netease.com/pc/gw/20180913151832/data/name/324.png?"
        },
    ]

    var azjl6 = [
        {

            img1: "https://yys.res.netease.com/pc/gw/20180913151832/data/role/325.png",
            img2: "https://yys.res.netease.com/pc/gw/20180913151832/data/name/325.png?"
        },
    ]

    var azjl7 = [
        {

            img1: "https://yys.res.netease.com/pc/gw/20180913151832/data/role/323.png",
            img2: "https://yys.res.netease.com/pc/gw/20180913151832/data/name/323.png?"
        },
    ]
    var azjl8 = [
        {
            img1: "https://yys.res.netease.com/pc/gw/20180913151832/data/role/320.png",
            img2: "https://yys.res.netease.com/pc/gw/20180913151832/data/name/320.png?"
        },
    ]
    var azjl9 = [
        {

            img1: "https://yys.res.netease.com/pc/gw/20180913151832/data/role/321.png",
            img2: "https://yys.res.netease.com/pc/gw/20180913151832/data/name/321.png?"
        },
    ]

    var azjl10 = [
        {

            img1: "https://yys.res.netease.com/pc/gw/20180913151832/data/role/322.png",
            img2: "https://yys.res.netease.com/pc/gw/20180913151832/data/name/322.png?"
        },
    ]

    var azjl11 = [
        {

            img1: "https://yys.res.netease.com/pc/gw/20180913151832/data/role/318.png",
            img2: "https://yys.res.netease.com/pc/gw/20180913151832/data/name/318.png?"
        },
    ]
    var azjl12 = [
        {
            img1: "https://yys.res.netease.com/pc/gw/20180913151832/data/role/319.png",
            img2: "https://yys.res.netease.com/pc/gw/20180913151832/data/name/319.png?"
        },
    ]
    var azjl13 = [
        {
            img1: "https://yys.res.netease.com/pc/gw/20180913151832/data/role/317.png",
            img2: "https://yys.res.netease.com/pc/gw/20180913151832/data/name/317.png?"
        },

    ]
    var content = " "
    for (var i = 0; i < aazjl.length; i++) {
        content += ("<a class='ssin'>" + " <span class='ssimg'>" + "<img class='name' src='" + aazjl[i].img1 + "'" + "\/>" + "<img class='role' src='" + aazjl[i].img2 + "'" + "\/>" + "</span>" + "</a>")
    }

    gg1.innerHTML = content

    var content2 = " "
    for (var i = 0; i < aazjl2.length; i++) {
        content2 += ("<a class='ssin'>" + " <span class='ssimg'>" + "<img  class='name' src='" + aazjl2[i].img1 + "'" + "\/>" + "<img class='role' src='" + aazjl2[i].img2 + "'" + "\/>" + "</span>" + "</a>")
    }

    gg2.innerHTML = content2

    var content3 = " "
    for (var i = 0; i < aazjl3.length; i++) {
        content3 += ("<a class='ssin'>" + " <span class='ssimg'>" + "<img  class='name' src='" + aazjl3[i].img1 + "'" + "\/>" + "<img class='role' src='" + aazjl3[i].img2 + "'" + "\/>" + "</span>" + "</a>")
    }

    gg3.innerHTML = content3

    var content4 = " "
    for (var i = 0; i < aazjl3.length; i++) {
        content4 += ("<a class='ssin'>" + " <span class='ssimg'>" + "<img  class='name' src='" + aazjl4[i].img1 + "'" + "\/>" + "<img class='role' src='" + aazjl4[i].img2 + "'" + "\/>" + "</span>" + "</a>")
    }

    gg4.innerHTML = content4

    var content5 = " "
    for (var i = 0; i < azjl5.length; i++) {
        content5 += ("<a class='ssin'>" + " <span class='ssimg'>" + "<img class='name' src='" + azjl5[i].img1 + "'" + "\/>" + "<img class='role' src='" + azjl5[i].img2 + "'" + "\/>" + "</span>" + "</a>")
    }

    gg5.innerHTML = content5

    var content6 = " "
    for (var i = 0; i < azjl6.length; i++) {
        content6 += ("<a class='ssin'>" + " <span class='ssimg'>" + "<img  class='name' src='" + azjl6[i].img1 + "'" + "\/>" + "<img class='role' src='" + azjl6[i].img2 + "'" + "\/>" + "</span>" + "</a>")
    }

    gg6.innerHTML = content6

    var content7 = " "
    for (var i = 0; i < azjl7.length; i++) {
        content7 += ("<a class='ssin'>" + " <span class='ssimg'>" + "<img  class='name' src='" + azjl7[i].img1 + "'" + "\/>" + "<img class='role' src='" + azjl7[i].img2 + "'" + "\/>" + "</span>" + "</a>")
    }

    gg7.innerHTML = content7

    var content8 = " "
    for (var i = 0; i < azjl8.length; i++) {
        content8 += ("<a class='ssin'>" + " <span class='ssimg'>" + "<img  class='name' src='" + azjl8[i].img1 + "'" + "\/>" + "<img class='role' src='" + azjl8[i].img2 + "'" + "\/>" + "</span>" + "</a>")
    }

    gg8.innerHTML = content8

    var content9 = " "
    for (var i = 0; i < azjl9.length; i++) {
        content9 += ("<a class='ssin'>" + " <span class='ssimg'>" + "<img class='name' src='" + azjl9[i].img1 + "'" + "\/>" + "<img class='role' src='" + azjl9[i].img2 + "'" + "\/>" + "</span>" + "</a>")
    }

    gg9.innerHTML = content9

    var content10 = " "
    for (var i = 0; i < azjl10.length; i++) {
        content10 += ("<a class='ssin'>" + " <span class='ssimg'>" + "<img class='name' src='" + azjl10[i].img1 + "'" + "\/>" + "<img class='role' src='" + azjl10[i].img2 + "'" + "\/>" + "</span>" + "</a>")
    }

    gg10.innerHTML = content10

    var content11 = " "
    for (var i = 0; i < azjl11.length; i++) {
        content11 += ("<a class='ssin'>" + " <span class='ssimg'>" + "<img class='name' src='" + azjl11[i].img1 + "'" + "\/>" + "<img class='role' src='" + azjl11[i].img2 + "'" + "\/>" + "</span>" + "</a>")
    }

    gg11.innerHTML = content11

    var content12 = " "
    for (var i = 0; i < azjl12.length; i++) {
        content12 += ("<a class='ssin'>" + " <span class='ssimg'>" + "<img class='name' src='" + azjl12[i].img1 + "'" + "\/>" + "<img class='role' src='" + azjl12[i].img2 + "'" + "\/>" + "</span>" + "</a>")
    }

    gg12.innerHTML = content12

    var content13 = " "
    for (var i = 0; i < azjl13.length; i++) {
        content13 += ("<a class='ssin'>" + " <span class='ssimg'>" + "<img class='name' src='" + azjl13[i].img1 + "'" + "\/>" + "<img class='role' src='" + azjl13[i].img2 + "'" + "\/>" + "</span>" + "</a>")
    }

    gg13.innerHTML = content13
}

aaassl()




//平安世界--主角录
var ssleft = document.getElementById("ssleft")
var ssright = document.getElementById("ssright")
var bimg = document.getElementById("big-img")
var ssdiv = bimg.getElementsByTagName("div")
var ssmz = document.getElementById("ssmz")
var ssa1 = ssmz.getElementsByTagName("a")
var tet = document.getElementById("tet")
var rtet = document.getElementById("rtet")
var lizjl = document.getElementById("lizjl")
var yys = document.getElementById("yys")
var ssdex = 0, timer = null;

lizjl.onclick = function () {
    yys.style.display = "block"
    lizjl.className = "avt"
    sis.style.display = "none"
    syz.style.display = "none"
    links.style.display = "none"
    lissl.classList.remove("avt")
    lisyz.classList.remove("avt")
}

function aazhl() {
    var g1 = document.getElementById("g1")
    var g2 = document.getElementById("g2")
    var g3 = document.getElementById("g3")
    var g4 = document.getElementById("g4")

    var azjl = [
        {

            img1: "https://yys.res.netease.com/pc/gw/20180913151832/data/zhujue/name_qm.png",
            img2: "https://yys.res.netease.com/pc/gw/20180913151832/data/zhujue/role_qm.png"
        },
    ]

    var azjl2 = [
        {

            img1: "https://yys.res.netease.com/pc/gw/20180913151832/data/zhujue/name_sl.png",
            img2: "https://yys.res.netease.com/pc/gw/20180913151832/data/zhujue/role_sl.png"
        },
    ]

    var azjl3 = [
        {

            img1: "https://yys.res.netease.com/pc/gw/20180913151832/data/zhujue/name_yby.png",
            img2: "https://yys.res.netease.com/pc/gw/20180913151832/data/zhujue/role_yby.png"
        },
    ]
    var azjl4 = [
        {
            img1: "https://yys.res.netease.com/pc/gw/20180913151832/data/zhujue/name_bqn.png",
            img2: "https://yys.res.netease.com/pc/gw/20180913151832/data/zhujue/role_bqn.png"
        },
    ]

    var content = " "
    for (var i = 0; i < azjl.length; i++) {
        content += ("<a class='ssin'>" + " <span class='ssimg'>" + "<img class='name' src='" + azjl[i].img1 + "'" + "\/>" + "<img class='role' src='" + azjl[i].img2 + "'" + "\/>" + "</span>" + "</a>")
    }

    g1.innerHTML = content

    var content2 = " "
    for (var i = 0; i < azjl2.length; i++) {
        content2 += ("<a class='ssin'>" + " <span class='ssimg'>" + "<img  class='name' src='" + azjl2[i].img1 + "'" + "\/>" + "<img class='role' src='" + azjl2[i].img2 + "'" + "\/>" + "</span>" + "</a>")
    }

    g2.innerHTML = content2

    var content3 = " "
    for (var i = 0; i < azjl3.length; i++) {
        content3 += ("<a class='ssin'>" + " <span class='ssimg'>" + "<img  class='name' src='" + azjl3[i].img1 + "'" + "\/>" + "<img class='role' src='" + azjl3[i].img2 + "'" + "\/>" + "</span>" + "</a>")
    }

    g3.innerHTML = content3

    var content4 = " "
    for (var i = 0; i < azjl3.length; i++) {
        content4 += ("<a class='ssin'>" + " <span class='ssimg'>" + "<img  class='name' src='" + azjl4[i].img1 + "'" + "\/>" + "<img class='role' src='" + azjl4[i].img2 + "'" + "\/>" + "</span>" + "</a>")
    }

    g4.innerHTML = content4

}
aazhl()

function ssss() {
    ssdex++;
    if (ssdex >= ssdiv.length) {
        ssdex = 0
    }
    ssimg()
}

function ssimg() {
    for (var ssi = 0; ssi < ssdiv.length; ssi++) {
        ssdiv[ssi].style.display = "none"
        ssa1[ssi].className = ""

    }
    ssdiv[ssdex].style.display = "block"
    ssa1[ssdex].className = "cc"
}

ssright.onclick = function () {
    ssdex++;
    if (ssdex >= ssdiv.length)
        ssdex = 0
    ssimg()
    text()

}

function text() {
    rtet.innerHTML = ssdiv[ssdex + 1].getAttribute("data-name")
    tet.innerHTML = ssdiv[ssdex - 1].getAttribute("data-name")
}

function text2() {

    tet.innerHTML = ssdiv[ssdex - 1].getAttribute("data-name")
    rtet.innerHTML = ssdiv[ssdex + 1].getAttribute("data-name")
}



ssleft.onclick = function () {
    ssdex--;
    if (ssdex < 0)
        ssdex = ssdiv.length - 1;
    ssimg()
    text2()
}


for (var rr = 0; rr < ssa1.length; rr++) {
    ssa1[rr].id = rr
    ssa1[rr].onclick = function () {

        ssdex = this.id
        ssimg()
    }
}

//平安世界--式神录切图
var sslast = document.getElementById("sslast")
var ssnext = document.getElementById("ssnext")
var ssbimg = document.getElementById("ssbimg")
var ssdiv2 = ssbimg.getElementsByTagName("div")
var las = document.getElementById("las")
var nex = document.getElementById("nex")
var ssdex2 = 0;

function aassl() {

}


function ssss2() {
    ssdex2++;
    if (ssdex2 >= ssdiv2.length) {
        ssdex2 = 0
    }
    ssimg2()
}

function ssimg2() {
    for (var ssi2 = 0; ssi2 < ssdiv2.length; ssi2++) {
        ssdiv2[ssi2].style.display = "none"
    }
    ssdiv2[ssdex2].style.display = "block"


}

sslast.onclick = function () {
    ssdex2--;
    if (ssdex2 < 0)
        ssdex2 = ssdiv2.length - 1
    ssimg2()
    text3()
}

ssnext.onclick = function () {
    ssdex2++;
    if (ssdex2 >= ssdiv2.length)
        ssdex2 = 0
    ssimg2()
    text4()
}

function text3() {
    nex.innerHTML = (ssdiv2[ssdex2 + 1].getAttribute("data-name"))
    las.innerHTML = (ssdiv2[ssdex2 - 1].getAttribute("data-name"))
}


function text4() {
    las.innerHTML = (ssdiv2[ssdex2 - 1].getAttribute("data-name"))
    nex.innerHTML = (ssdiv2[ssdex2 + 1].getAttribute("data-name"))
}

//平安世界--声优阵
var lisyz = document.getElementById("lisyz")
var syz = document.getElementById("syz")
lisyz.onclick = function () {
    syz.style.display = "block"
    sis.style.display = "none"
    lisyz.className = "avt"
    lissl.classList.remove("avt")
    yys.style.display = "none"
    lizjl.classList.remove("avt")
}

function aasyz() {
    var ssxm = document.getElementById("ssxm")
    var asyz = [
        {
            l1: "安部壮一",
            l2: "安元洋贵",
            l3: "白石凉子",
            l4: "阪口周平",
            l5: "保志总一朗",
            l6: "滨野大辉",
            l7: "茶风林",
            l8: "成田剑",
            l9: "川澄绫子",
            l10: "寸石和弘",
            l11: "佐藤聪美",
            l12: "池田海咲"
        },
        {
            l1: "大泊贵挥",
            l2: "大原沙耶香",
            l3: "代永翼",
            l4: "岛崎信长",
            l5: "钉宫理惠",
            l6: "丰崎爱生",
            l7: "福山润",
            l8: "高山南",
            l9: "弓原健史",
            l10: "宮本誉之",
            l11: "渡边优里奈",
            l12: " "
        },
        {
            l1: "关俊彦",
            l2: "行成桃姬",
            l3: "户松遥",
            l4: "河西健吾",
            l5: "花江夏树",
            l6: "花泽香菜",
            l7: "吉野裕行",
            l8: "加隈亚衣",
            l9: "甲斐田裕子",
            l10: "间宫康弘",
            l11: "近藤唯",
            l12: " "
        },
        {
            l1: "井口裕香",
            l2: "井上和彦",
            l3: "井上麻里奈",
            l4: "井泽诗织",
            l5: "君岛哲",
            l6: "堀江由衣",
            l7: "立花慎之介",
            l8: "铃村健一",
            l9: "铃木达央",
            l10: "绿川光",
            l11: "茅野爱衣",
            l12: " "
        },
        {
            l1: "名冢佳织",
            l2: "内田真礼",
            l3: "能登麻美子",
            l4: "鸟海浩辅",
            l5: "平川大辅",
            l6: "朴璐美",
            l7: "立前野智昭",
            l8: "日高里菜",
            l9: "三森铃子",
            l10: "桑岛法子",
            l11: "森久保祥太郎",
            l12: " "
        },
        {
            l1: "山口胜平",
            l2: "杉山纪彰",
            l3: "杉田智和",
            l4: "上坂堇",
            l5: "石川界人",
            l6: "石田彰",
            l7: "柿原彻也",
            l8: "水濑祈",
            l9: "水树奈奈",
            l0: "松冈祯丞",
            l1: "松井晓波",
            l12: " "
        },
        {
            l1: "松田健一郎",
            l2: "田村由香里",
            l3: "梶裕贵",
            l4: "西谷修一",
            l5: "喜多村英梨",
            l6: "细谷佳正",
            l7: "小林大纪",
            l8: "小林优",
            l9: "小清水亚美",
            l10: "小西克幸",
            l11: "小野坂昌也",
            l12: " "
        },
        {
            l1: "新谷真弓",
            l2: "岩崎了",
            l3: "伊藤静",
            l4: "樱井透",
            l5: "樱井孝宏",
            l6: "悠木碧",
            l7: "有贺由树子",
            l8: "由加奈",
            l9: "羽饲真梨",
            l10: "远藤大辅",
            l11: "早见沙织",
            l12: " "
        },
        {
            l1: "泽城美雪",
            l2: "增田俊树",
            l3: "斋藤千和",
            l4: "中村悠一",
            l5: "中井和哉",
            l6: "种崎敦美",
            l7: "竹达彩奈",
            l8: "竹内顺子",
            l9: "子安武人",
            l10: "诹访彩花",
            l11: "佐仓绫音",
            l12: " "
        },

    ]
    var content = " "
    for (var i = 0; i < asyz.length; i++) {
        content += ("<ul>" + "<li>" + asyz[i].l1 + "</li>" + "<li>" + asyz[i].l2 + "</li>" + "<li>" + asyz[i].l3 + "</li>" + "<li>" +
            asyz[i].l4 + "</li>" + "<li>" + asyz[i].l5 + "</li>" + "<li>" + asyz[i].l6 + "</li>" +
            "<li>" + asyz[i].l7 + "</li>" + "<li>" + asyz[i].l8 + "</li>" + "<li>" + asyz[i].l9 + "</li>" +
            "<li>" + asyz[i].l10 + "</li>" + "<li>" + asyz[i].l11 + "</li>" + "<li>" + asyz[i].l12 + "</li>" + "</ul>")
    }

    ssxm.innerHTML = content

}

aasyz()



//游戏攻略

var news = document.getElementById("news")
var ot = news.getElementsByTagName("div")
var lul = document.getElementById("nows-w")
var pli = lul.getElementsByTagName("li")
var ooa = lul.getElementsByTagName("a")

function aayxgl() {

    var item1 = document.getElementById("item1")
    var item2 = document.getElementById("item2")
    var item3 = document.getElementById("item3")
    var item4 = document.getElementById("item4")

    var ayxgl1 = [
        {
            p: "【新手】第四期！ 御魂从哪来？躺魂十的各种姿势！",
            s: "作者：Yeno1996"
        },
        {
            p: "【新手】简单清晰的结界卡合成方法",
            s: "作者：燃玉"
        },
        {
            p: "【新手】特别篇~大将：呱世无双的正确入手攻略~",
            s: "作者：Yeno1996"
        },
        {
            p: "【新手】第二期 狗粮队长全解析！养这些！不吃亏～",
            s: "作者：Yeno1996"
        },
        {
            p: "【新手】第一期 省达摩、省金币、省勾玉！",
            s: "作者：Yeno1996"
        },
        {
            p: "【新手】第三期 你们应该强化的御魂是这样滴~",
            s: "作者：Yeno1996"
        },
    ]

    var ayxgl2 = [
        {
            p: "【式神】防御机制与人面树测试报告",
            s: "作者：木子南"
        },
        {
            p: "【式神】白藏主机制及正确使用指南",
            s: "作者：木子南"
        },
        {
            p: "【式神】阴阳天机谱 | 幼羽缠风，崇天无畏山高远",
            s: "作者：鸽海成路"
        },
        {
            p: "【式神】鸩：我们来体验一哈真正的快乐！",
            s: "作者：Yeno1996"
        },
        {
            p: "【式神】彼岸花“黄泉彼岸”通关全攻略详解！",
            s: "作者：清逸喵"
        },
        {
            p: "【式神】KAGOME — 如何正确使用 阴阳师史上最用心式神-犬夜叉",
            s: "作者：长街风"
        },
    ]

    var ayxgl3 = [
        {
            p: "【玩法】休闲玩家进阶之夺得荒骷髅最高成就",
            s: "作者：西城男孩"
        },
        {
            p: "【玩法】新人的地狱鬼王攻略",
            s: "作者：木子南"
        },
        {
            p: "【玩法】逢魔之时需要知道的一些小知识（上篇",
            s: "作者：Yeno1996"
        },
        {
            p: "【玩法】休闲玩家进阶之拿到胧车大将的正确姿势",
            s: "作者：西城男孩"
        },
        {
            p: "【玩法】周年庆视觉更新！活动先览！（20180912体服速报)",
            s: "作者：Yeno1996"
        },
        {
            p: "【玩法】休闲玩家进阶之夺得蜃气楼最高成就",
            s: "作者：西城男孩s"
        },
    ]

    var ayxgl4 = [
        {
            p: "【斗技】为崽而战课堂：大佬来看看这里有没有你常用的斗技阵容<",
            s: "作者：Yeno1996"
        },
        {
            p: "【斗技】为崽而战小课堂：兵俑雪女凤凰火，那个是神级控？",
            s: "作者：Yeno1996"
        },
        {
            p: "【斗技】为崽而战小课堂：关于那些奶妈的故事！",
            s: "作者：木子南"
        },
        {
            p: "【斗技】安利一波犬神，3000分阿黄分斗花心得",
            s: "作者：西城男孩"
        },
        {
            p: "【斗技】【翻牌攻略】斗技先手流（上篇）",
            s: "作者：Yeno1996"
        },
        {
            p: "【斗技】为崽而战小课堂：那些至今活跃在斗技场上的R卡",
            s: "作者：草爷"
        },
    ]

    var content = " "
    for (var i = 0; i < ayxgl1.length; i++) {
        content += ("<li>" + "<a>" + "<span class='item-s'>" + "<i>" + "</i>" + "</span>" +
            "<span class='item-z'>" + "<p>" + ayxgl1[i].p + "</p>" + "<span>" + ayxgl1[i].s + "</span>" + "</span>" + "</a>" + "</li>")
    }

    item1.innerHTML = content

    var content2 = " "
    for (var i = 0; i < ayxgl2.length; i++) {
        content2 += ("<li>" + "<a>" + "<span class='item-s'>" + "<i>" + "</i>" + "</span>" +
            "<span class='item-z'>" + "<p>" + ayxgl2[i].p + "</p>" + "<span>" + ayxgl2[i].s + "</span>" + "</span>" + "</a>" + "</li>")
    }

    item2.innerHTML = content2


    var content3 = " "
    for (var i = 0; i < ayxgl3.length; i++) {
        content3 += ("<li>" + "<a>" + "<span class='item-s'>" + "<i>" + "</i>" + "</span>" +
            "<span class='item-z'>" + "<p>" + ayxgl3[i].p + "</p>" + "<span>" + ayxgl3[i].s + "</span>" + "</span>" + "</a>" + "</li>")
    }

    item3.innerHTML = content3

    var content4 = " "
    for (var i = 0; i < ayxgl4.length; i++) {
        content4 += ("<li>" + "<a>" + "<span class='item-s'>" + "<i>" + "</i>" + "</span>" +
            "<span class='item-z'>" + "<p>" + ayxgl4[i].p + "</p>" + "<span>" + ayxgl4[i].s + "</span>" + "</span>" + "</a>" + "</li>")
    }

    item4.innerHTML = content4



}
aayxgl()

function yxgl() {

    var index5 = 0, timer = null;

    ot.onmouseover = function () {
        clearInterval(timer)
    }

    ot.onmouseout = function () {
        timer = setInterval(function () {
            index5++;
            if (index5 >= ot.length) {
                index5 = 0
            }
            img5()
        }, 3000)
    }

    ot.onmouseout()

    function img5() {
        for (var i5 = 0; i5 < ot.length; i5++) {
            ot[i5].style.display = "none"
            ooa[i5].className = " "
        }
        ot[index5].style.display = "block"
        ooa[index5].className = "on"
    }

    for (var v = 0; v < ooa.length; v++) {
        ooa[v].id = v;
        ooa[v].onmousemove = function () {
            index5 = this.id
            img5()
        }

    }

}

yxgl()



//同人手账--热门活动
var imgs = document.getElementById("cardimgs")
var oa = imgs.getElementsByTagName("a")
var ico = document.getElementById("ico")
var qspan = ico.getElementsByTagName("span")

function aatrsz1() {
    var atrsz1 = [
        {
            img: "http://prqnryn2v.bkt.clouddn.com/35.jpg"
        },
        {
            img: "http://prqnryn2v.bkt.clouddn.com/36.jpg"
        },
        {
            img: "http://prqnryn2v.bkt.clouddn.com/37.jpg"
        },
        {
            img: "http://prqnryn2v.bkt.clouddn.com/38.jpg"
        },
        {
            img: "http://prqnryn2v.bkt.clouddn.com/39.jpg"
        },
        {
            img: "http://prqnryn2v.bkt.clouddn.com/40.jpg"
        }

    ]
    var content = " "
    for (var i = 0; i < atrsz1.length; i++) {
        content += ("<a>" + "<img src='" + atrsz1[i].img + "'" + "\/>" + "</a>")
    }
    imgs.innerHTML = content

}
aatrsz1()

function trsz1() {
    var timer = null, index = 0
    imgs.onmousemove = function () {
        clearInterval(timer)
    }

    imgs.onmouseout = function () {
        timer = setInterval(function () {
            index++;
            if (index >= oa.length) {
                index = 0;
            }
            img()
        }, 5000)
    }

    imgs.onmouseout()

    function img() {
        for (var i = 0; i < oa.length; i++) {
            oa[i].style.display = "none"
            qspan[i].className = " "
        }
        oa[index].style.display = "block"
        qspan[index].className = "cc"
    }

    for (var n = 0; n < qspan.length; n++) {
        qspan[n].id = n
        qspan[n].onclick = function () {
            index = this.id
            img()
        }
    }
}
trsz1()


//同人手账--热门作品

var inner = document.getElementById("inner")
var oul = inner.getElementsByTagName("ul")
var next = document.getElementById("next")
var test2 = document.getElementById("test2")
function aatrsz2() {
    var atrsz2 = [
        {
            a: "#百鬼幼儿园#"
        },
        {
            a: "#不知火#"
        },
        {
            a: "#集绘千卷#"
        },
        {
            a: "#结缘物华#"
        },
        {
            a: "#百绘罗衣#"
        },
    ]

    var content = " "
    for (var i = 0; i < atrsz2.length; i++) {
        content += ("<li>" + "<a>" + atrsz2[i].a + "</a>" + "</li>")
    }
    test2.innerHTML = content



    var uc1 = document.getElementById("uc1")
    var uc2 = document.getElementById("uc2")
    var uc3 = document.getElementById("uc3")
    var uc4 = document.getElementById("uc4")

    var atrsz3 = [
        {
            img: "https://nie.res.netease.com/r/pic/20190520/17207879-1866-4121-8b0e-1d598ba1e2cf.jpg",
            p1: "神明",
            p2: "作者：繁月九霄",
            p3: "263"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190515/9a52a5b8-de1a-4d07-8a1d-9877de68aef1.jpg",
            p1: "等我征服世界",
            p2: "作者：无常与绅士",
            p3: "254"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190515/1319cfac-e4f5-4ca1-a268-e40ab8ceb8ba.jpg",
            p1: "寒梅仙鹤",
            p2: "作者：半仙又帅又能打",
            p3: "234"
        },

    ]


    var atrsz4 = [
        {
            img: "https://nie.res.netease.com/r/pic/20190520/821b4925-a29a-4ecf-a05d-2bc0be2a49a6.jpg",
            p1: "COS：不知火",
            p2: "作者：夙胤言生",
            p3: "263"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190520/a38e5538-70dc-43e7-8e11-000d1feb417d.jpg",
            p1: "COS：青行灯",
            p2: "作者：薄薄薄薄薄小年",
            p3: "214"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190517/f4c93ba9-65fb-4520-9c54-6ac36d731cd6.jpg",
            p1: "COS：不知火/阿离",
            p2: "作者：镜酱_",
            p3: "271"
        },

    ]

    var atrsz5 = [
        {
            img: "https://nie.res.netease.com/r/pic/20190517/4101343a-7ed7-4aa1-a7c2-ddc8cb34a2be.jpg",
            p1: "COS：白藏主",
            p2: "作者：咸鱼樊八",
            p3: "213"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190517/8b0ae9b0-e7d7-44a3-a55f-2ab054c08e92.jpg",
            p1: "手作：不知火",
            p2: "作者：高冷吃瓜少年",
            p3: "254"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190517/6abfeaaa-3419-4e36-9878-0523cd612b2c.jpg",
            p1: "手作：蝴蝶精·玲珑蝶影",
            p2: "作者：欧皇丢丢",
            p3: "294"
        },

    ]

    var atrsz6 = [
        {
            img: "https://nie.res.netease.com/r/pic/20190530/fd3e1629-c0a2-4231-9832-330a229bc3a8.jpg",
            p1: "神性与妖邪并存",
            p2: "作者：EcsRin",
            p3: "273"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190528/661bbe1b-c293-41e5-a0ce-b3986340e164.jpg",
            p1: "化鲸",
            p2: "作者：haruko",
            p3: "254"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190529/6ea5227b-69c3-4509-86a5-a0990eaf1715.jpg",
            p1: "不服就来战",
            p2: "作者：墨纸ink",
            p3: "258"
        },

    ]


    var content2 = " "
    for (var i = 0; i < atrsz3.length; i++) {
        content2 += ("<li>" + "<a>" + "<div>" + "<img src='" + atrsz3[i].img + "'" + "\/>" + "</div>" +
            "<div class='text'>" + "<p class='p1'>" + atrsz3[i].p1 + "</p>" +
            "<p class='p2'>" + atrsz3[i].p2 + "</p>" + "</div>" + "<p class='p3'>" + atrsz3[i].p3 + "</p>" + "</a>" + "</li>")
    }
    uc1.innerHTML = content2


    var content3 = " "
    for (var i = 0; i < atrsz4.length; i++) {
        content3 += ("<li>" + "<a>" + "<div>" + "<img src='" + atrsz4[i].img + "'" + "\/>" + "</div>" +
            "<div class='text'>" + "<p class='p1'>" + atrsz4[i].p1 + "</p>" +
            "<p class='p2'>" + atrsz4[i].p2 + "</p>" + "</div>" + "<p class='p3'>" + atrsz4[i].p3 + "</p>" + "</a>" + "</li>")
    }
    uc2.innerHTML = content3


    var content4 = " "
    for (var i = 0; i < atrsz5.length; i++) {
        content4 += ("<li>" + "<a>" + "<div>" + "<img src='" + atrsz5[i].img + "'" + "\/>" + "</div>" +
            "<div class='text'>" + "<p class='p1'>" + atrsz5[i].p1 + "</p>" +
            "<p class='p2'>" + atrsz5[i].p2 + "</p>" + "</div>" + "<p class='p3'>" + atrsz5[i].p3 + "</p>" + "</a>" + "</li>")
    }
    uc3.innerHTML = content4

    var content6 = " "
    for (var i = 0; i < atrsz6.length; i++) {
        content6 += ("<li>" + "<a>" + "<div>" + "<img src='" + atrsz6[i].img + "'" + "\/>" + "</div>" +
            "<div class='text'>" + "<p class='p1'>" + atrsz6[i].p1 + "</p>" +
            "<p class='p2'>" + atrsz6[i].p2 + "</p>" + "</div>" + "<p class='p3'>" + atrsz6[i].p3 + "</p>" + "</a>" + "</li>")
    }
    uc4.innerHTML = content6


}
aatrsz2()

function trsz2() {

    var timer = null, index = 0;

    inner.onmouseover = function () {
        clearInterval(timer)
    }

    inner.onmouseout = function () {
        timer = setInterval(function () {
            index++;
            if (index >= oul.length) {
                index = 0
            }
            img()
        }, 3000)
    }

    inner.onmouseout()

    function img() {
        for (var i = 0; i < oul.length; i++) {
            oul[i].style.display = "none"
        }
        oul[index].style.display = "block"
    }

    next.onclick = function () {
        index++;
        if (index >= oul.length)
            index = 0
        img()
    }
}

trsz2()


//同人大触

var next2 = document.getElementById("next2")
var boxs = document.getElementById("boxs")
var xul = boxs.getElementsByTagName("ul")
var ul9 = document.getElementById("ul9")
var u10 = document.getElementById("u10")
var u11 = document.getElementById("u11")

function trdc() {
    var index = 0;

    index++
    if (index >= xul.length) {
        index = 0
    }
    img()


    function img() {
        for (i = 0; i < xul.length; i++) {
            xul[i].style.display = "none"
        }
        xul[index].style.display = "block"
    }

    next2.onclick = function () {
        index++;
        if (index >= xul.length)
            index = 0
        img()
    }
}
trdc()


function aatrdc() {


    var atrdc1 = [
        {
            img: "https://nie.res.netease.com/r/pic/20190510/6fd81945-6d1e-4054-8421-e6ec5f31f888.jpg",
            div: "清风澈"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190509/f80e5b87-5407-4e88-98ac-b7ba5a0f9de3.jpg",
            div: "雾魔萧曹"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190507/53c2c9a2-b9e4-4f89-aa41-2a10e285f1c1.jpg",
            div: "修老虎"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190507/f31b3a22-bb6a-4c00-8645-a5b6890d992d.jpg",
            div: "Lor筱逆"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190430/81ca87b1-0d3e-46d2-bbaa-4c5ecd873ea3.jpg",
            div: "果子炸"
        }
    ]

    var atrdc2 = [
        {
            img: "https://nie.res.netease.com/r/pic/20190429/469cd9df-fce8-48cc-b371-3e5953bb30c4.jpg",
            div: "山桂贰"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190428/b432f26a-f286-4068-8ebd-6e444dc57396.jpg",
            div: "ooh---"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190328/c9c7f771-a2e7-4a99-9f0e-5c4fbe91c7b6.jpg",
            div: "誰哈那"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190328/7c1933a4-a34f-4c86-a701-d88d4e34b64b.jpg",
            div: "莫小沫san"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190428/137561d0-de06-4a71-a990-93318dc9aac6.jpg",
            div: "陌Mo_墨心莲"
        }
    ]

    var atrdc3 = [
        {
            img: "https://nie.res.netease.com/r/pic/20190320/af8d45d1-2c70-4a8c-aa9e-7d57494ba869.jpg",
            div: "酒绛子pick双皮奶"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190312/16826ae7-f97c-4a60-bb08-9c7802d7d6b6.jpg",
            div: "懿肆琬兮"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190305/ae73ece2-67f2-4f89-9fbc-593f88e4ebbe.jpg",
            div: "Shimmer白蝶"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190304/d9c86b6b-c681-4d25-ba0e-ba4c012ca1ac.jpg",
            div: "淘鲸海岸"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190304/bbb0ce66-65b9-4eb6-8a2e-6e0551f11377.jpg",
            div: "-贫穷的暖老板Nuan16-"
        }
    ]



    var content = " "
    for (var i = 0; i < atrdc1.length; i++) {
        content += ("<li>" + "<a>" + "<div>" + "<img src='" + atrdc1[i].img + "'" + "\/>" + "</div>" + "<div>" + "</div>" + "<div>" + atrdc1[i].div + "</div>" + "</a>" + "</li>")
    }

    var content2 = " "
    for (var i = 0; i < atrdc2.length; i++) {
        content2 += ("<li>" + "<a>" + "<div>" + "<img src='" + atrdc2[i].img + "'" + "\/>" + "</div>" + "<div>" + "</div>" + "<div>" + atrdc2[i].div + "</div>" + "</a>" + "</li>")
    }

    var content3 = " "
    for (var i = 0; i < atrdc3.length; i++) {
        content3 += ("<li>" + "<a>" + "<div>" + "<img src='" + atrdc3[i].img + "'" + "\/>" + "</div>" + "<div>" + "</div>" + "<div>" + atrdc3[i].div + "</div>" + "</a>" + "</li>")
    }
    ul9.innerHTML = content
    ul10.innerHTML = content2
    ul11.innerHTML = content3

}
aatrdc()

//视听盛宴

function aastsy() {
    var st = document.getElementById("ytss")
    var astsy = [
        {
            img: "https://nie.res.netease.com/r/pic/20181114/04c74daf-531a-40c0-8f29-212a5370171a.gif",
            div: "阴阳交错的命运开启"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190117/cd157d16-c630-4942-946a-1ea62ac3fb68.png",
            div: "驭霆之风：苍风一目连"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190426/dc60be6b-250b-4ac1-995e-7f6f3dd5be39.gif",
            div: "不知谁歌，星火起舞"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190117/6f619e4f-b356-446e-b61a-5cacc7fd889e.png",
            div: "稻荷神临：稻荷神御馔津"
        },
    ]
    var content = " "
    for (var i = 0; i < astsy.length; i++) {
        content += ("<li>" + "<a>" + "<img src='" + astsy[i].img + "'" + "\/>" + "<div>" + "<i>" + "</i>" + astsy[i].div + "</div>" + "</a>" + "</li>")
    }
    st.innerHTML = content
}

aastsy()


// 泛娱乐
var sixul = document.getElementById("sixul")
var sixleft = document.getElementById("sixleft")
var sixright = document.getElementById("sixright")



function aafyl() {
    var afyl = [
        {
            img: "https://nie.res.netease.com/r/pic/20180913/e8985f58-81c3-4366-8fef-791423c01b3e.gif"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20181112/b94fe4de-0b77-446c-a898-5095bcf3a458.png"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20190314/47205c2d-dde2-478d-b09f-7cad2f7c5ea3.png"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20181008/43eb59ae-19e6-4508-9c6e-fe4afe9b3355.png"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20180918/f3f34f59-9ed1-464f-84c1-c0d49f8f5f8e.png"
        },
        {
            img: "https://nie.res.netease.com/r/pic/20180913/a1d6f536-8af7-4970-b863-05114528bce0.png"
        }
    ]

    var content = " "
    for (var i = 0; i < afyl.length; i++) {
        content += ("<li>" + "<img src='" + afyl[i].img + "'" + "\/>" + "</li>")
    }

    sixul.innerHTML = content
}

aafyl()

var x = 230;
if (sixul.offsetLeft == 0) {
    sixleft.style.display = "none"
}


sixleft.onclick = function () {
    sixul.style.left = sixul.offsetLeft + x + "px"
    console.log(sixul.offsetLeft)
    if (sixul.offsetLeft < 0) {
        sixleft.style.display = "block"
    } else if (sixul.offsetLeft == 0) {
        sixleft.style.display = "none"
    }

    if (sixul.offsetLeft == -230) {
        sixleft.style.display = "none"
    }

    if (sixul.offsetLeft != -460) {
        sixright.style.display = "block"
    }
}

sixright.onclick = function () {
    sixul.style.left = sixul.offsetLeft + -x + "px"
    console.log(sixul.offsetLeft)
    if (sixul.offsetLeft != 0) {
        sixleft.style.display = "block"
    } else if (sixul.offsetLeft == 0) {
        left.style.display = "none"
    }

    if (sixul.offsetLeft == -230) {
        sixleft.style.display = "none"
    }
    if (sixul.offsetLeft == -460) {
        sixright.style.display = "none"
    }
}



//京都商业街
var xboxs = document.getElementById("xboxs")
var ximg = document.getElementById("ximg")
var seekbar = document.getElementById("seekbar")
var bar = document.getElementById("bar")

var zzz = 0;

bar.onmousedown = function (ev) {
    var zzz = ev.clientX - bar.offsetLeft
    document.onmousemove = function (ev) {
        var n = ev.clientX - zzz
        if (n < 0) {
            n = 0
        } else if (n > seekbar.offsetWidth - bar.offsetWidth) {
            n = seekbar.offsetWidth - bar.offsetWidth
        }
        bar.style.left = n + "px"
        var scale = n / (seekbar.offsetWidth - bar.offsetWidth)
        ximg.style.left = -scale * (ximg.offsetWidth - xboxs.offsetWidth) + "px"
    }
    document.onmouseup = function () {
        document.onmousemove = null
        document.onmouseup = null
    }
}



function axim() {


    var aximg = [
        {
            p: "阴阳师御馔津公仔两件套",
            img: "http://prqnryn2v.bkt.clouddn.com/55.jpg"
        },
        {
            p: "阴阳师恋爱御守",
            img: "http://prqnryn2v.bkt.clouddn.com/56.jpg"
        },

        {
            p: "阴阳师黑茨球公仔（大）",
            img: "http://prqnryn2v.bkt.clouddn.com/57.jpg"
        },

        {
            p: "阴阳师石距公仔",
            img: "http://prqnryn2v.bkt.clouddn.com/58.jpg"
        },
        {
            p: "阴阳师达摩印章",
            img: "http://prqnryn2v.bkt.clouddn.com/59.jpg"
        },
        {
            p: "阴阳师神乐粘土手办",
            img: "http://prqnryn2v.bkt.clouddn.com/60.jpg"
        },
        {
            p: "阴阳师荒骷髅公仔",
            img: "http://prqnryn2v.bkt.clouddn.com/61.jpg"
        },
        {
            p: "阴阳师御馔津公仔两件套",
            img: "http://prqnryn2v.bkt.clouddn.com/62.jpg"
        },
        {
            p: "阴阳师恋爱御守",
            img: "http://prqnryn2v.bkt.clouddn.com/56.jpg"
        },

        {
            p: "阴阳师黑茨球公仔（大）",
            img: "http://prqnryn2v.bkt.clouddn.com/57.jpg"
        },

        {
            p: "阴阳师石距公仔",
            img: "http://prqnryn2v.bkt.clouddn.com/58.jpg"
        },
        {
            p: "阴阳师达摩印章",
            img: "http://prqnryn2v.bkt.clouddn.com/59.jpg"
        },
        {
            p: "阴阳师神乐粘土手办",
            img: "http://prqnryn2v.bkt.clouddn.com/60.jpg"
        },
        {
            p: "阴阳师荒骷髅公仔",
            img: "http://prqnryn2v.bkt.clouddn.com/61.jpg"
        },
        {
            p: "阴阳师御馔津公仔两件套",
            img: "http://prqnryn2v.bkt.clouddn.com/55.jpg"
        },
        {
            p: "阴阳师恋爱御守",
            img: "http://prqnryn2v.bkt.clouddn.com/56.jpg"
        },

        {
            p: "阴阳师黑茨球公仔（大）",
            img: "http://prqnryn2v.bkt.clouddn.com/57.jpg"
        },

        {
            p: "阴阳师石距公仔",
            img: "http://prqnryn2v.bkt.clouddn.com/58.jpg"
        },
        {
            p: "阴阳师达摩印章",
            img: "http://prqnryn2v.bkt.clouddn.com/59.jpg"
        },
        {
            p: "阴阳师神乐粘土手办",
            img: "http://prqnryn2v.bkt.clouddn.com/60.jpg"
        },
        {
            p: "阴阳师荒骷髅公仔",
            img: "http://prqnryn2v.bkt.clouddn.com/61.jpg"
        },
        {
            p: "阴阳师御馔津公仔两件套",
            img: "http://prqnryn2v.bkt.clouddn.com/62.jpg"
        },
        {
            p: "阴阳师恋爱御守",
            img: "http://prqnryn2v.bkt.clouddn.com/56.jpg"
        },

        {
            p: "阴阳师黑茨球公仔（大）",
            img: "http://prqnryn2v.bkt.clouddn.com/57.jpg"
        },



    ]
    var content = " "
    for (var i = 0; i < aximg.length; i++) {
        content += ("<li>" + "<a>" + "<div>" + "<image  src='" + aximg[i].img + "'" + "\/>" + "</div>" + "<div>" + "</div>" + "<p>" + aximg[i].p + "</p>" + "</a>" + "</li>")

    }
    ximg.innerHTML = content
}

axim()