import styled from 'styled-components'

export const ProductOnCartContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0.625rem 0.25rem;
  margin-bottom: 2rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  & > div {
    display: flex;

    img {
      width: 4rem;
      height: 4rem;
    }

    h2 {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      line-height: 1.3;
      font-weight: 400;

      margin-bottom: 0.5rem;
    }

    & > div:last-child {
      margin-left: 1.25rem;
    }
  }

  & > div:last-child {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }
`
export const ProductOnCartButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;

  & div {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    padding: 6.5px 8px;

    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};

    svg {
      color: ${(props) => props.theme.purple};
    }

    &:first-child svg {
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
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }
`
