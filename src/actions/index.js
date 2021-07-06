export const PRESS_MINUS_ADDCART_COUNT = 'PRESS_MINUS_ADDCART_COUNT';
export const PRESS_PLUS_ADDCART_COUNT = 'PRESS_PLUS_ADDCART_COUNT';
export const ADD_CART = 'ADD_CART';

export const pressMinusAddCartCount = () => ({
  type: PRESS_MINUS_ADDCART_COUNT,
});

export const pressPlusAddCartCount = () => ({
  type: PRESS_PLUS_ADDCART_COUNT,
});

export const addCart = (product) => ({
  type: ADD_CART,
  product,
});
