import firebase from './firebase.config'
import 'firebase/auth'


//set up google authentication for the website and distribute function to do so
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

//distribute firebase.auth to use in other files
export const auth = firebase.auth()