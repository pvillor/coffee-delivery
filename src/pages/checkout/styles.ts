import styled from "styled-components";

export const CheckoutContainer = styled.div`
  max-width: 70rem;
  margin: 1.5rem auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 1fr 448px;
  align-items: flex-start;

  gap: 2rem;

  main, aside {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  h2 {
    color: ${props => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-size: 18px;
  }
`

export const OrderSummary = styled.div`
  padding: 2.5rem;

  background-color: ${props => props.theme['base-card']};
  
  border-radius: 0.5rem 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-top-width: 1px;
`

export const ConfirmOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const OrderPriceSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  div p {
    color: ${props => props.theme['base-text']};

    font-size: 14px;
  }

  div span {
    color: ${props => props.theme['base-text']};

    font-size: 16px;
  }

  div:last-of-type p, div:last-of-type span {
    color: ${props => props.theme['base-subtitle']};
    font-weight: bold;
    font-size: 20px;
  }
`

export const ConfirmOrderButton = styled.button`
    color: ${props => props.theme['white']};
    background-color: ${props => props.theme['yellow']};
    
    border-radius: 6px;
    padding: 0.75rem 0;

    &:not(:disabled):hover {
      background-color: ${props => props.theme['yellow-dark']};
    }

    &:disabled {
      opacity: 0.7;
      cursor: no-drop;
    }
`

export const ConsumerInfoContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const ConsumerInfo = styled.div`
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: ${props => props.theme['base-card']};
  border-radius: 6px;

  h3 {
    color: ${props => props.theme['base-subtitle']};
    font-size: 1rem;
  }

  p {
    color: ${props => props.theme['base-text']};
    font-size: 14px;
  }
`

export const ConsumerInfoAddress = styled(ConsumerInfo)`
  svg {
    color: ${props => props.theme['yellow-dark']}
  }
`

export const ConsumerInfoPayment = styled(ConsumerInfo)`
  svg {
    color: ${props => props.theme['purple']}
  }

  & > span {
    color: rgb(239 68 68);
    font-size: 1rem;
  }
`

export const ConsumerInfoHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`

export const ConsumerInfoAddressBody = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 1rem 0.75rem;
`

export const ConsumerInfoPaymentBody = styled.div`
  display: flex;
  justify-content: space-between;
`