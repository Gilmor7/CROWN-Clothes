import React, { useState, useEffect, useRef } from 'react';
import { Route, Switch } from 'react-router-dom'

import { auth } from './firebase/firebase.utils'

import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import NavBar from './components/NavBar'
import AuthPage from './pages/AuthPage/AuthPage'

import GlobalStyles from './styles/global.styles'

function App() {

  const [currentUser, set_currentUser] = useState(null)
  const unsubscribeFromAuth = useRef(null);

  useEffect(() => {

    unsubscribeFromAuth.current = auth
      .onAuthStateChanged(user => {
        set_currentUser(user)
        console.log(user)
      })


    return () => {
      unsubscribeFromAuth.current()
    };
  }, [])

  return (
    <React.Fragment>
      <GlobalStyles />
      <div>
        <NavBar currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={AuthPage} />
        </Switch>
      </div>
    </React.Fragment>

  );
}

export default App;
