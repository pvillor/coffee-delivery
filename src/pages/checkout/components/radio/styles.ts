import styled from 'styled-components'

export const Container = styled.label`
  padding: 1rem;
  
  display: flex;
  align-items: center;
  gap: 0.75rem;

  border-radius: 6px;
  border: 1px solid transparent;

  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;
  font-size: 14px;

  transition: all 0.2s;

  &:hover {
    color: ${props => props.theme['base-subtitle']};
    background-color: ${(props) => props.theme['base-hover']};
    cursor: pointer;
  }

  &[data-state='true'] {
    background-color: ${(props) => props.theme['purple-light']};
    border-color: ${(props) => props.theme.purple};
  }

  input {
    display: none;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`