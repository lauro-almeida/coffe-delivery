import { ReactNode } from 'react'
import { IconContainer, ProductValueDescriptionContainer } from './styles'

interface ProductValueDescriptionProps {
  children: ReactNode
  text: string
  bgColor: 'yellowDark' | 'yellow' | 'baseText' | 'purple'
}

export function ProductValueDescription({
  children,
  text,
  bgColor,
}: ProductValueDescriptionProps) {
  return (
    <ProductValueDescriptionContainer>
      <IconContainer bgColor={bgColor}>{children}</IconContainer>
      <span>{text}</span>
    </ProductValueDescriptionContainer>
  )
}
