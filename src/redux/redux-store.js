import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import searchMovieReducer from "./searchMovie-reducer";
import {reducer as formReducer} from 'redux-form';



let reducers = combineReducers({
    search: searchMovieReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;