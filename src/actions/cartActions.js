import * as types from "./actionTypes";

export function addToCart(book) {
  return { type: types.ADD_TO_CART, payload: book };
}

export function removeFromCart(id) {
  return { type: types.REMOVE_FROM_CART, payload: id };
}
