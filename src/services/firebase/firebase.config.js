import firebase from 'firebase/app'

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

//firebase initialization
firebase.initializeApp(firebaseConfig)

//distribute firebase to other files
export default firebase




