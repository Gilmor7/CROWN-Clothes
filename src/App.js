import React from 'react';
import { Route } from 'react-router-dom'

import HomePage from './pages/HomePage';
import GlobalStyles from './styles/global.styles';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <div>
        <Route exact path="/" component={HomePage} />
      </div>
    </React.Fragment>

  );
}

export default App;
