import { connect } from 'react-redux';

import CheckoutForm from '../../components/Checkout/CheckoutForm';
import {
  changePaymentMethod,
  handleChangeInput,
  displayErrorEmail,
  clearErrorInput,
} from '../../actions';

const mapStateToProps = (state) => ({
  phoneValue: state.checkout.phone,
  paymentMethod: state.checkout.paymentMethod,
  errorEmail: state.checkout.errorEmail,
});

const mapDispatchToProps = (dispatch) => ({
  changePaymentMethod: (paymentMethod) => {
    dispatch(changePaymentMethod(paymentMethod));
  },
  handleChangeInput: (fieldName, fieldValue) => {
    dispatch(handleChangeInput(fieldName, fieldValue));
  },
  displayErrorEmail: () => {
    dispatch(displayErrorEmail());
  },
  clearErrorInput: (inputName) => {
    dispatch(clearErrorInput(inputName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);
