import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from '../NavBar';
import Homepage from '../Homepage';

const App = () => (
  <div className="app">
    <NavBar />
    <Route path="/" exact>
      <Homepage />
    </Route>
  </div>
);

export default App;
