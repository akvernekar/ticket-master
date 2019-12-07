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
        return(<div style={{backgroundImage: "url(" + "https://img.freepik.com/free-vector/blue-abstract-acrylic-brush-stroke-textured-background_53876-86373.jpg?size=626&ext=jpg" + ")",backgroundRepeat:'no-repeat',backgroundSize:"cover",minHeight:600,margin:0
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