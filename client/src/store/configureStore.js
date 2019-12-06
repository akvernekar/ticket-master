import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import customerReducer from '../reducers/customerReducer'
import singleCustomerReducer from '../reducers/singleCustomerReducer'
import departmentReducer from '../reducers/departmentReducer'
import employReducer from '../reducers/employReducer'
import singleEmployReducer from '../reducers/singleEmployReducer'
import ticketReducer from '../reducers/ticketReducer'
import singleTicketReducer from '../reducers/singleTicketReducer'


const configureStore=()=>{
    const store=createStore(combineReducers({
        customers:customerReducer,
        customer:singleCustomerReducer,
        departments:departmentReducer,
        employees:employReducer,
        employee:singleEmployReducer,
        tickets:ticketReducer,
        ticket:singleTicketReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore