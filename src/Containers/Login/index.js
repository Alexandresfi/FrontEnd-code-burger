import React from 'react'

import LoginImage from '../../assets/login-image.svg'
import LogoImage from '../../assets/logo.svg'
import {
  Container,
  ContainerItens,
  Content,
  Image,
  Logo,
  P,
  InputLogin,
  Label,
  ButtonLogin,
  LinkSignUp
} from './styles'

export function Login() {
  return (
    <Container>
      <Content>
        <Image src={LoginImage} alt="background" />
        <ContainerItens>
          <Logo src={LogoImage} alt="Logo" />

          <P>Login</P>

          <Label>Email</Label>
          <InputLogin type="text" placeholder="Digite sua e-mail" />

          <Label>Password</Label>
          <InputLogin type="password" placeholder="Digite sua senha" />

          <ButtonLogin>Sign In</ButtonLogin>

          <LinkSignUp>
            Não possui conta? <span>Signup</span>
          </LinkSignUp>
        </ContainerItens>
      </Content>
    </Container>
  )
}
