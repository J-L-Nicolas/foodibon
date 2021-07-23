import auth from '@react-native-firebase/auth';

const initState = {

    /* auth */
    auth: () => auth(),
    register: (email, password) => auth().createUserWithEmailAndPassword(email, password),
    login: (email, password) => auth().signInWithEmailAndPassword(email, password),
    signOut: () => auth().signOut(),
    subscriber: () => auth().onAuthStateChanged()
}

const Firebase = (state = initState, action) => {

    return state
}

export default Firebase
