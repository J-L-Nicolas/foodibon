import app from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import firestore from '@react-native-firebase/firestore';


const initState = {

    /* auth */
    auth: () => auth(),
    register: (email, password) => auth().createUserWithEmailAndPassword(email, password),
    login: (email, password) => auth().signInWithEmailAndPassword(email, password),
    signOut: () => auth().signOut(),
    subscriber: () => auth().onAuthStateChanged(),

    /* Messaging */
    messaging: () => messaging(),

    /* firestore */
    firestore: () => firestore(),
                /* --------------------------querry message */
    addMessage: (msg,token) => firestore().collection('message').add({msg: msg, token}),
                    /* --------------------------querry product */
    readListProducts: () => firestore().collection('products'),
                    /* --------------------------querry categories */
    readListCategories: () => firestore().collection('categories'),
                    /* --------------------------querry cardList */
    readListCard: () => firestore().collection('card'),
    

}

const Firebase = (state = initState, action) => {

    return state
}

export default Firebase
