import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  margin-bottom: 15rem;
`

export const FormContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;

  width: 640px;

  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  font-family: 'Roboto', sans-serif;
  line-height: 1.3;


  header > div {
    display: flex;
    margin-bottom: 2rem;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }

    div {
    margin-left: 8px;
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      margin-top: 2px;
      font-size: 0.875rem;
    }
  }
`

export const PaymentMethodContainer = styled.div`
  margin-top: 12px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['base-card']};

  input[type="checkbox"] {
      appearance: none;
    }

  svg {
  color: ${(props) => props.theme.purple};
  }

  & > div:first-child {
    display: flex;

    div {
    margin-left: 8px;
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      margin-top: 2px;
      font-size: 0.875rem;
    }

`

export const ButtonsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;

  & .selected {
    box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }

  div {
    display: flex;
    align-items: center;
    width: 33%;
    padding: 16px;
    border-radius: 6px;
    text-transform: uppercase;
    background: ${(props) => props.theme['base-button']};
    cursor: pointer;

    span {
      margin-left: 12px;
      font-family: 'Roboto', sans-serif;
      font-size: 0.75rem;
      line-height: 1.6;
    }

    &:not(.selected):hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }
`
