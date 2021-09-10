import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';

import Categories from '../Categories';
import Best from '../Best';
import ProductQuantityCountAddCart from '../../containers/ProductQuantityCountAddCart';

const Product = ({ product, addCart }) => {
  const history = useHistory();
  return (
    <div className="Product">
      <div className="Product-wrap">
        <p onClick={() => history.goBack()}>Go Back</p>
        <div className="Product-main">
          <div className="Product-main-illu">
            <picture>
              <source media="(max-width: 768px)" srcSet={`/AudiophileAssets/${product.image.mobile}`} />
              <source media="(max-width: 1160px)" srcSet={`/AudiophileAssets/${product.image.tablet}`} />
              <img src={`/AudiophileAssets/${product.image.desktop}`} alt={`${product.name}`} />
            </picture>
          </div>
          <div className="Product-main-desc">
            <p className="colorOrange overline">{product.new ? 'NEW PRODUCT' : ''}</p>
            <h2 className="littleH2">{product.name}</h2>
            <p>{product.description}
            </p>
            <h6>$ {product.price}</h6>
            <div className="Product-main-desc-addCart">
              <ProductQuantityCountAddCart />
              <button onClick={() => addCart(product)} className="button button1" type="button">ADD TO CART</button>
            </div>
          </div>
        </div>
        <div className="Product-featuresBox">
          <div className="Product-features">
            <h3>FEATURES</h3>
            <p>{product.features}</p>
          </div>
          <div className="Product-box">
            <h3>IN THE BOX</h3>
            <ul className="Product-box-list">
              {
                product.includes.map((include) => (
                  <li key={include.id}><span className="colorOrange countBoxList">{include.quantity}x</span>{include.item}</li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="Product-gallery">
          <div className="Product-gallery-little">
            <picture>
              <source media="(max-width: 768px)" srcSet={`/AudiophileAssets/${product.gallery.first.mobile}`} />
              <source media="(max-width: 1160px)" srcSet={`/AudiophileAssets/${product.gallery.first.tablet}`} />
              <img src={`/AudiophileAssets/${product.gallery.first.desktop}`} alt={`${product.name} gallery 1`} />
            </picture>
            <picture>
              <source media="(max-width: 768px)" srcSet={`/AudiophileAssets/${product.gallery.second.mobile}`} />
              <source media="(max-width: 1160px)" srcSet={`/AudiophileAssets/${product.gallery.second.tablet}`} />
              <img src={`/AudiophileAssets/${product.gallery.second.desktop}`} alt={`${product.name} gallery 2`} />
            </picture>
          </div>
          <picture id="Product-gallery-big">
            <source media="(max-width: 768px)" srcSet={`/AudiophileAssets/${product.gallery.third.mobile}`} />
            <source media="(max-width: 1160px)" srcSet={`/AudiophileAssets/${product.gallery.third.tablet}`} />
            <img src={`/AudiophileAssets/${product.gallery.third.desktop}`} alt={`${product.name} gallery 3`} />
          </picture>
        </div>
        <div className="Product-others">
          <h3>YOU MAY ALSO LIKE</h3>
          <div className="Product-others-products">
            {
              product.others.map((other) => (
                <div key={other.slug} className="Product-others-product">
                  <picture>
                    <source media="(max-width: 768px)" srcSet={`/AudiophileAssets/${other.image.mobile}`} />
                    <source media="(max-width: 1160px)" srcSet={`/AudiophileAssets/${other.image.tablet}`} />
                    <img src={`/AudiophileAssets/${other.image.desktop}`} alt={`${other.name} `} />
                  </picture>
                  <h5>{other.name}</h5>
                  <NavLink to={other.slug} exact><button type="button" className="button button1">SEE PRODUCT</button></NavLink>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Categories id="CategoriesProduct" />
      <Best id="ProductBest" />
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({
      mobile: PropTypes.string.isRequired,
      tablet: PropTypes.string.isRequired,
      desktop: PropTypes.string.isRequired,
    }).isRequired,
    new: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.string.isRequired,
    includes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        item: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    gallery: PropTypes.shape({
      first: PropTypes.shape({
        mobile: PropTypes.string.isRequired,
        tablet: PropTypes.string.isRequired,
        desktop: PropTypes.string.isRequired,
      }).isRequired,
      second: PropTypes.shape({
        mobile: PropTypes.string.isRequired,
        tablet: PropTypes.string.isRequired,
        desktop: PropTypes.string.isRequired,
      }).isRequired,
      third: PropTypes.shape({
        mobile: PropTypes.string.isRequired,
        tablet: PropTypes.string.isRequired,
        desktop: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    others: PropTypes.arrayOf(
      PropTypes.shape({
        slug: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.shape({
          mobile: PropTypes.string.isRequired,
          tablet: PropTypes.string.isRequired,
          desktop: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  addCart: PropTypes.func.isRequired,
};

export default Product;
