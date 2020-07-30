import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
{
    apiKey: "AIzaSyDSkTkJZOiD7NCWeVgEV9S9mAi3ez0Pv1g",
    authDomain: "crown-72491.firebaseapp.com",
    databaseURL: "https://crown-72491.firebaseio.com",
    projectId: "crown-72491",
    storageBucket: "crown-72491.appspot.com",
    messagingSenderId: "769510371560",
    appId: "1:769510371560:web:3fa3a2f172de8c5542995d",
    measurementId: "G-0SW94LYF1G"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
