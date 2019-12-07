import Axios from 'axios'

const axios=Axios.create({
    baseURL:'https://guarded-inlet-85085.herokuapp.com'
})

export default axios