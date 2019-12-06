const initialState={}

const singleEmployReducer=(state=initialState,action)=>{
    switch (action.type){
        case 'SINGLE_EMPLOY':{
            return action.payload
        }
        case 'RESET_SINGLE_EMPLOY':{
            return {}
        }
        default :{
            return {...state}
        }
    }
}

export default singleEmployReducer