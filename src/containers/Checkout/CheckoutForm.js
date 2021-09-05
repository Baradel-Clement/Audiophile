import { connect } from 'react-redux';

import CheckoutForm from '../../components/Checkout/CheckoutForm';
import {
  changePaymentMethod,
  handleChangeInput,
  displayErrorEmail,
  displayErrorZip,
  clearErrorInput,
} from '../../actions';

const mapStateToProps = (state) => ({
  phoneValue: state.checkout.phone,
  paymentMethod: state.checkout.paymentMethod,
  errorEmail: state.checkout.errorEmail,
  errorZip: state.checkout.errorZip,
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
  displayErrorZip: () => {
    dispatch(displayErrorZip());
  },
  clearErrorInput: (inputName) => {
    dispatch(clearErrorInput(inputName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);
