/* eslint-disable no-cond-assign */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import useMedia from 'use-media';

import { checkMediaDevice } from '../../utils';
import NavBar from '../../containers/NavBar';
import Homepage from '../Homepage';
import Footer from '../Footer';
import Category from '../../containers/Category';
import Product from '../../containers/Product';
import Checkout from '../../containers/Checkout';
import Mask from '../../containers/Mask';

const App = ({
  categories, products, displayMask, changeMediaDevice, mediaDevice,
}) => {
  // Checking the current media device
  const isTablet = useMedia({ maxWidth: '1160px' });
  const isMobile = useMedia({ maxWidth: '768px' });

  useEffect(() => {
    const newMediaDevice = checkMediaDevice(isMobile, isTablet);
    if (newMediaDevice !== mediaDevice) {
      changeMediaDevice(newMediaDevice);
    }
  });

  return (
    <div className="app">
      <NavBar />
      {
      displayMask && (
        <Mask />
      )
    }
      <Route path="/" exact>
        <Homepage />
      </Route>
      {
      categories.map((category) => (
        <Route key={category.slug} path={`/${category.slug}`} exact>
          <Category name={category.name} slug={category.slug} />
        </Route>
      ))
    }
      {
      products.map((product) => (
        <Route key={product.id} path={`/${product.slug}`} exact>
          <Product product={product} />
        </Route>
      ))
    }
      <Route path="/checkout" exact>
        <Checkout />
      </Route>
      <Footer />
    </div>
  );
};

App.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  displayMask: PropTypes.bool.isRequired,
  changeMediaDevice: PropTypes.func.isRequired,
  mediaDevice: PropTypes.string.isRequired,
};

export default App;
