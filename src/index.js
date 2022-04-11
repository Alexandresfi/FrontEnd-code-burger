import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

import { Login } from './Containers/Login'
import { Register } from './Containers/Register'
import GlobalStyle from './styles/globalStyles'

ReactDOM.render(
  <>
    <Register />
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyle />
  </>,
  document.getElementById('root')
)
