import React from 'react'
import Form from './form'
import axios from 'axios'
import {connect} from 'react-redux'
import {startSetSingleEmploy,startResetEmploy,startEditEmploy} from '../../actions/employee'


class EmployEdit extends React.Component{
    constructor(props){
        super(props)
        
    }

    componentDidMount=()=>{
        const id=this.props.match.params.id
        
        this.props.dispatch(startSetSingleEmploy(id))
    }

componentWillUnmount=()=>{
    this.props.dispatch(startResetEmploy())
}

    handle=(data)=>{
        const id=this.props.match.params.id
    
      this.props.dispatch(startEditEmploy(id,data,this.props))
    }


    render(){
        
    return(<div style={{backgroundImage: "url(" + "https://img.freepik.com/free-vector/blue-abstract-acrylic-brush-stroke-textured-background_53876-86373.jpg?size=626&ext=jpg" + ")",backgroundRepeat:'no-repeat',backgroundSize:"cover",minHeight:600,margin:0
}} class="jumbotron jumbotron-fluid">
        <div className='container'>
            <br/>
            <h4>Edit Employee</h4>
            
          { Object.keys(this.props.employee).length!=0 && <Form employee={this.props.employee}  handle={this.handle}/>} 
        </div>
  </div>  )
    }
}

const mapStateToProps=(state)=>{
return {employee:state.employee}
}

export default connect(mapStateToProps)(EmployEdit)