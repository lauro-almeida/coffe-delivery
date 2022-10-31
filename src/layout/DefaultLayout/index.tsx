import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { ItensOnCart } from '../../components/ItensOnCart'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  const { quantityOfProductsOnCart } = useContext(ShoppingCartContext)
  return (
    <LayoutContainer>
      <ItensOnCart value={quantityOfProductsOnCart} />
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
