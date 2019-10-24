import React from "react";
import ReactDOM from "react-dom";
import "normalize.css"
import "./index.css"
import "./assets/fonts/Segoe/style.css"
import "./assets/fonts/reset.css"
import 'font-awesome/css/font-awesome.min.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store, {rrfProps} from "./redux/redux-store";
import {ReactReduxFirebaseProvider} from "react-redux-firebase";


ReactDOM.render(
    <BrowserRouter>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ReactReduxFirebaseProvider>
    </BrowserRouter>, document.getElementById('root'));
serviceWorker.register();


window.state = store.getState();
