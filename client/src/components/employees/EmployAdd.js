import React from 'react'
import Form from './form'
import {connect} from 'react-redux'
import {startAddEmploy} from '../../actions/employee'

class EmployAdd extends React.Component{
    constructor(props){
        super(props)

    }

    handle=(data)=>{
        
        this.props.dispatch(startAddEmploy(data,this.props))
    }


    render(){
        return(<div style={{backgroundImage: "url(" + "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8sGjKN98eUECUm8zhILW3Ty8R0BUcDixmBPkMa9EShm5KnwdE" + ")",backgroundRepeat:'no-repeat',backgroundSize:"cover",minHeight:650,margin:0
    }} class="jumbotron jumbotron-fluid">
        <div className='container'>
             <br/>
            <h4>Add Employees</h4>
           
            <Form handle={this.handle}/>
        </div>
        </div>)
    }
}

export default connect()(EmployAdd)