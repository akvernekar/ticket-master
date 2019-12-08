import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startSetCustomers ,startRemoveCustomer} from '../../actions/customer'

class CustomersList extends React.Component {
    constructor(props){
        super(props)
        this.state={
           
            array:[]
            
        }
    }

    componentDidMount(){
        
        this.props.dispatch(startSetCustomers())
    }

    remove=(id)=>{
        
        this.props.dispatch(startRemoveCustomer(id))
    }

    

    box=(e,id)=>{
     if(e.target.checked){ 
        this.state.array.push(id)
       
     }else{
         let i=this.state.array.indexOf(id)
         this.state.array.splice(i,1)
        
     }
    }


    remove2=()=>{
        this.state.array.forEach(item=>{
            

            this.props.dispatch(startRemoveCustomer(item,this.state.array.length))
        })
        
    }
    render(){
        return (<div style={{backgroundImage: "url(" + "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8sGjKN98eUECUm8zhILW3Ty8R0BUcDixmBPkMa9EShm5KnwdE" + ")",backgroundRepeat:'no-repeat',backgroundSize:"cover",minHeight:650,margin:0
    }} class="jumbotron jumbotron-fluid">
            <div className='container col-md-6 offset-md-1' >
                <br/>
                 <Link to='/customers/new'><button className="btn btn-dark"> Add customers</button></Link>
                 <button className="btn btn-danger offset-md-6" onClick={this.remove2}>Remove selected</button>
                <h2>listing Customers- {this.props.customers.length}</h2> 
                
                <ul className="list-group">{this.props.customers.map(item=>{
                    return <li className="list-group-item d-flex justify-content-between align-items-center" key={item._id}>
                        <input type='checkbox' onChange={(e)=>this.box(e,item._id)} />
                        <Link to={`/customers/${item._id}`}>{item.name}</Link>
                         <button className="btn btn-danger" onClick={()=>this.remove(item._id)}>remove</button>
                         </li>
                    
                })}
               
                </ul>
                <br/>
                
            </div>
       </div> )
    }
}

const mapStateToProps=(state)=>{
    return {
        customers:state.customers
    }
}

export default connect(mapStateToProps)(CustomersList)