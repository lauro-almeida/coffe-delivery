import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import successIllustration from '../../assets/success-illustration.png'

import { DeliveryInfosContainer } from '../../components/DeliveryInfosContainer'
import { Order } from '../../reducers/shoppingCart/reducer'

import { SuccessContainer, SuccessInfoContainer } from './styles'

export function Success() {
  const storedStateAsJSON = localStorage.getItem(
    '@coffee-delivery:order-state-1.0.0',
  )

  const order: Order = storedStateAsJSON ? JSON.parse(storedStateAsJSON) : null
  const { adress, payment } = order

  const formatedPayment = payment.charAt(0).toUpperCase() + payment.slice(1)
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <SuccessInfoContainer>
        <section>
          <div>
            <DeliveryInfosContainer
              bgColor="purple"
              text={`${adress.street}, ${adress.number}`}
              description={`${adress.neighborhood} - ${adress.city}, ${adress.state}`}
              address
            >
              <MapPin size={20} weight="fill" />
            </DeliveryInfosContainer>

            <DeliveryInfosContainer
              bgColor="yellow"
              text="Previsão de entrega"
              description="20 min - 30 min"
            >
              <Timer size={20} weight="fill" />
            </DeliveryInfosContainer>

            <DeliveryInfosContainer
              bgColor="yellowDark"
              text="Pagamento na entrega"
              description={formatedPayment}
            >
              <CurrencyDollar size={20} weight="fill" />
            </DeliveryInfosContainer>
          </div>
        </section>
        <div>
          <img src={successIllustration} alt="" />
        </div>
      </SuccessInfoContainer>
    </SuccessContainer>
  )
}
