const initialState={}

const singleCustomerReducer=(state=initialState,action)=>{
switch (action.type){
    case 'SINGLE_CUSTOMER':{
        return action.payload
    }
    default:{
        return {...state}
    }
}
}

export default singleCustomerReducer