
# 虚拟DOM

* **DOM的本质是什么**：浏览器中的概念，用js对象来表示页面上的元素，并提供了操作DOM对象的api
* **什么是React中的虚拟DOM**：是框架中的概念，是程序员用js对象来模拟页面上的DOM嵌套关系
* **虚拟DOM的目的**：为了实现页面中，DOM元素的高效更新，按需更新

# Diff算法

* **tree Diff**:新旧两颗DOM树，逐层对比的过程，就是tree diff;当整颗DOM逐层对比完毕，则所有需要按需更新的元素，必然能够找到
* **compenent diff**:在tree diff的时候，每一层，组件级别的对比，叫做Component Diff;
   
    * 如果对比前后，组件类型相同，则暂时认为此组件不需要被更新
    * 如果对比前后，组件类型不同，则需要移除旧组件，创建新组件，并追加到页面上
    
* **element diff**: 在组件对比的时候，如果两个组件类型相同，则需要进行元素级别的对比，这叫做element diff


# 创建基本的webpack项目

  1. npm init -y 初始化项目
  2. 在项目根目录创建dist 和 src文件夹
  3. 在src文件夹下新建index.html和main.js文件
  4. 运行 npm i webpack -D 安装webpack
  5. 运行 npm i webpack-cli -D 安装webpack脚手架
  6. 新建webpck.config,js文件 
     * webpack 4.x 默认打包入口文件是src/index.js
     * webpack 4.x 默认打包输出文件是dist/main.js(放在内存中)
     *  webpack 4.x新增了mode选项，必填项，可选值为：development 和 production
  
  7.运行 npm i webpack-dev-server -D 安装本地服务环境

     "scripts": {
        "dev": "webpack-dev-server --open(打开默认浏览器) --port 3000(设置端口) --hot --host 127.0.0.1(设置域名)"
    },

  8.运行 npm i html-webpack-plugin -D，安装生成html文件的插件(放在内存中)
  
  
# class方式创建组件

    class App extends React.Component{
      constructor() {
           super() // 继承了React.Component,必须使用super()以后，才能使用this
           this.state={
               msg:'class创建的组件'
           }
       }
       render(){
           this.state.msg = '组件2' // 修改state的值
           // 直接使用this.props获取父组件传过来的值
           return <div>123{this.props.name}{this.props.age}{this.props.gender}</div>
           <h3>{this.state.msg}</h3>
       }
    }


    

# function创建组件
    
    const Bottom2 = function (props) {
    const [n, setN] = React.useState(0) // 使用userState来改变state
    return (
        <div>
            {n}{props} // 使用props作为参数接受父组件的传值
            <button onClick={function () {
                setN(n + 1)
            }}>+1</button>
        </div>
    )
    }
    
    
# map循环
   
   
     方式一
    {this.state.data.map(item => {
         return <div key={item.id}>
            <div>评论人:{item.name}</div>
            <div>内容:{item.text}</div>
          </div>
    })}
    
    方式二
     {this.state.data.map(item=><Items  key={item.id} {...item}></Items>)}
     

#  绑定input
    class App extends React.Component {
      constructor() {
        super()
        this.state = {
          title:'评论列表',
        }
    }
     change(e){ //使用onChange事件监听改变后的值，
       this.setState({
        title:e.target.value,
       })
     }
      render() {
        return (
          <div>                //将value 和state中的数据绑定，
            <input type="text"  value={this.state.title} onChange={(e)=>this.change(e)}/>
            <h1 className="title" style={{border:'1px solid red'}} 
          </div>
        )
      }
    }



# React生命周期

####    分为三个阶段：挂载、渲染、卸载
   
##   创建阶段：

### constructor()
constructor()中完成了React数据的初始化，它接受两个参数：props和context，当想在函数内部使用这两个参数时，需使用super()传入这两个参数。
   
### static defaultProps = {}

如果父组件没有传值，用来设置组件props的默认值

### this.state = {} 
   
###    **componentWillMount()**
   
   这个函数是组件的虚拟DOM元素，将要挂载搭配页面上的时候执行，此时，**虚拟DOM还没有被创建，同时也没有挂载到页面上**
   
###    **render()** 
   
   当进入render()函数执行时，就已经要开始，就已经要开始渲染虚拟DOM了，当render函数执行完。**虚拟DOM就在内存中创建好了，但是，此时虚拟DOM并没有真正挂载到页面上**
   
###    **componentDidMount()**
   
   表示**组件已经完成了挂载**，state上的数据，和虚拟内存中的虚拟DOM，以及浏览器中的页面，已经完全保持一致了。到这里，组件创建阶段的生命周期函数，已经执行完毕，页面第一次渲染好。 **可以在这里发送AJAX请求，返回数据后，调用setState后组件会重新渲染**
       

##   运行阶段：

### componentWillReceiveProps (nextProps) 旧的
### getDerivedStateFromProps(nextProps, prevState) 新的

 当props发生了改变，就会触发这个钩子函数，会接受一个nextProps的参数。通过对比nextProps和this.props,将nextProps的state为当前的state,从而重新渲染组件
 
      componentWillReceiveProps (nextProps) {
        nextProps.openNotice !== this.props.openNotice&&this.setState({
            openNotice:nextProps.openNotice
        }，() => {
          console.log(this.state.openNotice:nextProps)
          //将state更新为nextProps,在setState的第二个参数（回调）可以打印出新的state
      })
      
### shouldComponentUpdate(nextProps,nextState)

  当state发生变化，组件会重新进入渲染流程，在这里return false可以阻止组件的更新，在需要更新的子组件的生命周期中做判断
  
  
### componentWillUpdate (nextProps,nextState)  旧的
###  getSnapshotBeforeUpdate(prevProps, prevState) 新的

  shouldComponentUpdate返回true以后，组件进入重新渲染的流程,这里同样可以拿到nextProps和nextState。此时组件将要被更新，但还没有被更新 
  
### render()

  新渲染内存中的虚拟DOM对象，此时虚拟DOM和state保持一致，都是最新的，但是页面还是旧的
  
### componentDidUpdate(prevProps,prevState)  

组件更新完毕后，react只会在第一次初始化成功会进入componentDidmount,之后每次重新渲染后都会进入这个生命周期，这里可以拿到prevProps和prevState，即更新前的props和state


## 页面卸载

### componentWillUnmount

在这个钩子函数中，组件尚可被使用。还没有开始卸载。执行完毕后，页面就彻底卸载完成