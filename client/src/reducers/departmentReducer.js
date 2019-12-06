
const initialState=[]

const departmentReducer=(state=initialState,action)=>{
    switch (action.type){
        case 'SET_DEPARTMENTS':{
            return action.payload
        }
        case 'REMOVE_DEPARTMENT':{
            return [...state].filter(i=>i._id!=action.payload._id)
        }
        case 'ADD_DEPARTMENT':{
            return [...state,action.payload]
        }
        default:{
            return [...state]
        }
    }
}


export default departmentReducer