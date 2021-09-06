import { connect } from 'react-redux';

import Checkout from '../../components/Checkout';

const mapStateToProps = (state) => ({
  productsInCheckout: state.cart.products,
  totalPrice: state.cart.totalPrice,
  isCheckoutFormValid: state.checkout.isCheckoutFormValid,
});

export default connect(mapStateToProps)(Checkout);
