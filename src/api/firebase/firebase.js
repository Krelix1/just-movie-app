import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const fbConfig  = {
    apiKey: "AIzaSyDXxlQ15upXiCxdqrrzhPwOMPfYWAAyZ2U",
    authDomain: "justmovie-df8c3.firebaseapp.com",
    databaseURL: "https://justmovie-df8c3.firebaseio.com",
    projectId: "justmovie-df8c3",
    storageBucket: "justmovie-df8c3.appspot.com",
    messagingSenderId: "886836535660",
    appId: "1:886836535660:web:9a7611d2fb3fb432d2d349"
};
firebase.initializeApp(fbConfig);
firebase.firestore();

export const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile:true
};


export default firebase;