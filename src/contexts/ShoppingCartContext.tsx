import { createContext, ReactNode, useReducer } from 'react'

import {
  addProductOnCartAction,
  decreaseQuantityOfProductInCartByOneAction,
  increaseQuantityOfProductInCartByOneAction,
  removeProductFromCartAction,
  clearShoppingCartAction,
} from '../reducers/shoppingCart/actions'
import {
  shoppingCartReducer,
  ProductOnCart,
} from '../reducers/shoppingCart/reducer'

interface ShoppingCartContextType {
  shoppingCart: ProductOnCart[]
  productsOnCartIds: number[]
  quantityOfProductsOnCart: number
  addProductOnCart: (coffe: ProductOnCart) => void
  removeProductFromCart: (coffe: ProductOnCart) => void
  increaseQuantityOfProductInCartByOne: (coffe: ProductOnCart) => void
  decreaseQuantityOfProductInCartByOne: (coffe: ProductOnCart) => void
  clearShoppingCart: () => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

interface ShoppingCartContextProviderProps {
  children: ReactNode
}

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [ShoppingCartState, dispatch] = useReducer(shoppingCartReducer, {
    cart: [],
    productsOnCartIds: [],
    quantityOfProductsOnCart: null,
  })

  const {
    cart: shoppingCart,
    productsOnCartIds,
    quantityOfProductsOnCart,
  } = ShoppingCartState

  function addProductOnCart(coffe: ProductOnCart) {
    dispatch(addProductOnCartAction(coffe))
  }

  function removeProductFromCart(coffe: ProductOnCart) {
    dispatch(removeProductFromCartAction(coffe))
  }

  function increaseQuantityOfProductInCartByOne(coffe: ProductOnCart) {
    dispatch(increaseQuantityOfProductInCartByOneAction(coffe))
  }

  function decreaseQuantityOfProductInCartByOne(coffe: ProductOnCart) {
    dispatch(decreaseQuantityOfProductInCartByOneAction(coffe))
  }

  function clearShoppingCart() {
    dispatch(clearShoppingCartAction())
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        productsOnCartIds,
        quantityOfProductsOnCart,
        addProductOnCart,
        removeProductFromCart,
        increaseQuantityOfProductInCartByOne,
        decreaseQuantityOfProductInCartByOne,
        clearShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
