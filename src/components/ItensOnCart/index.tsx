import { ItensOnCartContainer } from './styles'

interface ItensOnCartProps {
  value: number
}

export function ItensOnCart({ value }: ItensOnCartProps) {
  const displayValue = value > 0 ? 'flex' : 'none'
  return (
    <ItensOnCartContainer displayVisibility={displayValue}>
      {value}
    </ItensOnCartContainer>
  )
}
