import React from 'react';
import PropTypes from 'prop-types';

const ProductQuantityCountAddCart = ({
  addCartQuantityCount,
  pressMinusAddCartCount,
  pressPlusAddCartCount,
}) => (
  <div className="Product-main-desc-addCart-count">
    <div
      id="addCartCountMinus"
      onClick={() => {
        pressMinusAddCartCount();
      }}
      onMouseEnter={() => {
        document.querySelector('#addCartCountMinus').firstElementChild.classList.add('colorOrange');
      }}
      onMouseOut={() => {
        document.querySelector('#addCartCountMinus').firstElementChild.classList.remove('colorOrange');
      }}
      className={addCartQuantityCount === 1 ? 'Product-main-desc-addCart-count-minusPlus block ' : 'Product-main-desc-addCart-count-minusPlus pointer'}
    >
      <p className="Product-main-desc-addCart-count-countFont">-</p>
    </div>
    <div className="Product-main-desc-addCart-count-minusPlus">
      <p className="Product-main-desc-addCart-count-quantityFont">{addCartQuantityCount}</p>
    </div>
    <div
      id="addCartCountPlus"
      onClick={() => {
        pressPlusAddCartCount();
      }}
      onMouseEnter={() => {
        document.querySelector('#addCartCountPlus').firstElementChild.classList.add('colorOrange');
      }}
      onMouseOut={() => {
        document.querySelector('#addCartCountPlus').firstElementChild.classList.remove('colorOrange');
      }}
      className="Product-main-desc-addCart-count-minusPlus pointer"
    >
      <p className="Product-main-desc-addCart-count-countFont">+</p>
    </div>
  </div>
);

ProductQuantityCountAddCart.propTypes = {
  addCartQuantityCount: PropTypes.number.isRequired,
  pressMinusAddCartCount: PropTypes.func.isRequired,
  pressPlusAddCartCount: PropTypes.func.isRequired,
};

export default ProductQuantityCountAddCart;
