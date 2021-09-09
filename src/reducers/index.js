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
  DISPLAY_ERROR_EMAIL,
  DISPLAY_ERROR_ZIP,
  CLEAR_ERROR_INPUT,
  IS_CHECKOUT_FORM_VALID,
  DISPLAY_CHECKOUT_MODAL,
  DISPLAY_MODAL_VIEW_MORE,
  SET_DISPLAY_MASK,
  SET_DISPLAY_MENU,
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
  displayMenu: false,
  displayMask: false,
  cart: {
    products: [],
    totalPrice: 0,
    totalProduct: 0,
    display: false,
  },
  checkout: {
    phone: '',
    name: '',
    Email: '',
    adress: '',
    Zip: '',
    country: '',
    city: '',
    eMoneyNumber: '',
    eMoneyPin: '',
    paymentMethod: 'e-Money',
    errorEmail: false,
    errorZip: false,
    isCheckoutFormValid: false,
    checkoutModal: false,
    modalViewMore: false,
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
    case DISPLAY_ERROR_EMAIL:
      return {
        ...state,
        checkout: {
          ...state.checkout,
          errorEmail: true,
        },
      };
    case DISPLAY_ERROR_ZIP:
      return {
        ...state,
        checkout: {
          ...state.checkout,
          errorZip: true,
        },
      };
    case CLEAR_ERROR_INPUT: {
      const { inputName } = action;
      const error = 'error';
      const concat = error.concat('', inputName);
      return {
        ...state,
        checkout: {
          ...state.checkout,
          [concat]: false,
        },
      };
    }
    case IS_CHECKOUT_FORM_VALID: {
      let fieldsEmpty = 0;
      const {
        phone, name, Email, adress, Zip, country, city,
        eMoneyNumber, eMoneyPin, paymentMethod, errorEmail, errorZip,
      } = state.checkout;
      const inputs = [name, Email, phone, adress, Zip, country, city];

      inputs.forEach((input) => {
        if (input === '') {
          fieldsEmpty += 1;
        }
      });
      if (paymentMethod === 'e-Money' && (eMoneyNumber === '' || eMoneyPin === '')) {
        fieldsEmpty += 1;
      }

      let isCheckoutFormValid = false;
      if (fieldsEmpty === 0 && (errorEmail === false && errorZip === false)) {
        isCheckoutFormValid = true;
      }
      return {
        ...state,
        checkout: {
          ...state.checkout,
          isCheckoutFormValid,
        },
      };
    }
    case DISPLAY_CHECKOUT_MODAL:
      return {
        ...state,
        checkout: {
          ...state.checkout,
          checkoutModal: !state.checkout.checkoutModal,
        },
      };
    case DISPLAY_MODAL_VIEW_MORE:
      return {
        ...state,
        checkout: {
          ...state.checkout,
          modalViewMore: !state.checkout.modalViewMore,
        },
      };
    case SET_DISPLAY_MASK: {
      let newDisplayMask = action.displayMask;
      if (action.triggeredFrom === 'triggeredFromMenu' && state.cart.display === false) {
        newDisplayMask = true;
      }
      if (action.triggeredFrom === 'triggeredFromCart' && state.displayMenu === false) {
        newDisplayMask = true;
      }
      return {
        ...state,
        displayMask: newDisplayMask,
      };
    }
    case SET_DISPLAY_MENU:
      return {
        ...state,
        displayMenu: action.displayMenu,
      };
    default:
      return { ...state };
  }
};

export default reducer;
