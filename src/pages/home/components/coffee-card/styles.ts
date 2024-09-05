import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  padding: 0 1.25rem 1.25rem;

  background-color: ${props => props.theme['base-card']};
  
  border-radius: 0.5rem 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CoffeeCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  img {
    width: 7.5rem;
    margin: -1.25rem 0 0;
  }
`

export const CoffeeCardCategories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  span {
    color: ${props => props.theme['yellow-dark']};
    background-color: ${props => props.theme['yellow-light']};
    border-radius: 6.25rem;

    font-size: 0.625rem;
    font-weight: bold;

    text-transform: uppercase;

    padding: 0.25rem 0.5rem;
  }
`

export const CoffeeCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  text-align: center;
  font-family: 'Baloo 2', sans-serif;
  
  h2 {
    color: ${props => props.theme['base-subtitle']};

    font-size: 1.25rem;
    font-weight: bold;
  }

  p {
    color: ${props => props.theme['base-label']};

    font-size: 0.875rem;
  }
`

export const CoffeeCardFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const CoffeeCardPrice = styled.p`
  color: ${props => props.theme['base-text']};

  span {
    font-weight: bolder;
    font-family: 'Baloo 2';
    font-size: 1.5rem;
  }
`

export const CoffeeCardActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const CoffeeCardQuantity = styled.div`
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

export const CoffeeCardCartButton = styled.button`
  color: ${(props) => props.theme['base-card']};
  background-color: ${props => props.theme['purple-dark']};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  padding: 0.5rem;

  svg circle, path:last-of-type {
    fill: ${(props) => props.theme['base-card']}
  }

  &:hover {
    background-color: ${props => props.theme['purple']};
  }
`