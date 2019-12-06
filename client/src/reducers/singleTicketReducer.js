const initialState={}

const singleTicketReducer=(state=initialState,action)=>{
    switch (action.type){
        case 'SET_SINGLE_TICKET':{
            return action.payload
        }
        default:{
            return {...state}
        }
    }
}

export default singleTicketReducer