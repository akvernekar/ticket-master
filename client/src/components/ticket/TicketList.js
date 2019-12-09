import React from 'react'
import Form from './Form'
import EditForm from '../ticket/TicketEdit'
import {ProgressBar} from 'react-bootstrap'
import {connect} from 'react-redux'
import Pai from './Charts'
import {startSetTickets,startRemoveTicket,startSetStatusTicket,startFilterTickets,startSearchByCode,startSingleTicket} from '../../actions/tickets'





class TicketList extends React.Component{
    constructor(){
        super()
        this.state={
           
            search:''
        }
    }

   


    check=(e)=>{
        
const status=e.target.checked
const id=e.target.value
 this.props.dispatch(startSetStatusTicket(status,id))
             }

    remove=(id)=>{
        
        this.props.dispatch(startRemoveTicket(id))
    }

    filter=(priority)=>{
        
        this.props.dispatch(startFilterTickets(priority))
    }
    
    search=(e)=>{
        this.setState({search:e.target.value})

       
        this.props.dispatch(startSearchByCode(e.target.value))
        
    }

    edit=(id)=>{
        this.props.dispatch(startSingleTicket(id))
    }

    

    render=()=>{
        
        
        
        return(
            <div style={{backgroundImage: "url(" + "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8sGjKN98eUECUm8zhILW3Ty8R0BUcDixmBPkMa9EShm5KnwdE" + ")",backgroundRepeat:'no-repeat',backgroundSize:"cover",minHeight:650,margin:0
        }} class="jumbotron jumbotron-fluid">
            
                
                <div className='row'>
                <div className='col-md-6 offset-md-1'>
            <h5>Filter By Priority</h5>
                <button className="btn btn-outline-dark" onClick={()=>this.props.dispatch(startSetTickets())}>All</button>
                <button className="btn btn-outline-dark"  onClick={()=>this.filter('high')}>High</button>
                <button className="btn btn-outline-dark" onClick={()=>this.filter('medium')}>Medium</button>
                <button className="btn btn-outline-dark" onClick={()=>this.filter('low')}>Low</button> 
                </div>
                <div className='col-md-3'>
                <input className='form-control' type='text' value={this.state.search} onChange={this.search} placeholder='search by code'/>
                </div>
                </div>
                <br/>
                <br/>
                <div className='row'>
                    <div className='col-md-7'>
                <table class="table table-hover" style={{'overflow-x':'auto'}}>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Priority</th>
                            <th>Message</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                            {this.props.tickets.map(ticket=>{
                                return (
                                  <tr key={ticket._id}>
                                      <td>{ticket.code}</td>

                                      <td className={ticket.isResolved?"list-group-item list-group-item-success":"list-group-item list-group-item-danger"} >{this.props.customers.length!=0 &&this.props.customers.find(item=>{
                                         return item._id==ticket.customer}).name}</td>

                                        <td>
                                            {this.props.departments.length!=0 && this.props.departments.find(item=>{
                                                return item._id==ticket.department
                                            }).name}
                                        </td>
                                        <td>
                                            {ticket.priority}
                                        </td>
                                        <td>
                                            {ticket.message}
                                        </td>
                                        <td>
                                            <input value={ticket._id} type='checkbox' checked={ticket.isResolved} onChange={this.check}/>
                                        </td>
                                        <td>
                                        <button className="btn btn-outline-info" onClick={()=>{this.edit(ticket._id)}}>edit</button>


                                            <button className="btn btn-outline-danger" onClick={()=>{this.remove(ticket._id)}}>remove</button>
                                        </td>

                                    </tr>

                                    
                                )
                            })}
                        

                    </tbody>

                </table>
                </div>
                <div className='col-md-4 offset-md-1'>
                        {Object.keys(this.props.ticket).length!=0 ? <EditForm ticket={this.props.ticket}/>: <Form/>} 
                </div>
               
                </div>
                <div className="container">
                    <h4>Status Bar</h4>
                <ProgressBar animated variant="success" now={this.props.tickets.length?(this.props.tickets.filter(i=>i.isResolved==true).length)/(this.props.tickets.length)*100:0}
                 label={this.props.tickets.length?`${(this.props.tickets.filter(i=>i.isResolved==true).length/this.props.tickets.length*100).toFixed(2)}%`:0} />
                <div>
                <br/>
                <br/>
                </div>
                <div className="container offset-md-2">
                    <h4>Priority Chart</h4>
                <Pai tickets={this.props.tickets} />
                </div>
                
                
                </div>
                
              
       
     
                
                </div>
             )
    }
    
}

  const mapStateToProps=(state)=>{
      return {
tickets:state.tickets,
customers:state.customers,
departments:state.departments,
employees:state.employees,
ticket:state.ticket

      }
  }   
    


export default connect(mapStateToProps)(TicketList)