import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

import { UserProvider } from './hooks/UserContext'
import { Routes } from './routes/routes'
import GlobalStyle from './styles/globalStyles'

ReactDOM.render(
  <>
    <UserProvider>
      <Routes />
    </UserProvider>
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyle />
  </>,
  document.getElementById('root')
)
