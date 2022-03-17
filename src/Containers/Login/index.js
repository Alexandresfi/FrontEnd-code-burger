import React from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import LoginImage from '../../assets/login-image.svg'
import LogoImage from '../../assets/logo.svg'
import {
  Container,
  ContainerItens,
  Content,
  Image,
  Logo,
  H1,
  InputLogin,
  Label,
  ButtonLogin,
  LinkSignUp,
  ErrorMessage
} from './styles'

export function Login() {
  const schema = yup.object({
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: yup
      .string()
      .required('A senha é necessário')
      .min(6, 'a senha precisa ter pelo menos 6 digitos')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = data => console.log(data)

  return (
    <Container>
      <Content>
        <Image src={LoginImage} alt="background" />
        <ContainerItens>
          <Logo src={LogoImage} alt="Logo" />

          <H1>Login</H1>

          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Label>Email</Label>
            <InputLogin
              error={errors.email?.message}
              type="email"
              placeholder="Digite sua e-mail"
              {...register('email')}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Label>Password</Label>
            <InputLogin
              error={errors.password?.message}
              type="password"
              placeholder="Digite sua senha"
              {...register('password')}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <ButtonLogin type="submit">Sign In</ButtonLogin>
          </form>

          <LinkSignUp>
            Não possui conta? <a href="#">Sign up</a>
          </LinkSignUp>
        </ContainerItens>
      </Content>
    </Container>
  )
}
