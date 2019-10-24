import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const fbConfig = {
    apiKey: "AIzaSyAK03gXcQ7w58exBYlNJL_fekfBZskdq_Q",
    authDomain: "justmovie-2a281.firebaseapp.com",
    databaseURL: "https://justmovie-2a281.firebaseio.com",
    projectId: "justmovie-2a281",
    storageBucket: "justmovie-2a281.appspot.com",
    messagingSenderId: "690569917077",
    appId: "1:690569917077:web:7e25872cc4cdf0ae65619c"

};
firebase.initializeApp(fbConfig);
firebase.firestore();

export const rrfConfig = {
    userProfile: 'users'
};


export default firebase;