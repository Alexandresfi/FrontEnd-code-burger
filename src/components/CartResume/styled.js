import styled from 'styled-components'

export const Container = styled.div`
  background: white;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ContainerItems = styled.div`
  display: grid;
  grid-template-areas:
    'title tile'
    'items items-price'
    'delivery-tax delivery-tax-price';

  .title {
    grid-area: title;
    margin-bottom: 20px;
  }

  grid-gap: 10px 50px;

  .items {
    grid-area: items;
  }

  .items-price {
    grid-area: items-price;
  }

  .delivery-tax {
    grid-area: delivery-tax;
  }

  .delivery-tax-price {
    grid-area: delivery-tax-price;
  }
`

export const ContainerItemsBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 24px;
  margin-top: 50px;
`
