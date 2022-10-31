import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import {
  CoffeCard,
  CTAContainer,
  FooterContainer,
  PriceContainer,
} from './styles'

interface Coffe {
  id: number
  photo: string
  labels: string[]
  title: string
  text: string
  price: string
}

interface CoffeCardItemProps {
  coffe: Coffe
}

export function CoffeCardItem({ coffe }: CoffeCardItemProps) {
  const { addProductOnCart } = useContext(ShoppingCartContext)
  const [numberOfCoffes, setNumberOfCoffes] = useState(1)

  function handleCoffeAddition() {
    setNumberOfCoffes((state) => {
      return state + 1
    })
  }

  function handleCoffeDecrease() {
    setNumberOfCoffes((state) => {
      if (state > 1) {
        return state - 1
      } else {
        return 1
      }
    })
  }

  function handleAddProductOnShoppingCart(coffe: Coffe, quantity: number) {
    const coffeOnCart = { ...coffe, quantity }
    addProductOnCart(coffeOnCart)
    setNumberOfCoffes((state) => {
      return 1
    })
  }

  return (
    <CoffeCard key={coffe.id}>
      <header>
        <img src={coffe.photo} alt="" />
        <div>
          {coffe.labels.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>
      </header>
      <h3>{coffe.title}</h3>
      <p>{coffe.text}</p>
      <FooterContainer>
        <PriceContainer>
          R$<span>{coffe.price.replace('.', ',')}</span>
        </PriceContainer>
        <CTAContainer>
          <div>
            <Minus onClick={handleCoffeDecrease} size={20} weight="bold" />
            <span>{numberOfCoffes}</span>
            <Plus onClick={handleCoffeAddition} size={20} weight="bold" />
          </div>
          <div
            onClick={() =>
              handleAddProductOnShoppingCart(coffe, numberOfCoffes)
            }
          >
            <ShoppingCart size={20} weight="fill" />
          </div>
        </CTAContainer>
      </FooterContainer>
    </CoffeCard>
  )
}
