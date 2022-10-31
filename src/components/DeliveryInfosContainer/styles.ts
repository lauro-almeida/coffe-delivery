import styled from 'styled-components'

const THEME_COLOR = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
  background: 'background',
} as const

interface ContainerProps {
  bgColor: keyof typeof THEME_COLOR
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  width: 528px;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    padding: 8px;
    color: ${(props) => props.theme[THEME_COLOR.background]};
    background: ${(props) => props.theme[THEME_COLOR[props.bgColor]]};
  }

  div:last-child {
    display: flex;
    flex-direction: column;

    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
    margin-left: 0.75rem;
  }
`
