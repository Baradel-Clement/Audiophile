import { connect } from 'react-redux';

import CheckoutForm from '../../components/Checkout/CheckoutForm';
import {
  changePaymentMethod,
  handleChangeInput,
  displayErrorEmail,
  displayErrorZip,
  clearErrorInput,
  isCheckoutFormValid,
} from '../../actions';

const mapStateToProps = (state) => ({
  phoneValue: state.checkout.phone,
  nameValue: state.checkout.name,
  emailValue: state.checkout.Email,
  adressValue: state.checkout.adress,
  zipValue: state.checkout.Zip,
  countryValue: state.checkout.country,
  cityValue: state.checkout.city,
  eMoneyNumberValue: state.checkout.eMoneyNumber,
  eMoneyPinValue: state.checkout.eMoneyPin,
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
  isCheckoutFormValid: () => {
    dispatch(isCheckoutFormValid());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);
