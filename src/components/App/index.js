import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import NavBar from '../../containers/NavBar';
import Homepage from '../Homepage';
import Footer from '../Footer';
import Category from '../../containers/Category';
import Product from '../../containers/Product';

const App = ({ categories, products }) => (
  <div className="app">
    <NavBar />
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
    <Footer />
  </div>
);

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
};

export default App;
