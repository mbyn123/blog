import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index'
// import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './store/actionTypes'
import { changeInputAction,clickButAction,deleteItemAction} from './store/actionCreators'


class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState() // 获取store中的数据
        this.changeValueInput = this.changeValueInput.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange) //订阅reduecr的状态，实时更新页面数据
        this.clickBut = this.clickBut.bind(this)
    }
    render() {
        return (
            <div style={{ padding: '20px 50px' }}>
                <Input style={{ width: '250px' }} value={this.state.inputValue} onChange={this.changeValueInput} />
                <Button type="primary" onClick={this.clickBut}>保存</Button>
                <List
                    style={{ width: '500px', margin: '10px 0' }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (
                        <List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>
                    )}
                />
            </div>

        );
    }
    changeValueInput(e) {
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
    storeChange() {
        this.setState(store.getState())
    }
    clickBut() {
        // const action = {
        //     type: ADD_ITEM
        // }
        const action = clickButAction()
        store.dispatch(action)
    }
    deleteItem(index){
        // const action = {
        //     type:DELETE_ITEM,
        //     value:index
        // }
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

}
export default TodoList;