import styled from 'styled-components'

export const ProductValueDescriptionContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1.25rem;
  span {
    font-family: 'Roboto', sans-serif;
  }
`
const THEME_COLOR = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  baseText: 'base-text',
  purple: 'purple',
} as const

interface IconContainerProps {
  bgColor: keyof typeof THEME_COLOR
}

export const IconContainer = styled.div<IconContainerProps>`
  box-sizing: content-box;
  padding: 0.5rem;
  margin-right: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  border-radius: 50%;

  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme[THEME_COLOR[props.bgColor]]};
`
