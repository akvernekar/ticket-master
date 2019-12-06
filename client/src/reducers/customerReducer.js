
const initialState=[]

const customerReducer=(state=initialState,action)=>{
    switch (action.type){
        case 'SET_CUSTOMERS':{
            return action.payload
        }
        case 'REMOVE_CUSTOMER':{
            return [...state].filter(i=>i._id!=action.payload._id)
        }
        case 'ADD_CUSTOMER':{
            return [...state,action.payload]
        }
        case 'EDIT_CUSTOMER':{
            return [...state].map(i=>{
                if(i._id==action.payload._id){
                    return action.payload
                }else{
                    return i
                }
            })
        }
        default :{
            return [...state]
        }
    }
}

export default customerReducer
