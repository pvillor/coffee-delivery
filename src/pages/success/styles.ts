import styled from "styled-components";

export const SuccessContainer = styled.main`
  padding: 5rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const SuccessHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: bolder;
    color: ${props => props.theme['yellow-dark']};
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${props => props.theme['text-subtitle']};
  }
`

export const SuccessContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SuccessItemIcon = styled.span`
    border-radius: 100%;
    width: 2rem;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    svg { 
      color: ${props => props.theme['background']};
    }
`

export const SuccessPinIcon = styled(SuccessItemIcon)`
    background-color: ${props => props.theme['purple']};
`

export const SuccessTimerIcon = styled(SuccessItemIcon)`
background-color: ${props => props.theme['yellow']};
    
    svg circle {
      fill: ${(props) => props.theme['background']}
    }
    
    svg line:first-of-type {
      color: ${(props) => props.theme['yellow']}
    }
`

export const SuccessCurrencyDollarIcon = styled(SuccessItemIcon)`
    background-color: ${props => props.theme['yellow-dark']};
`

export const SuccessOrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  border: 1px solid transparent;
  border-radius: 0.5rem 2.5rem;
  
  background:
    linear-gradient(white, white) padding-box, /* Cor de fundo */
    linear-gradient(90deg, ${props => props.theme['yellow']} 0%, ${props => props.theme['purple']} 100%) border-box; 
`

export const SuccessOrderDetailsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding-right: 5.75rem;

  color: ${props => props.theme['base-text']};
`