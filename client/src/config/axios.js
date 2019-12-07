import Axios from 'axios'

const axios=Axios.create({
    baseURL:'https://ticket-master-akshay123.herokuapp.com/api'
})

export default axios