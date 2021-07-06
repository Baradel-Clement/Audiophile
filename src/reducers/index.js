import products from '../assets/AudiophileAssets/data';

import {
  PRESS_MINUS_ADDCART_COUNT,
  PRESS_PLUS_ADDCART_COUNT,
  ADD_CART,
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
    default:
      return { ...state };
  }
};

export default reducer;
