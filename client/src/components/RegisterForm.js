import React from 'react'
import axios from '../config/axios'
import Swal from 'sweetalert2'

class RegisterForm extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:'',
            email:'',
            msg:''
           
        }
    }
handleChange=(e)=>{
this.setState({
   [e.target.name]:e.target.value
})
}

handleSubmit=(e)=>{
    e.preventDefault()
    const formData={
        username:this.state.username,
        password:this.state.password,
        email:this.state.email}
    console.log(formData)
    
    if(this.state.msg=='valid'){
axios.post('/users/register' ,formData)
.then(response=>{
    console.log(response.data)
    if(response.data._id){
        this.props.history.push('/users/login')
    }else{
        Swal.fire({
           
            title: 'Oops...',
            text: 'user already exists',
            
          })
    }
   
}).catch(err=>{
 console.log(err)
})
    }else{
        Swal.fire({
            title: 'Oops...',
            text: 'password must be valid',
          })
    }
}

test=(e)=> { 
    var res='Must have'; 
    var str = e.target.value
        if(!str.match(/[a-z]/g)){
            res+=' ,Lowercase'
        }
        if(!str.match(/[A-Z]/g)){
            res+=' ,Uppercase'
        }
        if(!str.match(/[0-9]/g)){
            res+=' ,Number'
        }
        if(!str.match(/[^a-zA-Z\d]/g)){
            res+=' ,Special case'
        }
        if(str.length <= 8){
            res+=' ,Minimum length 8'
        }
if (str.match(/[a-z]/g) && str.match( 
                    /[A-Z]/g) && str.match( 
                    /[0-9]/g) && str.match( 
                    /[^a-zA-Z\d]/g) && str.length >= 8) {
                res = "valid" }
    
   this.setState({msg:res})
} 
    render(){
        return(<div style={{backgroundImage: "url(" + "https://www.billboard.com/files/styles/article_main_image/public/media/ticket-illo-biz-billboard-1548.jpg" + ")",backgroundRepeat:'no-repeat',backgroundSize:"cover",backgroundAttachment: "fixed",minHeight:600,margin:0
    }} class="jumbotron jumbotron-fluid">
 <div className='col-md-3 form-group offset-md-1'>
            <div className="container ">
               
                <h3>Register</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label> <input id="username" type='text' className="form-control" value={this.state.username} onChange={this.handleChange} name='username' required/>

                    <label htmlFor='email'>Email</label> <input id="email"  type='email' className="form-control" value={this.state.email} onChange={this.handleChange} name='email' required/>
                   
                    <label htmlFor='password'>Password </label><input id="password" type='password'  className="form-control" value={this.state.password} onChange={this.handleChange} name='password' onInput={this.test} required/><span style={this.state.msg=='valid'?{color:'green'}:{color:'red'}}>{this.state.password && this.state.msg}</span>
                    
                    
                   <br/>
                    

                    <input className="btn btn-primary"type='submit'/>
                    <small className="form-text text-muted">Already have an account?<a href='/users/login'>Sign in</a></small>
                </form>
                </div>
            </div>
       </div> )
    }
}

export default RegisterForm