import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 26px 40px;
  height: 72px;
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 0 25px;

  margin-left: 200px;
`

export const ContainerRight = styled.div`
  display: flex;
  gap: 0 25px;
  align-items: center;
`

export const PageLink = styled.a`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: ${props => (props.isActive ? 'bold' : '400')};
  font-size: 16px;
  line-height: 19px;

  color: ${props => (props.isActive ? '#9758a6' : '#555555')};

  cursor: pointer;
`

export const ContainerText = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;

  color: #555555;
  p:last-child {
    font-weight: 700;
    color: #9758a6;
    cursor: pointer;
    text-decoration: none;
  }
`
export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #bababa;
`
