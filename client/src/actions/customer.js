import axios from '../config/axios'
import Swal from 'sweetalert2'

export const setCustomers=(data)=>{
    return {
        type:'SET_CUSTOMERS',
        payload:data
    }
}

export const startSetCustomers=()=>{
    return (dispatch)=>{
        axios.get('/customers',{
            headers:{
                'x-auth':localStorage.getItem('token3')
            }
        })
        .then(response=>{
            dispatch(setCustomers(response.data))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const removeCustomer=(data)=>{
    return {
        type:'REMOVE_CUSTOMER',
        payload:data
    }
}

export const startRemoveCustomer=(id,length)=>{
    return (dispatch)=>{
        axios.get('/tickets',{
            headers:{
                'x-auth':localStorage.getItem('token3')
            }
        }).then(response=>{
if(response.data.find(i=>i.customer==id)){
    Swal.fire({
                       
        title: 'Oops...',
        text: 'Ticket is avilable cant delete customer',
       
      })
}else{
    if(length>1 ){
axios.delete(`/customers/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('token3')
            }
        })
        .then(response=>{
           dispatch(removeCustomer(response.data)) 
           })
           if(!response.data.hasOwnProperty('errors')){
        setTimeout(()=>{
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
        },1000) }  
    }else{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                axios.delete(`/customers/${id}`,{
                    headers:{
                        'x-auth':localStorage.getItem('token3')
                    }
                })
                .then(response=>{
                   dispatch(removeCustomer(response.data)) 
                   })
                   Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                  
            }
          })
    }
  
}
})
}
}

export const addCustomer=(data)=>{
return{
    type:'ADD_CUSTOMER',
    payload:data
}
}

export const startAddCustomer=(formData,props)=>{
    return (dispatch)=>{
        axios.post('/customers', formData,{
    headers:{
        'x-auth':localStorage.getItem('token3')
    }
})
.then(response=>{
    if(response.data.hasOwnProperty('errors')){
        Swal.fire({
            title: 'Oops...',
            text: 'form cannot be empty',
           
          })
    }else{
        dispatch(addCustomer(response.data))
        props.history.push('/customers')
    }
    
})
.catch(err=>{
    console.log(err) 
})
    }
}

export const showCustomer=(data)=>{
    return {
        type:'SINGLE_CUSTOMER',
        payload:data
    }
}

export const startShowCustomer=(id)=>{
    return (dispatch)=>{
        axios.get(`/customers/${id}`,
{
    headers:{
        "x-auth":localStorage.getItem('token3')
    }
})
.then(response=>{
   dispatch(showCustomer(response.data))
})
    }
}

export const editCustomer=(data)=>{
    return {
        type:'EDIT_CUSTOMER',
        payload:data
    }
}

export const startEditCustomer=(id,formData,props)=>{
    return (dispatch)=>{
        axios.put(`/customers/${id}`, formData, {
            headers:{
                'x-auth':localStorage.getItem('token3')
            }
        })
        .then(response=>{
            console.log(response.data)
            dispatch(editCustomer(response.data))
            props.history.push(`/customers/${id}`)
        })
    }
}
