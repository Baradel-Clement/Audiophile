import { connect } from 'react-redux';

import CheckoutModal from '../../components/Checkout/CheckoutModal';

import {
  displayModalViewMore,
  setDisplayMask,
} from '../../actions';

const mapStateToProps = (state) => ({
  totalPrice: state.cart.totalPrice,
  productsPurchased: state.cart.products,
  totalProduct: state.cart.totalProduct,
  viewMore: state.checkout.modalViewMore,
});

const mapDispatchToProps = (dispatch) => ({
  displayViewMore: () => {
    dispatch(displayModalViewMore());
  },
  setDisplayMask: (displayMask, triggeredFrom) => {
    dispatch(setDisplayMask(displayMask, triggeredFrom));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutModal);
