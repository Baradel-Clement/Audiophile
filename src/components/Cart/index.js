/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { topFunction } from '../../utils';

const Cart = ({
  productsInCart,
  totalPrice,
  totalProduct,
  cleanCart,
  addQuantityProductInCart,
  removeQuantityProductInCart,
  setDisplayCart,
  setDisplayMask,
}) => (
  <div className="Cart">
    <div className="Cart-wrap">
      <div className="Cart-top">
        <h6>CART ({totalProduct})</h6>
        <p
          onClick={() => {
            cleanCart();
          }}
          className="Cart-top-removeAll"
        >Remove all
        </p>
      </div>
      <div className="Cart-products">
        {
            productsInCart.map((product) => (
              <div key={product.id} className="Cart-product">
                <img src={`/AudiophileAssets/cart/image-${product.slug}.jpg`} alt="xx99" />
                <div className="Cart-product-desc">
                  <p className="Cart-product-desc-name">{product.nickname}</p>
                  <p className="Cart-product-desc-price">$ {product.price}</p>
                </div>
                <div className="Cart-product-quantity">
                  <div
                    className="Cart-product-quantity-minusPlus"
                    onClick={() => removeQuantityProductInCart(product)}
                  >
                    <p>-</p>
                  </div>
                  <div className="Cart-product-quantity-count">{product.quantityInCart}</div>
                  <div
                    onClick={() => addQuantityProductInCart(product)}
                    className="Cart-product-quantity-minusPlus"
                  >
                    <p>+</p>
                  </div>
                </div>
              </div>
            ))
        }
      </div>
      <div className="Cart-checkout">
        <div className="Cart-checkout-total">
          <p>TOTAL</p>
          <h6>$ {totalPrice}</h6>
        </div>
        <NavLink
          onClick={() => {
            topFunction();
            setDisplayCart(false);
            setDisplayMask(false);
          }}
          to="/checkout"
          exact
          className={`button button1 Cart-checkout-button ${totalProduct === 0 ? 'button-disable' : ''}`}
        >CHECKOUT
        </NavLink>
      </div>
    </div>
  </div>
);

Cart.propTypes = {
  productsInCart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      quantityInCart: PropTypes.number.isRequired,
      nickname: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  totalPrice: PropTypes.number.isRequired,
  totalProduct: PropTypes.number.isRequired,
  cleanCart: PropTypes.func.isRequired,
  addQuantityProductInCart: PropTypes.func.isRequired,
  removeQuantityProductInCart: PropTypes.func.isRequired,
  setDisplayCart: PropTypes.func.isRequired,
  setDisplayMask: PropTypes.func.isRequired,
};

export default Cart;
