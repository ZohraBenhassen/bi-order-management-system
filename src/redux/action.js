import * as types from "./actionTypes";

export const getCartTotal = () => ({
  type: types.GET_TOTALS,
});



export function increase(product) {
  // console.log({product})
  return {
    type: types.increaseCartQuantity,
    payload: product,
  }
}
export const decrease = (product) => ({
  type: types.decreaseCartQuantity,
  payload: product,
  
});

export const remove = (product) => ({
  type: types.removeFromCart,
  payload: product,
});

export const openCart = () => ({
  type: types.OPEN_CART,
});

export const closeCart = () => ({
  type: types.CLOSE_CART,
});


