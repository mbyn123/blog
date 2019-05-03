# JavaScript

## DOM

### 定义

- 用来描述js脚本怎样与html进行交互的web标准

### 获取方法

-  获取单个id标签

	- dounment.getElementById("id标签名")

- 获取多个id标签

	- dounment.getElementByTagName("id标签名")

- 获取html的内容和文档内容

	- ele.innerHTML

- 获取元素的claas属性

	- className

### 设置方法

- 设置元素样式

	- ele.style.styleName=styleValue

- 获取属性

	- ele.getAttribute("属性名")

- 设置属性

	- ele.setAttribute("属性名","属性值")

- 删除属性

	- ele.removeAttribute(属性名)

### Dom事件

- 定义

	- 事件就是文档或浏览器窗口中发生的一些特定的交互瞬间

- this指向

	- 在事件触发的函数中,this是对该DOM对象的引用

- 绑定HTML事件

	- 直接在HTML标签内添加事件执行脚本
	- 语法:<标签.事件="执行脚本"></标签>

- o级事件

	- 第一步:通过dom获取html元素

		- 语法:dounment.getElementById("id标签名")

	- 第二部:给获取元素绑定事件

		- 语法:ele.事件=执行脚本

- 事件类型

	- 鼠标事件

		- onload

			- 页面加载时触发

		- onclick

			- 鼠标点击时触发

		- onmouseover

			- 鼠标滑过时触发

		- onmouseout

			- 鼠标离开时触发

		- onfoucs

			- 获得焦点时触发

		- onchange

			- 域的内容改变时发生

		- onsubmit

			- 表单中的确认按钮被点击时发生

		- onmousedown

			- 鼠标按钮在元素上按下时触发

		- onmouseup

			- 在元素上松开鼠标按钮时触发

		- onmousemove

			- 在鼠标指针移动时触发

		- onresize

			- 当调整浏览器窗口的大小时触发

		- onscroll

			- 拖动滚动条时触发

	- 键盘事件

		- onkeydown

			- 在按下一个键盘按键时发生

		- onkeyup

			- 在键盘按键被松开时发生

		- onkeypress

			- 在键盘按键被按下时并释放一个键时发生

		- keycode属性

			- 返回键盘事件中触发键的值的字符代码或键的代码

## BOM对象

### 定义

- bom浏览器对象模型,bom提供了很多对象,用于访问浏览器的功能

### window对象

- 显示带有一段消息和一个确认按钮的警告框

	- 语法:window.alert("content")

- 显示一个带有指定消息和确认以及取消按钮的对话框

	- 语法:window.confurm("message")

- 显示一个可以让用户输入文本的对话框

	- 语法:window.prompt("text,defautext")

- 打开一个新的浏览器窗口或查找一个已命名的窗口

	- 语法:window.open(pageurl,name,parameters)

- 关闭浏览器窗口

	- 语法:window.close()

- 超时调用:在指定的毫秒数后调用函数或执行脚本

	- 语法:setTimeout(code,millisec)

- 取消超时调用:取消由setTimeout()设置的超时调用

	- 语法:clearTimeout(id-od-settimeout)

- 间歇调用:每隔指定时间执行一次代码

	- 语法:setInterval(code,millisec)

- 取消间歇调用:取消由setInterval()设置的间歇调用

	- 语法:clearInterval(id-od-settimeout)

### location对象

- 返回当前加载页面的完整url

	- 语法:location.href

- 返回url中hash(#号跟零或多个字符),如果不包含
 则返回空字符串;(获取当前页面中锚点)

	- 语法:location.hash

- 返回服务器名称和端口号

	- location.host

- 返回不带端口好的服务器名称

	- location.hostname

- 返回url中的目录和(或)文件名

	- 功能:返回url指定的端口号,如果没有,返回空字符串

- 返回页面使用的协议

	- 语法:location,protocol

-  返回url的查询字符串,这个字符串以问号开头

	- 语法:location.search

- 改变url位置,跳转到其他页面

	- 语法:location.href

- 重新定向url,跳转到其他页面

	- 语法:location.replace(url)

- 重新加载当前显示页面

	- 语法:location.reload()

### history对象

- 定义

	- history对象保存了用户在浏览器中访问页面的历史记录

- 回到历史记录的上一步

	- 语法:history.back()

- 回到历史记录的下一步

	- 语法:history.forward()

- 回到历史记录的前n步

	- history.go(n)

- 回到历史记录的后n步

	- history.go(-n)

### navigator对象

- 用来识别浏览器名称,版本,引擎以及操作系统等信息的内容

	-  语法:navigator.userAgent

### screen对象

- 定义

	- screen对象包含有关客户端显示屏幕的信息

- 返回可用的屏幕宽度

	- 语法:screen.availwidth

- 返回可用的屏幕高度

	- 语法:screen.availheight

- 补充知识点

	- 获取当前显示的屏幕高度

		- 语法:window.innerheight

	- 获取当前显示的屏幕宽度

		- 语法:window.innerwidth

## ECMAScript语法

### 数据类型

- undefined

	- 未定义的值

- null

	- 空对象指针，如果定义的变量准备在将来用于保存对象，最好将变量设为null

- boolean

	- 用于表示真假的类型

		- true 真
		- false 假

	-  对其它数据类型进行布尔型转化

		- 除0 之外的所有数字，转换为布尔型都为true
		- 除“”空之外的的所有字符，转换为布尔型都为true
		- null和undefined转换为布尔型都为false

- number

	- nan非数值

		- isnan()检测是否为非数值
		- 非数值转换

			- number（）可以将值为数子的变量转换为数值
			- parseint()转换以数字开头的字符串，提取整数
			- parsefloat9()转换以数字开头的字符串，提取浮点数

- string 

	- 对其它数据类型进行字符串转化

		- str.tostring()
		- string()

### 操作符

- 算数操作符

	- 用于变量之间的 + -  *  /加减乘除
	- 递增

		- a++与++a都是对a进行递增操作

			- ++a是递增之后的值
			- a++是返回a的原值

	- 递减

		- a--与--a都是对a进行递增操作

			- --a是递增之后的值
			- a--是返回a的原值

- 赋值操作符

	- 复合赋值

		- +=   -=  *=  /=

	- 简单赋值

		- =

- 比较操作符

	- ==比较值是否相等
	- ===比较值和数据类型是否相等
	- !=比较值是否不相等
	- !==比较值与数据类型是否相等

- 三元操作符

	- 可代替简单的if语句使用

		- 条件?执行代码1：执行代码2；

- 逻辑操作符

	- 逻辑与&&
	- 逻辑或||
	- 逻辑！

### 条件语句

- 分支语句

	- if语句
	- switch语句

- 循环语句

	- for语句
	- while语句

		- do-while语句

	- break语句

		- 立即退出循环

	- continue语句

		- 结束本次循环，继续开始下一次

### 函数

- 作用

	- 通过函数可以封装任意多余语句,可以在任何地方,任何时候调用执行

- 语法

	- function 函数名(参数){执行代码,脚本}

- 返回值

	- 返回形式

		-  console.log()

			- 控制台打印

		- alert()

			- 浏览器弹窗显示

		- document.write()

			- 直接在浏览器中显示内容

	- return语句

		- 作用

			- 1.函数会在执行完return语句停止后并立即退出
			- 2.return语句也可以不带有任何返回值,用于提前停止函数执行又不需要返回值的情况

- 参数

	- argument对象

		- 作用

			- 在函数体内通过argument对象来访问这个数组参数

		- argument对象只是与数组类似,并不是Array(数组)中的实例
		- 属性

			- argument[索引数]

				- 用于访问它的每一个元素

			- length属性

				- 用来获取参数中的个数

### js内置对象

- Array数组

	- 赋值方法

		- newArray()

			- 保存数组项目的数量或具体值

		- Array[]

			- 直接在[]中赋值

		-  str=newArray()

			- 分别给数组项赋值

	- 用于获取数组长度

		- Array.length

			- 1.通过设置length数组的数量,可以从数组的末尾移除或向数组中添加新像
			- 2.把一个值放在超出当前数组大小的位置上时,会重新计算数组长度值,长度值等于最后一项索引数加一

	- 数组遍历

		- for(var   i=0;  i<arrray.length;  i++)

	- 数组的栈方法

		- push()

			- 将值写入数组的尾部

		- unshift()

			- 将值写入数组的开头

		- pop()

			- 删除数组的最后一个元素

		- shift()

			- 删除数组中的第一元素

	- 通过分隔符,将数组的内容转换为字符串

		- join()

	- 数组排序

		- revesrse

			- 依据首字母顺序对数组元素进行排序

		- sort()

			- 颠倒数组元素的顺序

	- 连接两个或多个数组

		- concat()

	- 截取数组中的值

		-  删除数组中的内容

			- splice()

		- 在数组中插入内容

			- splice()

		- 在数值中替换内容

			- splice()

	- 查找数组内容

		- indexOf()

			- 从数组开头查找数组项目

		- LastIndexOf()

			- 从数组末尾查找数组项目

- string字符串

	- 查找字符

		- charAt()

			-  通过索引位置查找字符

		- charcodeAt()

			- 通过索引位置查找字符编码

	- 查找字符位置

		- indexOf

			- 从开头通过字符查找其索引位置

		- LastindexOf

			- 从末尾通过字符查找其索引位置

	-  截取字符

		- slice()
		- substring() 
		- substr()

	- 转换字符

		- split()

			- 通过分隔符将字符串分割成数组

		- replace()

			- 替换字符串中的值

	- 转换大小写

		- toUppercase()

			- 将字符串转换为大写

		- tolowercase

			- 将字符串转为小写

