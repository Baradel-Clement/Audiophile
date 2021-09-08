import { connect } from 'react-redux';

import CheckoutModal from '../../components/Checkout/CheckoutModal';

import {
  displayModalViewMore,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutModal);
