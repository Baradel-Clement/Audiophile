import { connect } from 'react-redux';

import Checkout from '../../components/Checkout';

import {
  displayCheckoutModal,
  setDisplayMask,
} from '../../actions';

const mapStateToProps = (state) => ({
  productsInCheckout: state.cart.products,
  totalPrice: state.cart.totalPrice,
  isCheckoutFormValid: state.checkout.isCheckoutFormValid,
  checkoutModal: state.checkout.checkoutModal,
});

const mapDispatchToProps = (dispatch) => ({
  displayCheckoutModal: () => {
    dispatch(displayCheckoutModal());
  },
  setDisplayMask: (displayMask, triggeredFrom) => {
    dispatch(setDisplayMask(displayMask, triggeredFrom));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
