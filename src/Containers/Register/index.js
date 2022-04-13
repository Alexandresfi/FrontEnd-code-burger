import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import LogoImage from '../../assets/logo.svg'
import RegisterImage from '../../assets/register-image.svg'
import Button from '../../components/Button'
import { apiCodeBurgue } from '../../services/api'
import {
  Container,
  ContainerItens,
  Content,
  Image,
  Logo,
  H1,
  InputRegister,
  Label,
  LinkSignUp,
  ErrorMessage
} from './styles'

export function Register() {
  const schema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: yup
      .string()
      .required('A senha é necessário')
      .min(6, 'a senha precisa ter pelo menos 6 digitos'),
    confirmPassword: yup
      .string()
      .required('A senha é necessário')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais') // comparando os campos
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })
  // conexão com o back-end
  const onSubmit = async clientData => {
    try {
      const { status } = await apiCodeBurgue.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )
      if (status === 201 || status === 200) {
        toast.success('Parabéns, seu cadastro deu certo 😁🥳')
      } else if (status === 409) {
        toast.error(
          'Eita, eita, este E-mail já está cadastrado, vá para login, para continuar'
        )
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente.')
    }
  }

  return (
    <Container>
      <Content>
        <Image src={RegisterImage} alt="background" />
        <ContainerItens>
          <Logo src={LogoImage} alt="Logo" />

          <H1>Cadastre-se</H1>

          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Label error={errors.name?.message}>Nome</Label>
            <InputRegister
              error={errors.name?.message}
              type="text"
              {...register('name')}
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>

            <Label error={errors.email?.message}>Email</Label>
            <InputRegister
              error={errors.email?.message}
              type="email"
              {...register('email')}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Label error={errors.password?.message}>Senha</Label>
            <InputRegister
              error={errors.password?.message}
              type="password"
              {...register('password')}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Label error={errors.confirmPassword?.message}>
              Confirma Senha
            </Label>
            <InputRegister
              error={errors.confirmPassword?.message}
              type="password"
              {...register('confirmPassword')}
            />
            <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

            <Button type="submit" style={{ margin: '1.5625rem 4.5rem' }}>
              Sign up
            </Button>
          </form>

          <LinkSignUp>
            Já possui conta? <Link to="/">Sign In</Link>
          </LinkSignUp>
        </ContainerItens>
      </Content>
    </Container>
  )
}
