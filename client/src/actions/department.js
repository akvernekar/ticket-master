import axios from '../config/axios'
import Swal from 'sweetalert2'

export const setDepartment=(data)=>{
    return {type:'SET_DEPARTMENTS',
payload:data}
}

export const startSetDepartments=()=>{
    return (dispatch)=>{
        axios.get('/departments',{
        headers:{
            'x-auth':localStorage.getItem('token3')
        }
    })
    .then(response=>{
        dispatch(setDepartment(response.data))
    })
    }
}

export const removeDepartment=(data)=>{
    return {type:'REMOVE_DEPARTMENT',
payload:data}
}

export const startRemoveDepartment=(id)=>{
    return (dispatch)=>{
        axios.get('/tickets',{
            headers:{
                'x-auth':localStorage.getItem('token3')}})
            .then(response=>{
                if(response.data.find(i=>i.department==id)){
                    Swal.fire({ 
                        title: 'Oops...',
                        text: 'Ticket is avilable cant delete department',
                       
                      })
                }else{
                    axios.get('/employees',{
                        headers:{
                            'x-auth':localStorage.getItem('token3')}})
                            .then(response=>{
                                if(response.data.find(i=>i.department._id==id)){
                                    Swal.fire({ 
                                        title: 'Oops...',
                                        text: 'employee is avilable cant delete department',
                                       })  
                                }
                                else{
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
                                            axios.delete(`/departments/${id}`,{
                                                headers:{
                                                    'x-auth':localStorage.getItem('token3')
                                                }
                                            })
                                            .then(response=>{
                                               dispatch(removeDepartment(response.data))
                                            })
                                             Swal.fire(
                                            'Deleted!',
                                            'Your file has been deleted.',
                                            'success'
                                          )
                                        }
                                      })
                                }
                            })

                   
  }
            })
  }
}

export const addDepartment=(data)=>{
    return {
        type:'ADD_DEPARTMENT',
        payload:data
    }
}

export const startAddDepartment=(formData)=>{
    return (dispatch)=>{
        axios.post('/departments',formData,{
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
                dispatch(addDepartment(response.data))
            }
            
        })
    }
}