import products from '../assets/AudiophileAssets/data';

import {
  PRESS_MINUS_ADDCART_COUNT,
  PRESS_PLUS_ADDCART_COUNT,
  ADD_CART,
  CLEAN_CART,
  ADD_QUANTITY_PRODUCT_IN_CART,
  REMOVE_QUANTITY_PRODUCT_IN_CART,
  SET_DISPLAY_CART,
  CHANGE_PAYMENT_METHOD,
  HANDLE_CHANGE_INPUT,
} from '../actions';

const initialState = {
  categories: [
    {
      name: 'Headphones',
      slug: 'headphones',
    },
    {
      name: 'Speakers',
      slug: 'speakers',
    },
    {
      name: 'Earphones',
      slug: 'earphones',
    },
  ],
  products,
  addCartQuantityCount: 1,
  cart: {
    products: [],
    totalPrice: 0,
    totalProduct: 0,
    display: false,
  },
  checkout: {
    phone: '',
    paymentMethod: 'e-Money',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PRESS_MINUS_ADDCART_COUNT: {
      let newAddCartQuantityCount = state.addCartQuantityCount - 1;
      if (state.addCartQuantityCount === 1) {
        newAddCartQuantityCount = 1;
      }
      return {
        ...state,
        addCartQuantityCount: newAddCartQuantityCount,
      };
    }
    case PRESS_PLUS_ADDCART_COUNT:
      return {
        ...state,
        addCartQuantityCount: state.addCartQuantityCount + 1,
      };
    case ADD_CART: {
      const newCartProducts = [...state.cart.products];
      const addedProduct = {
        ...action.product,
        quantityInCart: state.addCartQuantityCount,
      };
      newCartProducts.push(addedProduct);
      let newTotalProduct = 0;
      let newTotalPrice = 0;
      newCartProducts.forEach((product) => {
        newTotalProduct += product.quantityInCart;
        newTotalPrice += product.price * product.quantityInCart;
      });
      return {
        ...state,
        addCartQuantityCount: 1,
        cart: {
          ...state.cart,
          totalPrice: newTotalPrice,
          totalProduct: newTotalProduct,
          products: newCartProducts,
        },
      };
    }
    case CLEAN_CART:
      return {
        ...state,
        addCartQuantityCount: 1,
        cart: {
          ...state.cart,
          totalPrice: 0,
          totalProduct: 0,
          products: [],
        },
      };
    case ADD_QUANTITY_PRODUCT_IN_CART: {
      const productsInCart = state.cart.products;
      const indexProduct = productsInCart.findIndex((
        (product) => product.id === action.product.id));
      productsInCart[indexProduct].quantityInCart += 1;
      return {
        ...state,
        cart: {
          ...state.cart,
          totalPrice: state.cart.totalPrice + action.product.price,
          totalProduct: state.cart.totalProduct + 1,
          products: productsInCart,
        },
      };
    }
    case REMOVE_QUANTITY_PRODUCT_IN_CART: {
      const productsInCart = state.cart.products;
      const indexProduct = productsInCart.findIndex((
        (product) => product.id === action.product.id));
      if (action.product.quantityInCart === 1) productsInCart.splice(indexProduct, 1);
      else productsInCart[indexProduct].quantityInCart -= 1;
      return {
        ...state,
        cart: {
          ...state.cart,
          totalPrice: state.cart.totalPrice - action.product.price,
          totalProduct: state.cart.totalProduct - 1,
          products: productsInCart,
        },
      };
    }
    case SET_DISPLAY_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          display: action.displayCart,
        },
      };
    case CHANGE_PAYMENT_METHOD:
      return {
        ...state,
        checkout: {
          ...state.checkout,
          paymentMethod: action.paymentMethod,
        },
      };
    case HANDLE_CHANGE_INPUT:
      return {
        ...state,
        checkout: {
          ...state.checkout,
          [action.fieldName]: action.fieldValue,
        },
      };
    default:
      return { ...state };
  }
};

export default reducer;
