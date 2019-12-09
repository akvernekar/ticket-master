import axios from '../config/axios'
import Swal from 'sweetalert2'


export const setTickets=(data)=>{
    return {type:'SET_TICKETS',
payload:data}
}

export const startSetTickets=()=>{
    return (dispatch)=>{
        axios.get('/tickets',{
            headers:{
                'x-auth':localStorage.getItem('token3')
            }
        })
        .then(response=>{
            dispatch(setTickets(response.data))     
        })
    }
}

export const removeTicket=(data)=>{
    return{type:'REMOVE_TICKET',
payload:data}
}

export const startRemoveTicket=(id)=>{
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
            axios.delete(`/tickets/${id}`,{
                headers:{
                    'x-auth':localStorage.getItem('token3')
                }
            })
            .then(response=>{
               dispatch(removeTicket(response.data))
              
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

export const setStatusTicket=(data)=>{
    return {type:'SET_STATUS_TICKET',
payload:data}
}


export const startSetStatusTicket=(status,id)=>{
    return (dispatch)=>{
        axios.put(`/tickets/${id}`,{"isResolved":status},{
            headers:{
                'x-auth':localStorage.getItem('token3')
            }
        }).then(response=>{
            
         dispatch(setStatusTicket(response.data))
       
        
        })
    }
}

export const filterTickets=(data)=>{
    return {type:'FILTER_TICKETS',
payload:data}
}

export const startFilterTickets=(priority)=>{
    return (dispatch)=>{
        axios.get('/tickets',{
            headers:{
                'x-auth':localStorage.getItem('token3')
            }
        })
        .then(response=>{
            
          dispatch(filterTickets(response.data.filter(item=>{
            return item.priority==priority})))      
           
        })
    }
}

export const searchByCode=(data)=>{
    return {
        type:'SEARCH_BY_CODE',
        payload:data
    }
}

export const startSearchByCode=(value)=>{
    return (dispatch)=>{
        axios.get('/tickets',{
            headers:{
                'x-auth':localStorage.getItem('token3')
            }
        })
        .then(response=>{
         dispatch(searchByCode(response.data.filter(item=>{
            // return (item.code.toLowerCase()).slice(0,value.length)==value.toLowerCase()
        return item.code.toLowerCase().includes(value.toLowerCase())
        })))   
            
        })
    }
}

export const addTicket=(data)=>{
    return {type:'ADD_TICKET',
payload:data}
}

export const startAddTicket=(formData)=>{
    return (dispatch)=>{
        axios.post('/tickets',formData,{
    headers:{
    'x-auth':localStorage.getItem('token3')
}})
.then(response=>{
    if(response.data._id){
        dispatch(addTicket(response.data))
    }
    else{
        Swal.fire({
            title: 'Oops...',
            text: 'form cannot be empty',
           
          })
    }

})
    }
}

export const singleTicket=(data)=>{
    return {type:'SET_SINGLE_TICKET',
payload:data}
}
export const resetSingleTicket=()=>{
    return {type:'RESET_SINGLE_TICKET'}
}
export const startSingleTicket=(id)=>{
    return (dispatch)=>{
        axios.get(`/tickets/${id}`,{
            headers:{
            'x-auth':localStorage.getItem('token3')
        }})
        .then(response=>{
            dispatch(resetSingleTicket())
            dispatch(singleTicket(response.data))
        })
    }
}

export const editTicket=(data)=>{
    return {type:'EDIT_TICKET',
payload:data}
}


export const startEditTicket=(id,formData)=>{
    return (dispatch)=>{
        axios.put(`/tickets/${id}`,formData,{
            headers:{
            'x-auth':localStorage.getItem('token3')
        }})
        .then(response=>{
            // console.log(response.data)
            if(response.data.name=='CastError'){

            }else{
            dispatch(editTicket(response.data))
            dispatch(resetSingleTicket())}
        })
        .catch(err=>{
            console.log(err)
        })
    }
}