import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.1.35:4000'
})

export default api
