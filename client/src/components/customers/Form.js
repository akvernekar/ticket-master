import React from 'react'

class CustomerForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.customer?props.customer.name:'',
            mobile:props.customer?props.customer.mobile:'',
            email:props.customer?props.customer.email:''
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
    // console.log(formData)
    this.props.handleSubmit(formData)
}
    render(){
        return(
        <div className='container'>
            <div className='form-group'>
                <form onSubmit={this.handleSubmit}>
                    <label>Name <input className='form-control' type='text' value={this.state.name} onChange={this.handleChange} name='name'/></label><br/>

                    <label>Email <input className='form-control' type='text' value={this.state.email} onChange={this.handleChange} name='email'/></label><br/>

                    <label>Mobile <input className='form-control' type='text' value={this.state.mobile} onChange={this.handleChange} name='mobile'/></label><br/>

                    <input className="btn btn-primary" type='submit'/>
                </form>
            </div>
            </div>  )
    }
}

export default CustomerForm