import axios from 'axios'

export const apiCodeBurgue = axios.create({
  baseURL: 'http://localhost:3001'
})

apiCodeBurgue.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburger:userData')
  const token = userData && JSON.parse(userData).token // isto serve para não permitir que quando sairmos da aplicação a aplicação não quebre
  config.headers.authorization = `Bearer ${token}`
  return config
})
