const initialState=[]

const ticketReducer=(state=initialState,action)=>{
    switch (action.type){
        case 'SET_TICKETS':{
            return action.payload
        }
        case 'REMOVE_TICKET':{
            return [...state].filter(i=>i._id!=action.payload._id)
        }
        case 'SET_STATUS_TICKET':{
            return [...state].map(i=>{
                if(i._id==action.payload._id){
                    return action.payload
                }else{
                    return i
                }
            })
        }
        case 'EDIT_TICKET':{
            return [...state].map(i=>{
                if(i._id==action.payload._id){
                    return action.payload
                }else{
                    return i
                }
            })
        }

        case 'FILTER_TICKETS':{
            return action.payload
        }
        case 'SEARCH_BY_CODE':{
            return action.payload
        }
        case 'ADD_TICKET':{
            return [...state,action.payload]
        }
        default :{
            return [...state]
        }
    }
}

export default ticketReducer