import React from 'react'
// import axios from 'axios'
import {connect} from 'react-redux'
import {startAddTicket} from '../../actions/tickets'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // customers:[],
            // departments:[],
            selectc:'',
            selectd:'',
            message:'',
            priority:''
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
        const code='DCT'+`${Math.round(Math.random()*200)}`
        const formData={
            "customer":this.state.selectc,
            "department":this.state.selectd,
            "priority":this.state.priority,
            "message":this.state.message,
            "code":code
        }
// console.log(formData)

this.props.dispatch(startAddTicket(formData))
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
                <h3>Add Tickets</h3>
              <div className='form-group d-flex justify-content-center' style={{width:"21rem"}}> 
            <form onSubmit={this.submit}>
              Customer <select className='form-control float-right' onChange={this.selectedc}>
                   <option value=''>select-customers</option>
               {this.props.customers.map(customer=>{
                   return  <option key={customer._id}value={customer._id}>{customer.name}</option>
               })}
                </select> 

               <div>
                   <br/>
                <br/>
                </div>
               Department <select className='form-control float-right' onChange={this.selectedd} >
                    <option value=''>select-departments</option>
               {this.props.departments.map(department=>{
                   return  <option key={department._id} value={department._id}>{department.name}</option>
               })}
                </select> 
                <div>
                <br/>
                <br/>
                </div>
                <p  onChange={this.priority}>Priority-
                    <input type='radio' name='priority' value='high'/>High
                    <input type='radio' name='priority' value='medium'/>Medium
                    <input type='radio' name='priority' value='low'/>Low
                 </p>
                 
                <p>massage <textarea className='form-control' type='text' value={this.state.message} onChange={this.massage}placeholder='massage'/></p>
                <input className="btn btn-primary" type='submit'/>
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


export default connect(mapStateToProps)(Form) 