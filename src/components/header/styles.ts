import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
`

export const HeaderActions = styled.div`
  display: flex;
  gap: 0.75rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    padding: 0.5rem;
  }
`

export const LocationButton = styled.button`
  color: ${(props) => props.theme['purple-dark']};
  background-color: ${(props) => props.theme['purple-light']};
`

export const CartButton = styled.button`
  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};

  position: relative;

  svg circle, path:last-of-type {
    fill: ${(props) => props.theme['yellow-dark']}
  }

  span {
    font-weight: bold;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['yellow-dark']};
    border-radius: 50%;
    width: 20px;
    height: 20px;

    position: absolute;
    top: 0px;
    left: 0px;
    transform: translate(130%, -40%);
  }
`