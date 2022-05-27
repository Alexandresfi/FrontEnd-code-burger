import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import LoginImage from '../../assets/login-image.svg'
import LogoImage from '../../assets/logo.svg'
import Button from '../../components/Button'
import paths from '../../constantes/paths'
import { UseUser } from '../../hooks/UserContext'
import { apiCodeBurgue } from '../../services/api'
import {
  Container,
  ContainerItens,
  Content,
  Image,
  Logo,
  H1,
  InputLogin,
  Label,
  LinkSignUp,
  ErrorMessage
} from './styles'

export function Login() {
  const history = useHistory()
  const { putUserData } = UseUser()
  const schema = yup.object().shape({
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
  // conexão com o back-end
  const onSubmit = async clientData => {
    try {
      const { status, data } = await apiCodeBurgue.post(
        'sessions',
        {
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )
      if (status === 201 || status === 200) {
        toast.success('Login realizado com sucesso 🤩')

        putUserData(data)

        setTimeout(() => {
          data.admin ? history.push('/pedidos') : history.push('/')
        }, 1000)
      } else if (status === 401) {
        toast.error('Verifique seu e-mail e senha 🤯')
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Falha no sistema! Tente novamente.')
    }
  }

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

            <Button
              type="submit"
              style={{ margin: '2.5rem 4.5rem 1.715rem 4.5rem' }}
            >
              Sign In
            </Button>
          </form>

          <LinkSignUp>
            Não possui conta? <Link to={paths.register}>Sign up</Link>
          </LinkSignUp>
        </ContainerItens>
      </Content>
    </Container>
  )
}
