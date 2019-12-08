import React from 'react'

import CustomerFrom from './Form'
import {connect} from 'react-redux'
import {startShowCustomer,startEditCustomer} from '../../actions/customer'

class CustomerEdit extends React.Component{
    constructor(props){
        super(props)
       
    }

    componentDidMount(){
         const id=this.props.match.params.id
       
this.props.dispatch(startShowCustomer(id))
    }


    handleSubmit=(formData)=>{
        const id=this.props.match.params.id
       
        this.props.dispatch(startEditCustomer(id,formData,this.props))
    }

    render(){

        return(<div style={{backgroundImage: "url(" + "https://media.istockphoto.com/photos/clean-large-wooden-background-or-texture-picture-id831429672?k=6&m=831429672&s=612x612&w=0&h=UI42mMaWWNQZEfF4zehn7CwQ5G9-QfiP7b8wvqMyGsM=" + ")",backgroundRepeat:'no-repeat',backgroundSize:"cover",minHeight:650,margin:0
    }} class="jumbotron jumbotron-fluid">
            <div className='container'>
                <h2>Edit customer details</h2>
                {Object.keys(this.props.customer).length!=0 && <CustomerFrom customer={this.props.customer} handleSubmit={this.handleSubmit}/>}
            </div>
        </div>)
    }
}
const mapStateToProps=(state)=>{
   return{ customer:state.customer}
}


export default connect(mapStateToProps)(CustomerEdit)