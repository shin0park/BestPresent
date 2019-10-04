import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBXqeyMIREFSAUYDgxiqTQWJlj4ImZ3Qc8",
  authDomain: "bp-best-present.firebaseapp.com",
  databaseURL: "https://bp-best-present.firebaseio.com",
  projectId: "bp-best-present",
  storageBucket: "bp-best-present.appspot.com",
  messagingSenderId: "724917200850",
  appId: "1:724917200850:web:ebdfda6368b7e776410a0b",
  measurementId: "G-H66P8S16WK"
};
firebase.initializeApp(config);

const resources = {
  auth: firebase.auth(),
  provider: new firebase.auth.GoogleAuthProvider(),
  database: firebase.firestore(),
  storage: firebase.storage(),
};

const providerFB = new firebase.auth.FacebookAuthProvider();
providerFB.addScope('user_birthday');
providerFB.addScope('user_gender');

const authModule = {
  googleLogin: async () => await resources.auth.signInWithPopup(resources.provider),
  facebookLogin: async() => await firebase.auth().signInWithPopup(providerFB)
};


export { authModule};
