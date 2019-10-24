import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import css from "./Search.module.css"
import {withRouter} from "react-router-dom";
import Filter from "../common/Filter/Filter";

let Search = (props) => {
    let [show, setShow] = useState(window.innerWidth > 1080);
    let onChangeShow = () => {
        window.innerWidth < 1080 && show ? setShow(false) : setShow(true);
    };
    let onSearchMovie = (values) => {
        props.history.push(`/search/${values.search}`);
        props.setCurrentFilters(values.filter)
    };
    return (props.location.pathname !== "/sign_in" && props.location.pathname !== "/sign_up") &&
        <SearchFormRedux show={show} onSubmit={onSearchMovie} language={props.language}
                         onChangeShow={onChangeShow}/>


};

let searchForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={css.form}>
        <Field component={"input"} type={'text'} name={"search"} className={css.input}
               placeholder={props.language === "en-US" ? "Search" : "Поиск"} autoComplete={"off"}
               onClick={props.onChangeShow}/>
        <h3 className={props.show ? css.filter : css.hidden}>{props.language === "en-US" ? "Filters" : "Фильтры"}</h3>
        <div className={props.show ? css.filters : css.hidden}>
            <Filter name={"date"} rus={"Дата"} lang={props.language}/>
            <Filter name={"vote"} rus={"Оценка"} lang={props.language}/>
            <Filter name={"title"} rus={"Название"} lang={props.language}/>
            <Filter name={"popularity"} rus={"популярность"} lang={props.language}/>
        </div>
        <button className={props.show ? css.button : css.hidden}
                onClick={props.handleSubmit}>{props.language === "en-US" ? "Search" : "Поиск"}</button>
    </form>
};

const SearchFormRedux = reduxForm({form: "search"})(searchForm);

export default withRouter(Search);