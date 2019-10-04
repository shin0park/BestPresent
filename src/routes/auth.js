const express = require('express');
const firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");
require('dotenv').config();

const router = express.Router();
const firebaseConfig = {
    apiKey: "AIzaSyBXqeyMIREFSAUYDgxiqTQWJlj4ImZ3Qc8",
    authDomain: "bp-best-present.firebaseapp.com",
    databaseURL: "https://bp-best-present.firebaseio.com",
    projectId: "bp-best-present",
    storageBucket: "bp-best-present.appspot.com",
    messagingSenderId: "724917200850",
    appId: "1:724917200850:web:ebdfda6368b7e776410a0b",
    measurementId: "G-H66P8S16WK"
};
firebase.initializeApp(firebaseConfig);

router.post('/', (req, res, next) => {
    console.log('post ACCESS');
    let msg = req.body.msg;
    console.log(msg);

    console.log(firebase);
    // const resources = {
    //     auth: firebase.auth(),
    //     provider: new firebase.auth.GoogleAuthProvider(),
    //     database: firebase.firestore(),
    //     storage: firebase.storage(),
    // };
    // console.log(resources);
    try {
        console.log('rtrysfd');
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = firebase.auth().signInWithPopup(provider);
        // const authModule = {
        //     googleLogin: async () => await resources.auth.signInWithPopup(resources.provider),
        //     facebookLogin: async () => await firebase.auth().signInWithPopup(providerFB)
        // };
        // const res = authModule.googleLogin();
        console.log('result');
        console.log(result);
        const user = {
            "user": result.user,
            "email": result.user.email,
            "displayName": result.user.displayName,
        };
        return res.json(user);
    } catch (error) {
        console.error(error);
        return next(error);
    }
});
module.exports = router;