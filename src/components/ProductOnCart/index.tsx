import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { Product } from '../../products'
import { ProductOnCartButtonsContainer, ProductOnCartContainer } from './styles'

interface Coffe extends Product {
  quantity: number
}

interface ProductOnCartProps {
  product: Coffe
}

export function ProductOnCart({ product }: ProductOnCartProps) {
  const { photo, price, quantity, title } = product

  const {
    removeProductFromCart,
    increaseQuantityOfProductInCartByOne,
    decreaseQuantityOfProductInCartByOne,
  } = useContext(ShoppingCartContext)
  const [coffesOnCart, setCoffesOnCart] = useState(quantity)

  function handleCoffeAddition(coffe: Coffe) {
    setCoffesOnCart((state) => {
      return state + 1
    })
    increaseQuantityOfProductInCartByOne(coffe)
  }

  function handleCoffeDecrease(coffe: Coffe) {
    if (coffesOnCart > 1) {
      decreaseQuantityOfProductInCartByOne(coffe)
    }
    setCoffesOnCart((state) => {
      if (state > 1) {
        return state - 1
      } else {
        return 1
      }
    })
  }

  function handleProductRemove(coffe: Coffe) {
    removeProductFromCart(coffe)
  }

  return (
    <ProductOnCartContainer>
      <div>
        <div>
          <img src={photo} alt="" />
        </div>

        <div>
          <h2>{title}</h2>
          <ProductOnCartButtonsContainer>
            <div>
              <Minus
                onClick={() => handleCoffeDecrease(product)}
                size={20}
                weight="bold"
              />
              <span>{coffesOnCart}</span>
              <Plus
                onClick={() => handleCoffeAddition(product)}
                size={20}
                weight="bold"
              />
            </div>
            <div onClick={() => handleProductRemove(product)}>
              <Trash size={20} weight="bold" />
              <span>Remover</span>
            </div>
          </ProductOnCartButtonsContainer>
        </div>
      </div>
      <div>
        <span>R$ {price.replace('.', ',')}</span>
      </div>
    </ProductOnCartContainer>
  )
}
