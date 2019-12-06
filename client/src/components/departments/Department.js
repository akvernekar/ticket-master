import React from 'react'
import {connect} from 'react-redux'
import {startSetDepartments,startRemoveDepartment,startAddDepartment} from '../../actions/department'

class DepartmentList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
           
        }
    }
    handle=(e)=>{
        this.setState({name:e.target.value})
    }

componentDidMount=()=>{
    
    
    this.props.dispatch(startSetDepartments())

}

click=(e)=>{
 e.preventDefault()
const depart={name:this.state.name}
    
    
    this.props.dispatch(startAddDepartment(depart))
    this.setState({name:''})
}


remove=(id)=>{
    
    this.props.dispatch(startRemoveDepartment(id))
}

    render(){
        return(<div style={{backgroundImage: "url(" + "https://img.freepik.com/free-vector/blue-abstract-acrylic-brush-stroke-textured-background_53876-86373.jpg?size=626&ext=jpg" + ")",backgroundRepeat:'no-repeat',backgroundSize:"cover",minHeight:600,margin:0
    }} class="jumbotron jumbotron-fluid">
        <div className="container">
            <br/>
                <div className='form-group '>
                <form onSubmit={this.click}>
                <div className='input-group'  style={{width:"28rem"}} >
                <input className='form-control'  type='text' value={this.state.name} onChange={this.handle} placeholder='department' name='name'/>
                <span className="input-group-btn">
                <button className="btn btn-primary " type='submit'>Add department</button>
                </span>
                </div>
                </form>
                </div>


                <h2>Listing Department</h2>
                <table className="table table-hover" >
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                            <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.departments.map(item=>{
                    return(
                     <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.name}</td> 
                        <td><button className="btn btn-danger" onClick={()=>this.remove(item._id)}>remove</button></td>
                        </tr>
                       )
                })}
                    </tbody>
                </table>
                
                
           
            </div>
            </div> )
    }
}

const mapStateToProps=(state)=>{
    return {
        departments:state.departments
    }
}

export default connect(mapStateToProps)(DepartmentList)