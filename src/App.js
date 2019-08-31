import React from 'react';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import NavBar from './components/NavBar'

import GlobalStyles from './styles/global.styles';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    </React.Fragment>

  );
}

export default App;
