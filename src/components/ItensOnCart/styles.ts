import styled from 'styled-components'

interface ItensOnCartContainerProps {
  displayVisibility: string
}

export const ItensOnCartContainer = styled.div<ItensOnCartContainerProps>`
  position: absolute;
  left: calc(100% - 10rem - 10px);
  top: calc(2rem - 10px);
  display: ${(props) => props.displayVisibility};
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
`
