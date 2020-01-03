
     安装包，
     npm i http-server
     
     在本地服务器环境下打开文件
     http-server . -c-1
     
     安装parcel ,对scss文件进行配置
      
      初始化
      npm init -y 
      
      安装包
      npm i parcerl
      
      运行
      npx parcel index.html
      
      
# 嵌套选择器 

        body{
        .nav{
           
            ul{
             
               li{
              border-radius: 5px;
               }
            }
        }
        
    }
# 变量
      
      $c:red;
    $s:$c;
      body{
        .nav{
           background:$s
            ul{
             
               li{
                color: $s;
               }
            }
        }
        
    }

# mixin

     提取公共样式
          @mixin name {
        box-shadow: 0 0 3px black;
        margin: 10px;
        border-radius: 5px;
    }
    
    body{
        .nav{
           
            ul{
             
               li{
              @include name
               }
            }
        }
        
    }
    
    .demo{
        @include name;
        height:100px;
    
    }
# placeholder

     提取公共样式
         %box{
    box-shadow: 0 0 3px black;
    margin: 10px;
    border-radius: 5px;
    }
    
    body{
        .nav{
           
            ul{
             
               li{
              @extend %box
               }
            }
        }
        
    }
    
    .demo{
        @extend %box;
        height:100px;
    
    }
    
# for循环 @if @else

     $x:20%;
    $n:25%;
    @keyframes x {    //through 包括结束值4
        @for $i from 1 to 4 {//to 不包括结束值4，只到3 
            #{$i * $n}{
                @if $i %2 == 0 {
                    transform: translateX(-$x);
                }@else{
                    transform: translateX($x);
                }
            }
        }
        100%{
            transform: translateX(0);
        }
    }
    
# rem布局适配

* rem是html的font-size字体的宽度，
* rem适配就是让html的font-size等于页面的宽度
 
      var pageWidth = window.innerWidth
      document.write('<style>html{font-size:'+pageWidth/10+'px;}</style>')

         <div class="boxs">
            <div class="box">1</div>
            <div class="box">2</div>
            <div class="box">3</div>
            <div class="box">4</div>
            <div class="box">5</div>
            <div class="box">1</div>
            <div class="box">2</div>
            <div class="box">3</div>
            <div class="box">4</div>
            <div class="box">5</div>
        </div>
        
      使用scss语法中的函数方法，简化rem与px的转化
      
      @function px( $px ){
        @return $px/$designWidth*10 + rem;
        }
        
        $designWidth : 414; // 414 是设计稿的宽度 iphone6的宽度
        
        .boxs{
          font-size:16px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: px(25);
          .box{
            border-radius: 50%;  
            width: px(61);
            height: px(67);
            margin: px(25) 0;
            background-color: red;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
