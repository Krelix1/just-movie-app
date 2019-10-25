import React from "react";
import {Field, reduxForm} from "redux-form";
import css from "./Auth.module.css";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withFirebase} from "react-redux-firebase";


let SignUp = (props) => {

    let fireLogin = (value) => {
        props.SignUpUser(
            value.email,
            value.password,
            value.firstName,
            value.lastName,
            props
        );
    };
    return props.auth.uid ? <Redirect to={'/popular'}/> : <ReduxLoginForm onSubmit={fireLogin}/>;
};

const SignUpForm = (props) => {
    return props.auth.uid
        ? <Redirect to={'/popular'}/>
        : <div className={css.formWrapperUp}>
            <form onSubmit={props.handleSubmit} className={css.form}>
                <h3>{props.language === "en-US" ? "Sign Up" : "Регистрация"}</h3>
                <Field component={"input"} type={"text"} name={"firstName"}
                       placeholder={props.language === "en-US" ? "First name" : "Имя"} autoComplete={"off"} required/>
                <Field component={"input"} type={"text"} name={"lastName"}
                       placeholder={props.language === "en-US" ? "Last name" : "Фамилия"} autoComplete={"off"}
                       required/>
                <Field component={"input"} type={"email"} name={"email"}
                       placeholder={props.language === "en-US" ? "Mail" : "Почта"} required/>
                <Field component={"input"} type={"password"} name={"password"}
                       placeholder={props.language === "en-US" ? "Password" : "Пароль"} required/>
                {props.error ? <span className={css.error}>{props.error}</span> : null}
                <button type={"submit"}>{props.language === "en-US" ? "Sign Up" : "Зарегистрироваться"}</button>
            </form>
        </div>

};

let mapStateToProps = (state) => ({
    error: state.auth.error,
    isAuth: state.auth.isAuth,
    auth: state.firebase.auth,
    language: state.app.language
});
const ReduxLoginForm = compose(reduxForm({form: "SignUp"}), connect(mapStateToProps),withFirebase)(SignUpForm);
export default SignUp;
