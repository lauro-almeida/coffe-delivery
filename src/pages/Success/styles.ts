import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: 800;
    line-height: 1.3;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    line-height: 1.3;
  }
`

export const SuccessInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 2rem;

  section {
    background-image: linear-gradient(
      90deg,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
    padding: 0.8px 0.4px;
    border-radius: 6px 36px;
    height: 100%;

    & > div:first-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 32px;
      padding: 45px;
      background: ${(props) => props.theme.background};
      border-radius: 6px 36px;
      height: 100%;
    }
  }
`
