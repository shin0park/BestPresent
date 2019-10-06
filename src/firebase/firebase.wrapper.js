import firebase from 'firebase';
import dotenv from 'dotenv'

dotenv.config();
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
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
const dataModule = {
  addUser: async (email, name) => {
    await resources.database.collection('Users').doc(email).set({
      email: email,
      name: name
    });
  },
  readUser: async (email) => {
    try {
      const doc = await resources.database.collection('Users').doc(email).get();
      if (!doc.exists) {
        return null;
      } else {
        return doc.data();
      }

    } catch (e) {
      return e;
    }
  },
}

export { authModule, dataModule};
