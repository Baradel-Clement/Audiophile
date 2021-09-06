export const PRESS_MINUS_ADDCART_COUNT = 'PRESS_MINUS_ADDCART_COUNT';
export const PRESS_PLUS_ADDCART_COUNT = 'PRESS_PLUS_ADDCART_COUNT';
export const ADD_CART = 'ADD_CART';
export const CLEAN_CART = 'CLEAN_CART';
export const ADD_QUANTITY_PRODUCT_IN_CART = 'ADD_QUANTITY_PRODUCT_IN_CART';
export const REMOVE_QUANTITY_PRODUCT_IN_CART = 'REMOVE_QUANTITY_PRODUCT_IN_CART';
export const SET_DISPLAY_CART = 'SET_DISPLAY_CART';
export const CHANGE_PAYMENT_METHOD = 'CHANGE_PAYMENT_METHOD';
export const HANDLE_CHANGE_INPUT = 'HANDLE_CHANGE_INPUT';
export const DISPLAY_ERROR_EMAIL = 'DISPLAY_ERROR_EMAIL';
export const DISPLAY_ERROR_ZIP = 'DISPLAY_ERROR_ZIP';
export const CLEAR_ERROR_INPUT = 'CLEAR_ERROR_INPUT';
export const IS_CHECKOUT_FORM_VALID = 'IS_CHECKOUT_FORM_VALID';

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

export const cleanCart = () => ({
  type: CLEAN_CART,
});

export const addQuantityProductInCart = (product) => ({
  type: ADD_QUANTITY_PRODUCT_IN_CART,
  product,
});

export const removeQuantityProductInCart = (product) => ({
  type: REMOVE_QUANTITY_PRODUCT_IN_CART,
  product,
});

export const setDisplayCart = (displayCart) => ({
  type: SET_DISPLAY_CART,
  displayCart,
});

export const changePaymentMethod = (paymentMethod) => ({
  type: CHANGE_PAYMENT_METHOD,
  paymentMethod,
});

export const handleChangeInput = (fieldName, fieldValue) => ({
  type: HANDLE_CHANGE_INPUT,
  fieldName,
  fieldValue,
});

export const displayErrorEmail = () => ({
  type: DISPLAY_ERROR_EMAIL,
});

export const displayErrorZip = () => ({
  type: DISPLAY_ERROR_ZIP,
});

export const clearErrorInput = (inputName) => ({
  type: CLEAR_ERROR_INPUT,
  inputName,
});

export const isCheckoutFormValid = () => ({
  type: IS_CHECKOUT_FORM_VALID,
});
