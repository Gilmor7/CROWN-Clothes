import React, { useState, useEffect, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';

import { auth } from './services/firebase/firebase.auth';
import { createUserProfileDocument } from './services/firebase/firebase.firestore';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import NavBar from './components/NavBar';
import AuthPage from './pages/AuthPage/AuthPage';

import GlobalStyles from './styles/global.styles';

function App() {

  const [currentUser, set_currentUser] = useState(null)
  const unsubscribeFromAuth = useRef(null);

  useEffect(() => {
    //subscribe for auth state changes and save the 
    //unsubscribe function we get for preventing memory leak when 
    //component will unmount
    unsubscribeFromAuth.current = auth
      .onAuthStateChanged(async userAuth => {
        if (userAuth) {
          //get user ref from createUserProfileDocument
          const userRef = await createUserProfileDocument(userAuth);

          //listen to snapshot changes and set the currentUser 
          // with the snaphot user data we get
          userRef.onSnapshot(snapshot => {
            set_currentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
          })

        }

        //there is not authenticated user so set to current user to null
        else set_currentUser(userAuth);

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
