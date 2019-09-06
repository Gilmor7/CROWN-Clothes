import firebase from './firebase.config';
import 'firebase/firestore';

export const createUserProfileDocument = async (userAuth, additionalData) => {
    //check for user authenticated
    if (!userAuth) return;

    //getting a docRef 
    // (just a reference to the document in memory always return object)
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    //gettitng the doc snapshot (return object of document snapshot)
    //always return object of doc snapshot (with exists property for checking)
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        //user does not saved to DB
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            //save the user to DB (for this we need to use the docRef not the snapshot)
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (err) {
            console.log('error creating user', err.message);
        }
    }

    //return the userRef for apply additional operations from outside the function
    return userRef;
};

//distribute firestore to use in other files
export const firestore = firebase.firestore();