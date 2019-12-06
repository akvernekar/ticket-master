import React from 'react';

import {Link,Route,Switch,BrowserRouter} from 'react-router-dom'
import RegisterForm from './components/RegisterForm'
import loginForm from './components/loginForm'
import Home from './components/Home'
import CustomersList from './components/customers/List'
import CustomerNew from './components/customers/New'
import Show from './components/customers/Show'
import Edit from './components/customers/Edit'
import DepartmentList from './components/departments/Department'
import TicketList from './components/ticket/TicketList'
import EmployList from './components/employees/EmployList'
import EmployAdd from './components/employees/EmployAdd'
import EmployEdit from './components/employees/EmployEdit'
import PrivateRoute from './components/privateRoute'
import axios from 'axios'

function App() {
  function handleClick(){
    axios.delete('http://localhost:3026/users/logout',{
      headers:{
        'x-auth':localStorage.getItem('token3')
      }
    })
    .then(response=>{
      localStorage.removeItem('token3') 
      // window.location.reload()
      window.location.href='/'
    })
  }
  return (<div>
    <BrowserRouter>
    <h2>Ticket master</h2>
    <div>
    <div className="navbar navbar-expand-lg navbar-light bg-light" >
    <Link className="navbar" to='/'>home</Link> 
{localStorage.getItem('token3')?
<>

<Link className="navbar" to='/customers'>customer</Link> 
<Link className="navbar" to='/departments'>department</Link> 
<Link className="navbar" to='/employees'>employees</Link> 
<Link className="navbar" to='/tickets'>ticket</Link> 
<Link className="navbar" to='#' onClick={handleClick}>logout</Link> 
</>:
<>
<Link className="navbar"  to='/users/register'>register</Link>  
<Link className="navbar"  to='/users/login'>login</Link> 
  </>}
  </div>
<Switch>
  <Route path='/' component={Home} exact={true}/>
 <Route path='/users/register' component={RegisterForm}/>
 <Route path='/users/login' component={loginForm}/>
 {/* <Route path='/customers' component={CustomersList} exact={true}/>
 <Route path='/customers/new' component={CustomerNew}/>
 <Route path='/customers/edit/:id' component={Edit}/>
 <Route path='/customers/:id' component={Show}/>
 <Route path='/departments' component={DepartmentList}/>
 <Route path='/tickets' component={TicketList}/>
 <Route path='/employees' component={EmployList} exact={true}/>
 <Route path='/employees/edit/:id' component={EmployEdit}/>
 <Route path='/employees/new' component={EmployAdd}/> */}

<PrivateRoute path='/customers' component={CustomersList} exact={true}/>
<PrivateRoute path='/customers/new' component={CustomerNew}/>
<PrivateRoute path='/customers/edit/:id' component={Edit}/>
<PrivateRoute path='/customers/:id' component={Show}/>
<PrivateRoute path='/departments' component={DepartmentList}/>
<PrivateRoute path='/tickets' component={TicketList}/>
<PrivateRoute path='/employees' component={EmployList} exact={true}/>
<PrivateRoute path='/employees/edit/:id' component={EmployEdit}/>
<PrivateRoute path='/employees/new' component={EmployAdd}/>

 </Switch>    
         
    </div>
    </BrowserRouter>
    </div>)
}

export default App
