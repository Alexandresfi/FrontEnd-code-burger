import React from 'react'

import LogoutIcon from '@mui/icons-material/Logout'

import paths from '../../constantes/paths'
import { UseUser } from '../../hooks/UserContext'
import listLink from './menu-list'
import { Container, ItemContainer, ListLink } from './styled'

export function SideMenuAdmin() {
  const { logout } = UseUser()
  return (
    <Container>
      <hr />
      {listLink.map(item => (
        <ItemContainer key={item.id} isActive>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <hr />
      <ItemContainer style={{ position: 'absolute', bottom: '30px' }}>
        <LogoutIcon style={{ color: '#FFFF' }} />
        <ListLink to={paths.login} onClick={logout}>
          Sair
        </ListLink>
      </ItemContainer>
    </Container>
  )
}
