import React, { useEffect, useRef } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//firebase imports
import { auth } from './services/firebase/firebase.auth';
import { createUserProfileDocument } from './services/firebase/firebase.firestore';

//redux imports
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/actions/user.actions';

//react components imports
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import NavBar from './components/NavBar';
import AuthPage from './pages/AuthPage/AuthPage';

import GlobalStyles from './styles/global.styles';

function App({ currentUser, setCurrentUser }) {

  const unsubscribeFromAuth = useRef(null);
  const unsubscribeFromSnapShot = useRef(null);

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
          unsubscribeFromSnapShot.current = userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
          });

        }

        //there is not authenticated user so set to current user to null
        else setCurrentUser(userAuth);

      })

    return () => {
      unsubscribeFromAuth.current();
      unsubscribeFromSnapShot.current();
    };

  }, []);

  return (
    <React.Fragment>
      <GlobalStyles />
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            path="/signin"
            render={() => currentUser ?
              <Redirect to="/" />
              :
              <AuthPage />}
          />
        </Switch>
      </div>
    </React.Fragment>

  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
