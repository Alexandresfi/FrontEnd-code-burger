import ReactSelect from 'react-select'

import styled from 'styled-components'

export const Container = styled.div`
  background: #efefef;
  min-height: 100vh;
  padding: 30px;
`

export const ProductsImg = styled.img`
  width: 60px;
  border-radius: 5px;
`

export const ReactSelectStyle = styled(ReactSelect)`
  width: 250px;
  .css-1s2u09g-control {
    cursor: pointer;
  }
`

export const Menu = styled.div`
  display: flex;
  gap: 20px;
  /* justify-content: center; */
  margin: 20px 0;
`

export const LinkMenu = styled.a`
  color: #323d5d;
  cursor: pointer;
  border-bottom: ${props =>
    props.isActiveStatus ? '2px solid #9758A6' : 'none'};
  font-weight: ${props => (props.isActiveStatus ? '700' : '400')};
  padding-bottom: 5px;
`
