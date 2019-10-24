import React from "react";
import {Field, reduxForm} from "redux-form";
import css from "./Auth.module.css";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withFirebase} from "react-redux-firebase";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {Login, LoginWithNetworks} from "../../redux/auth-reducer";


let SignIn = (props) => {

    let fireLogin = (value) => {
        props.Login({email: value.email, password: value.password});
    };
    return props.auth.uid ? <Redirect to={'/popular'}/> : <ReduxLoginForm onSubmit={fireLogin}/>;
};

const LoginForm = (props) => {
    function loginWithGoogle() {
        props.LoginWithNetworks({provider: 'google', type: 'redirect'});
    }
    return props.auth.uid
        ? <Redirect to={'/popular'}/>
        : <div className={css.formWrapper}>
            <form onSubmit={props.handleSubmit} className={css.form}>
                <h3>{props.language==="en-US"?"Sign In":"Вход"}</h3>
                <Field component={"input"} type={"email"} name={"email"} placeholder={props.language==="en-US"?"Mail":"Почта"}/>
                <Field component={"input"} type={"password"} name={"password"} placeholder={props.language==="en-US"?"Password":"Пароль"} required/>
                {props.error ? <span className={css.error}>{props.error}</span> : null}
                <button type={"submit"}>{props.language==="en-US"?"Sign In":"Войти"}</button>
            </form>
            <div className={css.socialButtons}>
                <FontAwesomeIcon icon={faGoogle} onClick={loginWithGoogle}/>
            </div>
        </div>

};

let mapStateToProps = (state) => ({
    error: state.auth.error,
    isAuth: state.auth.isAuth,
    auth: state.firebase.auth,
    language: state.app.language
});
const ReduxLoginForm = compose(reduxForm({form: "SignIn"}), connect(mapStateToProps, {
    Login,
    LoginWithNetworks
}), withFirebase)(LoginForm);
export default SignIn;
