import axios from 'axios'

const api = axios.create({
    baseURL: 'https://plugins.capittalx.com/api/cryptosCurrency',
})

export default api