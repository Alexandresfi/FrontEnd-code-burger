import axios from 'axios'

export const apiCodeBurgue = axios.create({
  baseURL: 'http://localhost:3001'
})
