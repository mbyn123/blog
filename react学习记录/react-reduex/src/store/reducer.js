const defaultState = {
    inputValue:'55555',
    list:[]
}

export default (state = defaultState,action)=>{
    if(action.type == 'change_value'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
       return newState
    }
    if(action.type == 'add_item'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type == 'delete_item'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}