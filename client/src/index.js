import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {startSetTickets} from './actions/tickets'
import {startSetCustomers} from './actions/customer'
import {startSetDepartments} from './actions/department'
import {startSetEmployees} from './actions/employee'
import App from './App';

import '../node_modules/bootstrap/dist/css/bootstrap.css'


const store=configureStore()

store.dispatch(startSetCustomers()) 
store.dispatch(startSetDepartments()) 
store.dispatch(startSetEmployees()) 
store.dispatch(startSetTickets())

store.subscribe(()=>{
    console.log(store.getState())
})

const ele=(
    <Provider store={store} >
        <App/>
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'));


