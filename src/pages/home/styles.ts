import styled from "styled-components";
import homeBackground from '../../assets/home-background.png'

export const HomeContainer = styled.div`
  main {
    padding: 5.75rem 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.5rem;
    
    line-height: 130%;

    background-image: url(${homeBackground});
  }
`

export const HomeIntro = styled.div`
  font-family: 'Baloo 2', sans-serif;

  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4.125rem;

  h1 {
    color: ${props => props.theme['base-title']};
    font-weight: bolder;
    font-size: 3rem;
  }

  h2 {
    color: ${props => props.theme['base-subtitle']};
    font-weight: normal;
  }
`
export const HomeTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const HomeIntroItems = styled.div`
  display: flex;
  gap: 2.5rem;
`

export const HomeIntroItemsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const HomeIntroItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: 1rem;
`

export const HomeItemIcon = styled.span`
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

export const HomeCartIcon = styled(HomeItemIcon)`
    background-color: ${props => props.theme['yellow-dark']};

    svg circle, path:last-of-type {
      fill: ${(props) => props.theme['background']}
    }
`

export const HomePackageIcon = styled(HomeItemIcon)`
    background-color: ${props => props.theme['base-text']};
`

export const HomeTimerIcon = styled(HomeItemIcon)`
    background-color: ${props => props.theme['yellow']};
    
    svg circle {
      fill: ${(props) => props.theme['background']}
    }
    
    svg line:first-of-type {
      color: ${(props) => props.theme['yellow']}
    }
`

export const HomeCoffeeIcon = styled(HomeItemIcon)`
    background-color: ${props => props.theme['purple']};

    path:first-of-type {
      fill: ${(props) => props.theme['background']}
    }
`

export const CoffeeListContainer = styled.div`
    padding: 2rem 10rem;

    display: flex;
    flex-direction: column;
    gap: 3.375rem;
`

export const CoffeeList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem 2.5rem;
`