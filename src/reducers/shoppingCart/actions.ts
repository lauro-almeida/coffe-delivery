import { ProductOnCart } from './reducer'

export enum ActionTypes {
  ADD_PRODUCT_ON_CART = 'ADD_PRODUCT_ON_CART',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
  INCREASE_QUANTITY_BY_ONE = 'INCREASE_QUANTITY_BY_ONE',
  DECREASE_QUANTITY_BY_ONE = 'DECREASE_QUANTITY_BY_ONE',
  CLEAR_SHOPPING_CART = 'CLEAR_SHOPPING_CART',
}

export function addProductOnCartAction(coffe: ProductOnCart) {
  return {
    type: ActionTypes.ADD_PRODUCT_ON_CART,
    payload: {
      coffe,
    },
  }
}

export function removeProductFromCartAction(coffe: ProductOnCart) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      id: coffe.id,
      quantity: coffe.quantity,
    },
  }
}

export function increaseQuantityOfProductInCartByOneAction(
  coffe: ProductOnCart,
) {
  return {
    type: ActionTypes.INCREASE_QUANTITY_BY_ONE,
    payload: {
      id: coffe.id,
    },
  }
}

export function decreaseQuantityOfProductInCartByOneAction(
  coffe: ProductOnCart,
) {
  return {
    type: ActionTypes.DECREASE_QUANTITY_BY_ONE,
    payload: {
      id: coffe.id,
    },
  }
}

export function clearShoppingCartAction() {
  return {
    type: ActionTypes.CLEAR_SHOPPING_CART,
  }
}
