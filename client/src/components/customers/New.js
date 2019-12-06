import React from 'react'
import CustomerForm from './Form'
import {connect} from 'react-redux'
import axios from 'axios'
import {startAddCustomer} from '../../actions/customer'

class CustomerNew extends React.Component{
    constructor(){
        super()

    }
handleSubmit=(formData)=>{

this.props.dispatch(startAddCustomer(formData,this.props))

}

    render(){
        return(<div style={{backgroundImage: "url(" + "https://img.freepik.com/free-vector/blue-abstract-acrylic-brush-stroke-textured-background_53876-86373.jpg?size=626&ext=jpg" + ")",backgroundRepeat:'no-repeat',backgroundSize:"cover",minHeight:600,margin:0
    }} class="jumbotron jumbotron-fluid">
        <div className='container'>
            <h2>Add customer details</h2>
           <CustomerForm handleSubmit={this.handleSubmit}/>
        </div>
       </div> )
    }
}

export default connect()(CustomerNew)