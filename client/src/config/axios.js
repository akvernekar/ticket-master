import Axios from 'axios'

const axios=Axios.create({
    baseURL:'https://ticket-master-akshay123.herokuapp.com/api'
})

// const axios=Axios.create({
//     baseURL:'http://localhost:3026'
// })

export default axios


