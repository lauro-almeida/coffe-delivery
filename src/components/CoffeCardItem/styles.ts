import styled from 'styled-components'

export const CoffeCard = styled.div`
  width: 256px;
  height: 310px;

  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  text-align: center;

  background: ${(props) => props.theme['base-card']};

  img {
    width: 120px;
    height: 120px;

    transform: translateY(-20px);
  }

  h3 {
    margin-top: 16px;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    margin-top: 8px;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    font-size: 0.875rem;

    padding: 0 20px;

    color: ${(props) => props.theme['base-label']};
  }

  header div {
    display: flex;
    justify-content: center;
    gap: 0.25rem;
  }

  header div span {
    margin-top: -12px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 1.3;
    text-transform: uppercase;

    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
  }
`

export const FooterContainer = styled.footer`
  margin-top: 30px;

  padding: 0 24px;

  display: flex;
  align-items: baseline;
  justify-content: space-between;
`

export const PriceContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.3;
  font-size: 0.875rem;

  span {
    padding-left: 5px;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 31.2px;
  }
`
export const CTAContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;

  & div:first-child {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    padding: 8.5px 8px;
    width: 72px;

    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};

    svg {
      color: ${(props) => props.theme.purple};
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme['purple-dark']};
      }
    }

    span {
      font-family: 'Roboto', sans-serif;
    }
  }

  & div:last-child {
    display: flex;
    padding: 8.5px 8px;

    border-radius: 6px;
    cursor: pointer;

    color: ${(props) => props.theme['base-card']};
    background: ${(props) => props.theme['purple-dark']};

    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`
