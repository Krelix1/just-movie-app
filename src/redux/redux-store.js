import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import searchMovieReducer from "./searchMovie-reducer";
import {reducer as formReducer} from 'redux-form';
import movieReducer from "./movie-reducer";
import navMovieReducer from "./navMovie-reducer";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import {firebaseReducer, getFirebase} from "react-redux-firebase";
import {createFirestoreInstance, firestoreReducer} from 'redux-firestore'
import firebase from "firebase";
import {rrfConfig} from "../api/firebase/firebase";


let reducers = combineReducers({
    search: searchMovieReducer,
    form: formReducer,
    movie: movieReducer,
    nav: navMovieReducer,
    app: appReducer,
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

let store = createStore(reducers, applyMiddleware(thunk.withExtraArgument(getFirebase)));
export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};

export default store;