import axios from '../config/axios'
import Swal from 'sweetalert2'


export const setEmployees=(data)=>{
    return {
        type:"SET_EMPLOYEES",
        payload:data
    }
}

export const startSetEmployees=()=>{
    return (dispatch)=>{
        axios.get('/employees',{
            headers:{
                'x-auth':localStorage.getItem('token3')
            }
        })
        .then(response=>{
           dispatch(setEmployees(response.data))
        })
    }
}

export const removeEmploy=(data)=>{
    return {type:'REMOVE_EMPLOY',
payload:data}
}

export const startRemoveEmploy=(id)=>{
    return (dispatch)=>{
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
    axios.delete(`/employees/${id}`,{
        headers:{
            'x-auth':localStorage.getItem('token3')
        }
    }).then(response=>{
        dispatch(removeEmploy(response.data))
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

export const addEmploy=(data)=>{
    return {type:'ADD_EMPLOY',
payload:data}
}

export const startAddEmploy=(formData,props)=>{
    return (dispatch)=>{
        axios.post('/employees',formData,{
            headers:{
                'x-auth':localStorage.getItem('token3')
            }
        }).then(response=>{
            if(response.data.hasOwnProperty('errors')){
                Swal.fire({
                    title: 'Oops...',
                    text: 'form cannot be empty',
                   })
            }else{
                dispatch(addEmploy(response.data))
            props.history.push('/employees')
            }
            
        })
    }
}

export const setSingleEmploy=(data)=>{
    return {type:'SINGLE_EMPLOY',
payload:data}
}

export const startSetSingleEmploy=(id)=>{
    return (dispatch)=>{
        axios.get(`/employees/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('token3')
            }
        })
        .then(response=>{
            console.log(response.data)
            dispatch(setSingleEmploy(response.data))
        })
    }
}

export const startResetEmploy=()=>{
    return {type:'RESET_SINGLE_EMPLOY'}
}

export const editEmploy=(data)=>{
    return {type:'EDIT_EMPLOY',
payload:data}
}

export const startEditEmploy=(id,formData,props)=>{
    return (dispatch)=>{
        axios.put(`/employees/${id}`,formData,{
          headers:{
              'x-auth':localStorage.getItem('token3')
          }
      })
      .then(response=>{
          dispatch(editEmploy(response.data))
          props.history.push('/employees')
      })
    }
}