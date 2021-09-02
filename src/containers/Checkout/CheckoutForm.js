import { connect } from 'react-redux';

import CheckoutForm from '../../components/Checkout/CheckoutForm';
import {
  changePaymentMethod,
  handleChangeInput,
} from '../../actions';

const mapStateToProps = (state) => ({
  paymentMethod: state.checkout.paymentMethod,
});

const mapDispatchToProps = (dispatch) => ({
  changePaymentMethod: (paymentMethod) => {
    dispatch(changePaymentMethod(paymentMethod));
  },
  handleChangeInput: (fieldName, fieldValue) => {
    dispatch(handleChangeInput(fieldName, fieldValue));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);
