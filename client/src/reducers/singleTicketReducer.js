const initialState={}

const singleTicketReducer=(state=initialState,action)=>{
    switch (action.type){
        case 'SET_SINGLE_TICKET':{
            return action.payload
        }
        case 'RESET_SINGLE_TICKET':{
            return {}
        }
        default:{
            return {...state}
        }
    }
}

export default singleTicketReducer