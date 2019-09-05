import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


//config object i get from firebase at the project console
const firebaseConfig = {
  apiKey: "AIzaSyBoMdL4pgcXbHxnybYaBoaJynxDeTxWBHk",
  authDomain: "crwn-db-af4fa.firebaseapp.com",
  databaseURL: "https://crwn-db-af4fa.firebaseio.com",
  projectId: "crwn-db-af4fa",
  storageBucket: "",
  messagingSenderId: "271358533850",
  appId: "1:271358533850:web:87dcfad7671161ab"
};

firebase.initializeApp(firebaseConfig)  //firebase initialization

//distribute firebase auth and firestore
export const auth = firebase.auth()
export const firestore = firebase.firestore()


//set up google authentication for the website 
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)