import { NewOrderFormData } from '../../pages/Checkout'
import { Product } from '../../products'
import { ActionTypes } from './actions'

export interface ProductOnCart extends Product {
  quantity: number
}

export interface Order {
  adress: NewOrderFormData
  products: ProductOnCart[]
  payment: string
}

interface ShoppingCartState {
  cart: ProductOnCart[]
  productsOnCartIds: number[]
  quantityOfProductsOnCart: number
}

export function shoppingCartReducer(state: ShoppingCartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_ON_CART: {
      const isProductAlreadyOnCart = state.productsOnCartIds.includes(
        action.payload.coffe.id,
      )

      if (isProductAlreadyOnCart) {
        return {
          ...state,
          cart: state.cart.map((product) => {
            if (product.id === action.payload.coffe.id) {
              return {
                ...product,
                quantity: product.quantity + action.payload.coffe.quantity,
              }
            } else {
              return product
            }
          }),
          quantityOfProductsOnCart:
            state.quantityOfProductsOnCart + action.payload.coffe.quantity,
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload.coffe],
          productsOnCartIds: [
            ...state.productsOnCartIds,
            action.payload.coffe.id,
          ],
          quantityOfProductsOnCart:
            state.quantityOfProductsOnCart + action.payload.coffe.quantity,
        }
      }
    }

    case ActionTypes.REMOVE_PRODUCT_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
        productsOnCartIds: state.productsOnCartIds.filter(
          (id) => id !== action.payload.id,
        ),
        quantityOfProductsOnCart:
          state.quantityOfProductsOnCart - action.payload.quantity,
      }
    }

    case ActionTypes.INCREASE_QUANTITY_BY_ONE: {
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity + 1 }
          } else {
            return product
          }
        }),
        quantityOfProductsOnCart: state.quantityOfProductsOnCart + 1,
      }
    }

    case ActionTypes.DECREASE_QUANTITY_BY_ONE: {
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id === action.payload.id && product.quantity > 1) {
            return { ...product, quantity: product.quantity - 1 }
          } else {
            return product
          }
        }),
        quantityOfProductsOnCart: state.quantityOfProductsOnCart - 1,
      }
    }

    case ActionTypes.CLEAR_SHOPPING_CART: {
      return {
        cart: [],
        productsOnCartIds: [],
        quantityOfProductsOnCart: null,
      }
    }

    default:
      return state
  }
}
