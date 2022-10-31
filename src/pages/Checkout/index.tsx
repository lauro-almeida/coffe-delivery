import { Bank, CreditCard, CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  ButtonsContainer,
  CheckoutContainer,
  FormContainer,
  PaymentMethodContainer,
} from './styles'
import { AdressForm } from './AdressForm'
import { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { ShoppingCart } from './ShoppingCart'
import { useForm, FormProvider } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'
import { Order } from '../../reducers/shoppingCart/reducer'

const newOrderFormValidationSchema = zod.object({
  zip: zod.string().min(8, 'Informe o cep'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número da residência'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe o nome de cidade'),
  state: zod.string().min(2, 'Informe a sigla do estado').max(2),
})

export type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const { shoppingCart, clearShoppingCart } = useContext(ShoppingCartContext)
  const [paymentMethod, setPaymentMethod] = useState('')

  const newAdressForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      zip: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
    },
  })

  const { handleSubmit, watch, reset } = newAdressForm

  const navigate = useNavigate()

  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:order-state-1.0.0',
    )
    if (storedStateAsJSON) {
      navigate('/success')
    }
  }, [navigate])

  function handlePaymentMethodSelection(method: string) {
    setPaymentMethod(method)
  }

  function handleCreateNewOrder(data: NewOrderFormData) {
    const order = {
      adress: data,
      products: shoppingCart,
      payment: paymentMethod,
    }
    createNewOrder(order)
    reset()
  }

  const zip = watch('zip')
  const street = watch('street')
  const number = watch('number')
  const neighborhood = watch('neighborhood')
  const city = watch('city')

  const isCartEmpty = shoppingCart.length === 0
  const isPaymentMethodSelected = paymentMethod !== ''

  const isOrderGoodToGo =
    zip !== '' &&
    street !== '' &&
    number !== '' &&
    neighborhood !== '' &&
    city !== '' &&
    !isCartEmpty &&
    isPaymentMethodSelected

  function createNewOrder(order: Order) {
    const stateJSON = JSON.stringify(order)

    localStorage.setItem('@coffee-delivery:order-state-1.0.0', stateJSON)

    clearShoppingCart()

    navigate('/success')
  }

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <form onSubmit={handleSubmit(handleCreateNewOrder)} id="adressForm">
          <FormContainer>
            <header>
              <div>
                <MapPinLine size={22} />
                <div>
                  <span>Endereço de Entrega</span>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </div>
            </header>
            <FormProvider {...newAdressForm}>
              <AdressForm />
            </FormProvider>
          </FormContainer>
        </form>

        <PaymentMethodContainer>
          <div>
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <ButtonsContainer>
            <div
              className={
                paymentMethod === 'cartão de crédito'
                  ? 'selected'
                  : 'notSelected'
              }
              onClick={(e) => handlePaymentMethodSelection('cartão de crédito')}
            >
              <CreditCard size={16} />
              <span>cartão de crédito</span>
            </div>

            <div
              className={
                paymentMethod === 'cartão de débito'
                  ? 'selected'
                  : 'notSelected'
              }
              onClick={(e) => handlePaymentMethodSelection('cartão de débito')}
            >
              <Bank size={16} />
              <span>cartão de débito</span>
            </div>

            <div
              className={
                paymentMethod === 'dinheiro' ? 'selected' : 'notSelected'
              }
              onClick={(e) => handlePaymentMethodSelection('dinheiro')}
            >
              <Bank size={16} />
              <span>dinheiro</span>
            </div>
          </ButtonsContainer>
        </PaymentMethodContainer>
      </div>
      <div>
        <ShoppingCart cart={shoppingCart} isOrderGoodToGo={isOrderGoodToGo} />
      </div>
    </CheckoutContainer>
  )
}
