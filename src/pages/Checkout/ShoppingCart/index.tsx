import { ProductOnCart } from '../../../components/ProductOnCart'
import { ProductOnCart as ProductOnCartType } from '../../../contexts/ShoppingCartContext'
import { CartContainer, ConfirmationButton } from './styles'

interface ShoppingCartProps {
  cart: ProductOnCartType[]
  isOrderGoodToGo: boolean
}

export function ShoppingCart({ cart, isOrderGoodToGo }: ShoppingCartProps) {
  const isSubmitDisabled = !isOrderGoodToGo

  const priceOfProducts = cart.reduce((acc, product) => {
    const pricePerProduct = product.quantity * Number(product.price)
    return acc + pricePerProduct
  }, 0)

  const deliveryTax = 3.5
  const totalPrice = priceOfProducts + deliveryTax

  return (
    <>
      <h2>Cafés selecionados</h2>

      <CartContainer>
        {cart.length > 0 &&
          cart.map((product) => {
            return <ProductOnCart key={product.id} product={product} />
          })}
        {cart.length === 0 && (
          <h2>Seu carrinho está vazio. Aceita um cafézinho? :)</h2>
        )}
        <footer>
          <div>
            <p>Total de itens</p>
            <span>R$ {priceOfProducts.toFixed(2).replace('.', ',')}</span>
          </div>
          <div>
            <p>Entrega</p>
            <span>R$ {deliveryTax.toFixed(2).replace('.', ',')}</span>
          </div>
          <div>
            <span>Total</span>
            <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
          </div>
        </footer>
        <ConfirmationButton
          disabled={isSubmitDisabled}
          type="submit"
          form="adressForm"
        >
          Confirmar pedido
        </ConfirmationButton>
      </CartContainer>
    </>
  )
}
