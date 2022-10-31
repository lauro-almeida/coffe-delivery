import styled from 'styled-components'

export const HeaderCointainer = styled.header`
  padding: 2rem 0;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  & > div:first-child a {
    box-shadow: none;
  }
`
export const CTAContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > div {
    padding: 10px 8px 10px 6px;
    display: flex;
    align-items: center;

    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme.purple};

    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 1.3;

    border-radius: 6px;
  }

  a {
    padding: 10px 8px;
    display: flex;

    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    border-radius: 6px;

    transition: ease 0.1s;

    &:hover {
      color: ${(props) => props.theme.yellow};
    }
  }
  /* 
  &::after {
    position: relative;
    left: calc(-0.75rem - 10px);
    top: -20px;
    display: flex;
    justify-content: center;
    align-items: center;
    content: '3';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
  } */
`
