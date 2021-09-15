import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import iconCheckoutModal from '../../assets/AudiophileAssets/shared/desktop/icon-checkout-modal.svg';

const CheckoutModal = ({
  totalPrice,
  productsPurchased,
  totalProduct,
  viewMore,
  displayViewMore,
  setDisplayMask,
  mediaDevice,
}) => (
  <div className="CheckoutModal">
    <img src={iconCheckoutModal} alt="iconCheckoutModal" />
    <h3 className="h3CheckoutModal">THANK YOU<br /> FOR YOUR ORDER</h3>
    <p className="opacity">You will receive an email confirmation shortly.</p>
    <div className="CheckoutModal-recap">
      <div style={{ height: productsPurchased.length < 2 ? 139 : null }} className="CheckoutModal-recap-items-wrap">
        <div className="CheckoutModal-recap-items">
          {
            !viewMore && (
              <div className="CheckoutModal-recap-item">
                <img src={`/AudiophileAssets/checkout-modal/image-${productsPurchased[0].slug}.png`} alt={productsPurchased[0].slug} />
                <div className="CheckoutModal-recap-item-desc">
                  <p className="CheckoutModal-recap-item-desc-name">{productsPurchased[0].nickname}</p>
                  <p className="CheckoutModal-recap-item-desc-price">$ {productsPurchased[0].price}</p>
                </div>
                <p className="opacity">x{productsPurchased[0].quantityInCart}</p>
              </div>
            )
          }
          {
            viewMore && (
              productsPurchased.map((product) => (
                <div key={product.slug} className="CheckoutModal-recap-item">
                  <img src={`/AudiophileAssets/checkout-modal/image-${product.slug}.png`} alt={product.slug} />
                  <div className="CheckoutModal-recap-item-desc">
                    <p className="CheckoutModal-recap-item-desc-name">{product.nickname}</p>
                    <p className="CheckoutModal-recap-item-desc-price">$ {product.price}</p>
                  </div>
                  <p className="opacity">x{product.quantityInCart}</p>
                </div>
              ))
            )
          }
        </div>
        {
          (productsPurchased.length > 1) && (
            <div className="CheckoutModal-recap-items-viewMore">
              <span className="CheckoutModal-recap-items-viewMore-rectangle" />
              <p
                onClick={() => displayViewMore()}
                className="checkoutModalViewMore opacity"
              >
                {
              viewMore === true ? 'View less' : `and ${totalProduct - productsPurchased[0].quantityInCart} other item(s)`
            }
              </p>
            </div>
          )
        }
      </div>
      <div style={{ height: viewMore === true && (mediaDevice === 'tablet' || 'desktop') ? 139 + (66 * (productsPurchased.length - 1)) : 139 }} className="CheckoutModal-recap-price">
        <div className="CheckoutModal-recap-price-wrap">
          <p className="weight200 opacity white">GRAND TOTAL</p>
          <h6 className="white">$ {totalPrice + 50}</h6>
        </div>
      </div>
    </div>
    <NavLink className="button button1" onClick={() => setDisplayMask(false, '')} to="/" exact>BACK TO HOME</NavLink>
  </div>
);

CheckoutModal.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  productsPurchased: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantityInCart: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  totalProduct: PropTypes.number.isRequired,
  viewMore: PropTypes.bool.isRequired,
  displayViewMore: PropTypes.func.isRequired,
  setDisplayMask: PropTypes.func.isRequired,
  mediaDevice: PropTypes.string.isRequired,
};

export default CheckoutModal;
