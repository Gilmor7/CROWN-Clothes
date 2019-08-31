import React from 'react';
import { Route } from 'react-router-dom'

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

import GlobalStyles from './styles/global.styles';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </div>
    </React.Fragment>

  );
}

export default App;
