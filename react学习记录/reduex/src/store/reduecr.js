import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes'

const defaultState = { // 默认数据
    inputValue:'',
    list:[
        '上班',
        '下班'
    ]
} 
export default (state = defaultState,action)=>{ // 方法函数
    console.log(state,action) // state是旧的数据，action是改变后的数据
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    
    if(action.type === ADD_ITEM){
       let newState = JSON.parse(JSON.stringify(state))
       newState.list.push(newState.inputValue)
       newState.inputValue = ''
       return newState
    }

    if(action.type == DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        // console.log(action.index)
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}