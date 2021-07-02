import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import NavBar from '../NavBar';
import Homepage from '../Homepage';
import Footer from '../Footer';

const App = ({ categories }) => (
  <div className="app">
    <NavBar />
    <Route path="/" exact>
      <Homepage />
    </Route>
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
};

export default App;
