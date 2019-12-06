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

        return(<div style={{backgroundImage: "url(" + "https://img.freepik.com/free-vector/blue-abstract-acrylic-brush-stroke-textured-background_53876-86373.jpg?size=626&ext=jpg" + ")",backgroundRepeat:'no-repeat',backgroundSize:"cover",minHeight:600,margin:0
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