import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startSetEmployees,startRemoveEmploy} from '../../actions/employee'

class EmployList extends React.Component{
    constructor(props){
        super(props)
        
    }

    componentDidMount=()=>{
        
        this.props.dispatch(startSetEmployees())
    }

    remove=(id)=>{
       
        this.props.dispatch(startRemoveEmploy(id))
    }

render(){
    
    return (<div style={{backgroundImage: "url(" + "https://img.freepik.com/free-vector/blue-abstract-acrylic-brush-stroke-textured-background_53876-86373.jpg?size=626&ext=jpg" + ")",backgroundRepeat:'no-repeat',backgroundSize:"cover",minHeight:600,margin:0
}} class="jumbotron jumbotron-fluid">
        <div className='container'>
            <br/>
            <Link to='/employees/new'><button className="btn btn-secondary">Add Employees</button></Link>
            <div>
            <br/>
            <br/>
            </div>
            <table className="table table-hover" >
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    </tr>
                    </thead>
                <tbody>
                    {this.props.employees.map(item=>{
                        return(
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.department.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td><button className="btn btn-outline-danger" onClick={()=>{this.remove(item._id)}}>remove</button></td>
                            <td><Link to={`/employees/edit/${item._id}`}><button className="btn btn-outline-info">Edit</button></Link></td>
                        </tr>
                        )
                    })}
                    </tbody>
             </table>
             <br/>

        </div>
  </div>  )
}

}

const mapStateToProps=(state)=>{
return {employees:state.employees}
}

export default connect(mapStateToProps)(EmployList)