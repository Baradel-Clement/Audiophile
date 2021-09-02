/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import cashIcon from '../../assets/AudiophileAssets/shared/desktop/icon-cash.svg';

const CheckoutForm = ({
  changePaymentMethod, paymentMethod, handleChangeInput,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleChange = (evt) => {
    handleChangeInput(evt.target.name, evt.target.value);
  };

  return (
    <div className="Checkout-form">
      <h3>CHECKOUT</h3>
      <form onSubmit={handleSubmit} id="CheckoutForm" name="CheckoutForm">
        <div className="Checkout-form-billingDetails">
          <p className="sub-title">BILLING DETAILS</p>
          <div className="Checkout-form-inputs">
            <div className="Checkout-form-input">
              <label htmlFor="Name">Name</label>
              <input name="Name" placeholder="Name" />
            </div>
            <div className="Checkout-form-input">
              <label htmlFor="Email">Email Address</label>
              <input type="email" name="Email" placeholder="example@mail.com" />
            </div>
            <div className="Checkout-form-input">
              <label htmlFor="Phone">Phone Number</label>
              <input type="tel" name="Phone" placeholder="+1 (202) 555-0136" />
            </div>
          </div>
        </div>
        <div className="Checkout-form-shippingInfo">
          <p className="sub-title">SHIPPING INFO</p>
          <div className="Checkout-form-inputs">
            <div id="Checkout-form-input-adresse" className="Checkout-form-input">
              <label htmlFor="Adresse">Adress</label>
              <input name="Adresse" placeholder="1137 Williams Avenue" />
            </div>
            <div className="Checkout-form-input">
              <label htmlFor="ZIP">ZIP Code</label>
              <input type="number" name="ZIP" placeholder="10001" />
            </div>
            <div className="Checkout-form-input">
              <label htmlFor="City">City</label>
              <input name="City" placeholder="New York" />
            </div>
            <div className="Checkout-form-input">
              <label htmlFor="Country">Country</label>
              <input name="Country" placeholder="United States" />
            </div>
          </div>
        </div>
        <div className="Checkout-form-paymentDetails">
          <p className="sub-title">PAYMENT DETAILS</p>
          <div className="Checkout-form-paymentDetails-methods">
            <p className="labelFont">Payment Method</p>
            <div onClick={() => changePaymentMethod('e-Money')} className="Checkout-form-paymentDetails-method">
              <span className="paymentMethodCircle">{paymentMethod === 'e-Money' && (<span className="paymentMethodCircleInner" />)}</span>
              <p className="paymentMethodFont">e-Money</p>
            </div>
            <div onClick={() => changePaymentMethod('Cash')} className="Checkout-form-paymentDetails-method">
              <span className="paymentMethodCircle">{paymentMethod === 'Cash' && (<span className="paymentMethodCircleInner" />)}</span>
              <p className="paymentMethodFont">Cash on Delivery</p>
            </div>
          </div>
          {
          paymentMethod === 'e-Money' && (
            <div className="Checkout-form-paymentDetails-eMoneyInputs">
              <div className="Checkout-form-input">
                <label htmlFor="eMoneyNumber">e-Money Number</label>
                <input type="number" name="eMoneyNumber" />
              </div>
              <div className="Checkout-form-input">
                <label htmlFor="eMoneyPin">e-Money Pin</label>
                <input type="number" name="eMoneyPin" />
              </div>
            </div>
          )
        }
          {
          paymentMethod === 'Cash' && (
            <div className="Checkout-form-paymentDetails-cash">
              <img src={cashIcon} alt="iconCash" />
              <p className="opacity">The ‘Cash on Delivery’ option enables you to pay
                in cash when our delivery courier arrives at your residence.
                Just make sure your address is correct so that your order will not be cancelled.
              </p>
            </div>
          )
        }
        </div>
      </form>
    </div>
  );
};

CheckoutForm.propTypes = {
  changePaymentMethod: PropTypes.func.isRequired,
  paymentMethod: PropTypes.string.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
};

export default CheckoutForm;
