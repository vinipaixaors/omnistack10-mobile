import axios from 'axios'

const api = axios.create({
  baseURL: 'http://10.128.21.33:3333', //IP da aplicação Expo + Porta do Backend

})

export default api