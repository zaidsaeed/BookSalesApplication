import * as types from "./actionTypes";

export function addToCart(book) {
  return { type: types.ADD_TO_CART, payload: book };
}

export function removeFromCart(id) {
  return { type: types.REMOVE_FROM_CART, id: id };
}

export function increaseTotalCount(price) {
  return { type: types.INCREASE_TOTAL_COUNT, price: price };
}

export function decreaseTotalCount(price) {
  return { type: types.DECREASE_TOTAL_COUNT, price: price };
}
