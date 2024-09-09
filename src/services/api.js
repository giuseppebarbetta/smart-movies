import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '272261cd78623bac32b0f795ffdb1d66',
    language: 'pt-BR',
    page: 1
  }
})

export default api
