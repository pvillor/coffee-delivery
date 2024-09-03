import styled from "styled-components";


export const CartCoffeeCardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > * {
    border-bottom: 1px solid ${props => props.theme['base-button']};
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
  }
`

export const CartCoffeeCardInfo = styled.div`
  display: flex;
  gap: 1.5rem;

  img {
    width: 4rem;
  }
`

export const CartCoffeeCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CartCoffeeCardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const CartCoffeeCardQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.531rem 0.5rem;

  background-color: ${props => props.theme['base-button']};
  border-radius: 0.375rem;

  svg {
    color: ${props => props.theme['purple']};
    cursor: pointer;
  }

  svg:hover {
    color: ${props => props.theme['purple-dark']};
  }
`

export const CartCoffeeCardRemoveButton = styled.button`
  color: ${(props) => props.theme['base-text']};
  background-color: ${props => props.theme['base-button']};
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  padding: 0.5rem;

  svg {
    color: ${(props) => props.theme['purple']};
  }

  &:hover {
    color: ${(props) => props.theme['base-subtitle']};
    background-color: ${props => props.theme['base-hover']};

    svg path:first-of-type {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const CartCoffeeCardPrice = styled.span`
  font-weight: bold;
  font-size: 1rem;

  color: ${props => props.theme['base-text']};
`