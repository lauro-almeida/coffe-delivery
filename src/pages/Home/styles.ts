import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 5.875rem auto;

  section {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 3.5rem;

    justify-items: center;

    & h1 {
      max-width: 90%;
      font-size: 3rem;
      line-height: 1.3;
      font-weight: 800;
      color: ${(props) => props.theme['base-title']};
    }

    & p {
      margin-top: 1rem;
      margin-bottom: 4.125rem;
      max-width: 80%;
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      line-height: 26px;
    }
  }
`

export const FeaturesContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`
export const MainContainer = styled.main`
  margin-top: 6.75rem;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};

    margin-bottom: calc(2.125rem + 20px);
  }
`

export const CoffeCardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: calc(2.5rem + 20px) 2rem;
`
