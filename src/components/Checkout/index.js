import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Checkout = ({ productsInCheckout, totalPrice }) => {
  const history = useHistory();

  return (
    <div className="Checkout">
      <div className="Checkout-wrap">
        <p onClick={() => history.goBack()}>Go Back</p>
        <div className="Checkout-form" />
        <div className="Checkout-summary">
          <div className="Checkout-summary-wrap">
            <h6>SUMMARY</h6>
            <div className="Checkout-summary-products">
              {
              productsInCheckout.map((product) => (
                <div key={product.id} className="Checkout-summary-product">
                  <img src={`/AudiophileAssets/cart/image-${product.slug}.jpg`} alt={product.slug} />
                  <div className="Checkout-summary-product-desc">
                    <p className="Checkout-summary-product-desc-name">{product.nickname}</p>
                    <p className="Checkout-summary-product-desc-price">$ {product.price}</p>
                  </div>
                  <p className="Checkout-summary-product-quantity">x{product.quantityInCart}</p>
                </div>
              ))
            }
            </div>
            <div className="Checkout-summary-prices">
              <div className="Checkout-summary-price">
                <p className="opacity">TOTAL</p>
                <h6>$ {totalPrice}</h6>
              </div>
              <div className="Checkout-summary-price">
                <p className="opacity">SHIPPING</p>
                <h6>$ 50</h6>
              </div>
              <div className="Checkout-summary-price">
                <p className="opacity">VAT (INCLUDED)</p>
                <h6>$ {Math.round((totalPrice * 0.2) * 100) / 100}</h6>
              </div>
              <div className="Checkout-summary-price">
                <p className="opacity">GRAND TOTAL</p>
                <h6 className="colorOrange">$ {totalPrice + 50}</h6>
              </div>
            </div>
            <button className="button button1 Checkout-summary-button" type="button">CONTINUE & PAY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Checkout.propTypes = {
  productsInCheckout: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantityInCart: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default Checkout;
