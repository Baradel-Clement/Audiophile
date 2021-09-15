/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Categories from '../Categories';
import Best from '../Best';
import { topFunction } from '../../utils';

const Category = ({
  name, slug, products,
}) => {
  const productsToDisplay = [];
  products.map((product) => {
    if (product.category === slug) {
      productsToDisplay.push(product);
    }
  });
  productsToDisplay.reverse();

  return (
    <div className={`Category Category-${name}`}>
      <div className="Category-title">
        <h2>{name}</h2>
      </div>
      <div className="Category-products">
        {
          productsToDisplay.map((product) => (
            <div key={product.id} className="Category-product">
              <div className="Category-product-illu">
                <picture>
                  <source media="(max-width: 768px)" srcSet={`/AudiophileAssets/${product.image.mobile}`} />
                  <source media="(max-width: 1160px)" srcSet={`/AudiophileAssets/${product.image.tablet}`} />
                  <img src={`/AudiophileAssets/${product.image.desktop}`} alt={product.name} />
                </picture>
              </div>
              <div className="Category-product-desc">
                <p className="overline">{product.new ? 'NEW PRODUCT' : ''}</p>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <NavLink className="button button1" onClick={() => topFunction()} to={`/${product.slug}`} exact>SEE PRODUCT</NavLink>
              </div>
            </div>
          ))
        }
      </div>
      <Categories id="CategoriesCategory" />
      <Best id="CategoryBest" />
    </div>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Category;
