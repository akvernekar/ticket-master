import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startShowCustomer,startRemoveCustomer} from '../../actions/customer'

class Show extends React.Component{
    constructor(props){
        super(props)
        
    }

    componentDidMount=()=>{
      const id=this.props.match.params.id
      

this.props.dispatch(startShowCustomer(id))
    }

    remove=()=>{
        const id=this.props.match.params.id
        
        this.props.dispatch(startRemoveCustomer(id))
        this.props.history.push('/customers')
    }

    render(){
        
        return(<div style={{backgroundImage: "url(" + "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8sGjKN98eUECUm8zhILW3Ty8R0BUcDixmBPkMa9EShm5KnwdE" + ")",backgroundRepeat:'no-repeat',backgroundSize:"cover",minHeight:650,margin:0
    }} class="jumbotron jumbotron-fluid">
        <div className="container">
            <h4>Details of customer</h4>
            <div className='card bg-light mb-3' style={{"width": "18rem"}}>
                <div className='card-body'>
          <h4 className="card-title">{this.props.customer && this.props.customer.name}</h4>
          <p className="card-subtitle mb-2 text-muted">{this.props.customer && this.props.customer.email}</p>
          <p>{this.props.customer && this.props.customer.mobile}</p>
          <Link to={ this.props.customer && `/customers/edit/${this.props.customer._id}`}><button className="btn btn-outline-info">Edit</button></Link>
          <button className="btn btn-outline-danger" onClick={this.remove}>Remove</button> 
          <Link to='/customers'><button className="btn btn-outline-warning">Back</button></Link>
            </div>
            </div>
            </div> 
            </div>)
    }
}

const mapStateToProps=(state)=>{
    return{
        customer:state.customer
    }
}

export default connect(mapStateToProps)(Show)