import React from "react";
import css from "./Language.module.css"
import {connect} from "react-redux";
import {SetLanguage} from "../../../redux/app-reducer";
import {compose} from "redux";
import {withFirestore} from "react-redux-firebase";

let Language = (props) => {
    let changeLang = (lang) => {
        props.SetLanguage(lang, props.uid, props);
    };
    return <ul className={css.language}>
        <li tabIndex={6} onClick={()=>changeLang("ru-RU")}>ru</li>
        <li tabIndex={7} onClick={()=>changeLang("en-US")}>en</li>
    </ul>
};
let mapStateToProps = (state) => ({
    language: state.app.language,
    uid: state.firebase.auth.uid
});

export default compose(withFirestore, connect(mapStateToProps, {SetLanguage}))(Language);
