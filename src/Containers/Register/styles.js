import styled from 'styled-components'

import BackgroudImage from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${BackgroudImage}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  color: white;
  display: flex;
`

export const Image = styled.img``

export const ContainerItens = styled.div`
  background: #373737;
  box-shadow: 0px 4px 15px rgba(74, 144, 226, 0.24);
  border-radius: 0 10px 10px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 1.56rem 4.68rem; */

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Logo = styled.img`
  margin: 3.5rem auto 0 auto;
`

export const H1 = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-top: 0.625rem;
  text-align: center;
`

export const Label = styled.label`
  display: block;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  margin: ${props =>
    props.error ? '0.75rem 0 5px 4.5rem' : '1.75rem 0 5px 4.5rem'};
`

export const InputRegister = styled.input`
  width: 24.46rem;
  height: 2.4rem;
  margin: 0 4.5rem 0 4.5rem;
  padding: 2px 6px;

  background: white;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #cc1717' : 'none')};
`

export const LinkSignUp = styled.p`
  line-height: 16px;
  margin-left: 4.5rem;
  a {
    text-decoration: underline;
    color: white;
  }
`

export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: #cc1717;
  margin: 0 4.5rem;
`
