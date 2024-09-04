import styled from "styled-components";

interface InputContainerProps {
  populateColumns: number
}

export const InputContainer = styled.div<InputContainerProps>`
  grid-column: span ${props => props.populateColumns} / span ${props => props.populateColumns};
  background-color: ${props => props.theme['base-input']};
  border: 1px solid ${props => props.theme['base-button']};
  border-radius: 4px;
  display: flex;
  align-items: center;

  input {
    padding: 0.75rem;
    flex: 1;
    background: transparent;
    border: transparent;

    color: ${props => props.theme['base-text']};
  }

  input::placeholder {
    color: ${props => props.theme['base-label']};
  }

  span {
    font-size: 0.75rem;
    font-style: italic;
    
    color: ${props => props.theme['base-label']};
    padding-right: 0.75rem;
  }
  
  &:focus-within {
    box-shadow: 0 0 0 1px ${props => props.theme['yellow-dark']};
  }
`