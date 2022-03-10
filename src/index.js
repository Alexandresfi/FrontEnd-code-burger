import React from 'react'
import ReactDOM from 'react-dom'

import { Login } from './Containers/Login'
import GlobalStyle from './styles/globalStyles'

ReactDOM.render(
  <>
    <Login />
    <GlobalStyle />
  </>,
  document.getElementById('root')
)
