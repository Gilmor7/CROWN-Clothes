import React from 'react';

import HomePage from './pages/HomePage';
import GlobalStyles from './styles/global.styles';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <div>
        <HomePage />
      </div>
    </React.Fragment>

  );
}

export default App;
