import React from "react";
import {Field, reduxForm} from "redux-form";
import css from "./Search.module.css"
import history from "../../History";

let Search=(props)=>{
    let onSearchMovie = (values) => {
        props.searchMovie(values.search);
        history.push('/search');
    };
    return <SearchFormRedux onSubmit={onSearchMovie}/>
};

let searchForm=(props)=>{
    return <form onSubmit={props.handleSubmit} className={css.form}>
        <Field component={"input"} name={"search"} placeholder={"Search"} autoComplete={"off"}/>
    </form>
};

const SearchFormRedux=reduxForm({form:"search"})(searchForm);

export default Search;