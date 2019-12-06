import React from 'react'
import axios from '../config/axios'
import Swal from 'sweetalert2'

class loginForm extends React.Component{
    constructor(){
        super()
        this.state={
           email:'',
            password:''
           
        }
    }
handleChange=(e)=>{
this.setState({
   [e.target.name]:e.target.value
})
}

handleSubmit=(e)=>{
    e.preventDefault()
    const formData=this.state
    console.log(formData)
    
 
axios.post('/users/login',formData)
.then(response=>{
   
    if(response.data.hasOwnProperty('errors')){
        
        Swal.fire({
           
            title: 'Oops...',
            text: `${response.data.errors}`,
            
          })
    } 
    else{
        
        localStorage.setItem('token3',response.data.token)
        this.props.history.push('/')
        window.location.reload()
    }
   
}).catch(err=>{
 console.log(err)
})


}
    render(){
        return(<div style={{backgroundImage: "url(" + "https://www.billboard.com/files/styles/article_main_image/public/media/ticket-illo-biz-billboard-1548.jpg" + ")",backgroundRepeat:'no-repeat',backgroundSize:"cover",backgroundAttachment: "fixed",minHeight:600,margin:0
    }} class="jumbotron jumbotron-fluid">
            <div className='container form-group col-md-6 offset-md-1'>
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit}>
                <label>Email <input className='form-control' type='email' value={this.state.email} onChange={this.handleChange} name='email' required/></label><br/>

                    <label>Password <input className="form-control"type='password' value={this.state.password} onChange={this.handleChange} name='password' required/></label><br/>

                    

                    <input className='btn btn-primary'type='submit'/>
                    <small className="form-text text-muted">Not registered?<a href='/users/register'>create an account</a></small>
                </form>
            </div>
       </div> )
    }
}

export default loginForm