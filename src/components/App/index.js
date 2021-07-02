import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from '../NavBar';
import Homepage from '../Homepage';
import Footer from '../Footer';

const App = () => (
  <div className="app">
    <NavBar />
    <Route path="/" exact>
      <Homepage />
    </Route>
    <Footer />
  </div>
);

export default App;
