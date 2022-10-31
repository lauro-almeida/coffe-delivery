import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { CTAContainer, HeaderCointainer } from './styles'

export function Header() {
  return (
    <HeaderCointainer>
      <div>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <CTAContainer>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Anchieta, RJ</span>
        </div>
        <NavLink to="/checkout">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </CTAContainer>
    </HeaderCointainer>
  )
}
