import React, { Component } from 'react';
import ListUi from './list'
import store from './store/index'
import { changeInputAction, clickButAction, deleteItemAction,getListAction,getTodoList } from './store/actionCreators'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState() // 获取store中的数据
        this.changeValueInput = this.changeValueInput.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange) //订阅reduecr的状态，实时更新页面数据
        this.clickBut = this.clickBut.bind(this)
        this.deleteItem=this.deleteItem.bind(this)
    }
    render () {
        return (
            <ListUi 
            changeValueInput={this.changeValueInput}
            inputValue={this.state.inputValue} 
            list={this.state.list}
            clickBut={this.clickBut}
            deleteItem={this.deleteItem}
            ></ListUi>

        );
    }
    componentDidMount(){
        // axios.get('http://127.0.0.1:4000/api').then(res=>{
        //     console.log(res)
        //     const action = getListAction(res.data)
        //     store.dispatch(action)
        // })
        store.dispatch(getTodoList())
    }
    changeValueInput (e) {
        // const action = { // 创建action
        //     type: CHANGE_INPUT,
        //     value: e.target.value
        // }
        const action = changeInputAction(e.target.value)
        store.dispatch(action) // 改变store中的数据
        // this.setState({
        //    list:[...this.state.list,e.target.value]
        // })
    }
    storeChange () {
        this.setState(store.getState())//实时获取store数据
    }
    clickBut () {
        // const action = {
        //     type: ADD_ITEM
        // }
        const action = clickButAction()
        store.dispatch(action)
    }
    deleteItem (index) {
        // const action = {
        //     type:DELETE_ITEM,
        //     value:index
        // }
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

}
export default TodoList;