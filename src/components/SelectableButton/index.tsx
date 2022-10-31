import { ReactNode } from 'react'

interface SelectableButtonProps {
  children: ReactNode
  text: string
}

export function SelectableButton({ children, text }: SelectableButtonProps) {
  return (
    <div>
      {children}
      <span>{text}</span>
    </div>
  )
}
