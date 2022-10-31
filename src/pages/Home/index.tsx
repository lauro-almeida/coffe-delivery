import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { ProductValueDescription } from '../../components/ProductValueDescription'

import introCover from '../../assets/intro-cover.png'

import {
  HomeContainer,
  FeaturesContainer,
  MainContainer,
  CoffeCardContainer,
} from './styles'
import { products } from '../../products'
import { CoffeCardItem } from '../../components/CoffeCardItem'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export function Home() {
  const navigate = useNavigate()
  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:order-state-1.0.0',
    )
    if (storedStateAsJSON) {
      navigate('/success')
    }
  }, [navigate])

  return (
    <HomeContainer>
      <section>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <FeaturesContainer>
            <div>
              <ProductValueDescription
                bgColor="yellowDark"
                text="Compra simples e segura"
              >
                <ShoppingCart size={20} weight="fill" />
              </ProductValueDescription>

              <ProductValueDescription
                bgColor="yellow"
                text="Entrega rápida e rastreada"
              >
                <Timer size={20} weight="fill" />
              </ProductValueDescription>
            </div>
            <div>
              <ProductValueDescription
                bgColor="baseText"
                text="Embalagem mantém o café intacto"
              >
                <Package size={20} weight="fill" />
              </ProductValueDescription>

              <ProductValueDescription
                bgColor="purple"
                text="O café chega fresquinho até você"
              >
                <Coffee size={20} weight="fill" />
              </ProductValueDescription>
            </div>
          </FeaturesContainer>
        </div>
        <div>
          <img src={introCover} alt="" />
        </div>
      </section>
      <MainContainer>
        <h2>Nossos Cafés</h2>
        <CoffeCardContainer>
          {products.map((product) => {
            return <CoffeCardItem key={product.id} coffe={product} />
          })}
        </CoffeCardContainer>
      </MainContainer>
    </HomeContainer>
  )
}
