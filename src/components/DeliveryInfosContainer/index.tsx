import { ReactNode } from 'react'
import { Container } from './styles'

interface DeliveryInfosContainerProps {
  children: ReactNode
  text: string
  description: string
  bgColor: 'yellowDark' | 'yellow' | 'purple'
  address?: boolean
}

export function DeliveryInfosContainer({
  children,
  text,
  description,
  bgColor,
  address = false,
}: DeliveryInfosContainerProps) {
  return (
    <Container bgColor={bgColor}>
      <div>{children}</div>
      {address ? (
        <div>
          <span>
            Entrega em <strong>{text}</strong>
          </span>
          <span>{description}</span>
        </div>
      ) : (
        <div>
          <span>{text}</span>
          <span>
            <strong>{description}</strong>
          </span>
        </div>
      )}
    </Container>
  )
}
