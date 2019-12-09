import React from 'react'
// import axios from 'axios'
import {connect} from 'react-redux'
import {startAddTicket,startEditTicket, resetSingleTicket} from '../../actions/tickets'

class EditForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // customers:[],
            // departments:[],
            selectc:props.ticket?props.ticket.customer:'',
            selectd:props.ticket?props.ticket.department:'',
            message:props.ticket?props.ticket.message:'',
            priority:props.ticket?props.ticket.priority:''
        }
    }

    
selectedc=(e)=>{
    this.setState({selectc:e.target.value})
}
selectedd=(e)=>{
    this.setState({selectd:e.target.value})
}

submit=(e)=>{
        e.preventDefault()
       const id=this.props.ticket._id
        const formData={
            "customer":this.state.selectc,
            "department":this.state.selectd,
            "priority":this.state.priority,
            "message":this.state.message,
            
        }
// console.log(formData)

this.props.dispatch(startEditTicket(id,formData))

}

massage=(e)=>{
    this.setState({message:e.target.value})
}
priority=(e)=>{
this.setState({priority:e.target.value})
}

    render(){
        // console.log(this.state.priority)
        return(
            <div>
                <div >
                <h3>Edit Ticket</h3>
              <div className='form-group d-flex justify-content-center' style={{width:"21rem"}}> 
            <form onSubmit={this.submit}>
              Customer <select className='form-control float-right' onChange={this.selectedc} >
                   <option value=''>select-customers</option>
               {this.props.customers.map(customer=>{
                   return  <option key={customer._id}value={customer._id} selected={customer._id==this.props.ticket.customer}>{customer.name}</option>
               })}
                </select> 

               <div>
                   <br/>
                <br/>
                </div>
               Department <select className='form-control float-right' onChange={this.selectedd} >
                    <option value=''>select-departments</option>
               {this.props.departments.map(department=>{
                   return  <option key={department._id} value={department._id} selected={department._id==this.props.ticket.department}>{department.name}</option>
               })}
                </select> 
                <div>
                <br/>
                <br/>
                </div>
                <p  onChange={this.priority}>Priority-
                    <input type='radio' name='priority' value='high' />High
                    <input type='radio' name='priority' value='medium' />Medium
                    <input type='radio' name='priority' value='low' />Low
                 </p>
                 
                <p>massage <textarea className='form-control' type='text' value={this.state.message} onChange={this.massage}placeholder='massage'/></p>
                <button className="btn btn-primary" type='submit'>Save Edited</button>
                <button className="btn btn-light" onClick={()=>{this.props.dispatch(resetSingleTicket())}} type='button'>cancel</button>

            </form>
            </div> 
            </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        customers:state.customers,
        departments:state.departments
    }
}


export default connect(mapStateToProps)(EditForm) 