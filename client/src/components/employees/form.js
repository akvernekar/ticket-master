import React from 'react'
import {connect} from 'react-redux'
import {startSetDepartments} from '../../actions/department'


 class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.employee?props.employee.name:'',
            email:props.employee?props.employee.email:'',
            mobile:props.employee?props.employee.mobile:'',
            department:props.employee?props.employee.department:'',
        }
    }


    componentDidMount=()=>{
        
this.props.dispatch(startSetDepartments())
    }

    handle=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submit=(e)=>{
        e.preventDefault()
        const data={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            department:this.state.department
        }
        this.props.handle(data)
    }

    select=(e)=>{
this.setState({department:e.target.value})
    }

    render(){
        // console.log(this.state)
        return(<div className='container'>

       
            <div className='form-group'>
                <form onSubmit={this.submit}>
                <label>Name<input className='form-control' type='text' value={this.state.name} name='name' onChange={this.handle}/></label>
                <br/>
                <label>Email<input className='form-control' type='text' value={this.state.email} name='email' onChange={this.handle}/></label><br/>
                <label>Mobile<input className='form-control' type='text' value={this.state.mobile} name='mobile' onChange={this.handle}/></label><br/>
              <label > Department <select className='form-control float-right' onChange={this.select}>
                  <option value=''>Select Department</option>
                    {this.props.departments.map(item=>{
                        return(<option value={item._id}>{item.name}</option>)
                    })}
                </select>
                </label>
                    <br/>
                <button className="btn btn-success" type='submit'>Save</button>
                </form> 


            </div>
            </div>  )
    }
}

const mapStateToProps=(state)=>{
    return {departments:state.departments}
}

export default connect(mapStateToProps)(Form)