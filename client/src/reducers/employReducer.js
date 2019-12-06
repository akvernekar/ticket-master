const initialState=[]

const employReducer=(state=initialState,action)=>{
    switch (action.type){
        case 'SET_EMPLOYEES':{
            return action.payload
        }
        case 'REMOVE_EMPLOY':{
            return [...state].filter(i=>i._id!=action.payload._id)
        }
        case 'ADD_EMPLOY':{
            return [...state,action.payload]
        }
        case 'EDIT_EMPLOY':{
            return [...state].map(i=>{
                if(i._id==action.payload._id){
                    return action.payload
                }else{
                    return i
                }
            })
        }
        default:{
            return [...state]
        }
    }
}

export default employReducer