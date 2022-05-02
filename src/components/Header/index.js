import React from 'react'
import { useHistory } from 'react-router-dom'

import Cart from '../../assets/header/cart.png'
import Person from '../../assets/header/person.png'
import { UseUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  PageLink,
  ContainerText,
  Line
} from './styled'

export function Header() {
  const { logout } = UseUser()
  const {
    push,
    location: { pathname }
  } = useHistory()

  const logoutUser = () => {
    logout()
    push('/login')
  }
  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink onClick={() => push('/carrinho')}>
          <img src={Cart} alt="logo-carrrinho" />
        </PageLink>
        <Line />
        <PageLink>
          <img src={Person} alt="logo-pessoa" />
        </PageLink>

        <ContainerText>
          <p>Olá, Alexandre Nascimento</p>
          <PageLink>
            <p onClick={logoutUser}>Sair</p>
          </PageLink>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
