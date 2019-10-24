import React from "react";
import css from "./Language.module.css"

let Language = (props)=>{
    let changeLang=(lang)=>{
        props.setLanguageCreator(lang);
        props.setLanguageMovieCreator(lang);
        props.setLanguageSearchCreator(lang);
        props.setLanguageNavCreator(lang)
    };
    return <ul className={css.language}>
        <li tabIndex={6} onClick={()=>{changeLang("ru-RU")}}>ru</li>
        <li tabIndex={7} onClick={()=>{changeLang("en-US")}}>en</li>
    </ul>
};

export default Language;
