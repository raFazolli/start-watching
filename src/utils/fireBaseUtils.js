import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB0FigB6Yg2SPSCnLmB0IaOW8diDpOycLY",
    authDomain: "start-watching-1991.firebaseapp.com",
    databaseURL: "https://start-watching-1991.firebaseio.com",
    projectId: "start-watching-1991",
    storageBucket: "start-watching-1991.appspot.com",
    messagingSenderId: "367021380419",
    appId: "1:367021380419:web:005a56da7550a00b5d55f6"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();