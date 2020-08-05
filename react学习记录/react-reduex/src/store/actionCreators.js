import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const clickButAction = ()=>({
    type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})

export const getListAction = (data)=>({
    type:GET_LIST,
    data
})

export const getTodoList = ()=>{
    return (dispatch)=>{
        axios.get('http://127.0.0.1:4000/api').then(res=>{
            console.log(res)
            const action = getListAction(res.data)
            dispatch(action)
        })
    }
}