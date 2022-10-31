import styled from 'styled-components'

export const CartContainer = styled.div`
  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 44px;
  padding: 40px;
  margin-top: 15px;

  display: flex;
  flex-direction: column;
  width: 448px;

  h2 {
    margin-bottom: 2rem;
  }

  footer {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    div {
      display: flex;
      justify-content: space-between;
      font-family: 'Roboto', sans-serif;
      line-height: 1.3;

      p {
        font-size: 0.875rem;
        margin-bottom: 0.75rem;
      }
    }

    & div:last-child {
      span {
        font-weight: 700;
        font-size: 1.25rem;
      }
    }
  }
`

export const ConfirmationButton = styled.button`
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  line-height: 1.3;
  padding: 0.75rem;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellow};
  border: 0;
  border-radius: 6px;
  box-shadow: 0;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    cursor: not-allowed;
  }
`
