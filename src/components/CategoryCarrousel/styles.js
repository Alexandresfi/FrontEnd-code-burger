import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Container = styled.div`
  background: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background: #9758a6;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background: #bebebf;
    color: #efefef;
  }
`

export const CategoryImg = styled.img``

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 66px;
  border-radius: 8px;
  margin: 16px 0 61px 0;
  background: #9758a6;
  border: none;
  text-decoration: none;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  color: white;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
`
