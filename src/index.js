import React from 'react'
import ReactDOM from 'react-dom'

import { Login } from './Containers/Login'
import { Register } from './Containers/Register'
import GlobalStyle from './styles/globalStyles'

ReactDOM.render(
  <>
    <Register />
    <GlobalStyle />
  </>,
  document.getElementById('root')
)
