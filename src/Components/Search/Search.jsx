import React from "react";
import {Field, reduxForm} from "redux-form";
import css from "./Search.module.css"
import {NavLink} from "react-router-dom";

let Search=(props)=>{
    let onSearchMovie = (values) => {
        props.searchMovie(values.search);
    };
    return <SearchFormRedux onSubmit={onSearchMovie}/>
};

let searchForm=(props)=>{
    return <NavLink to={'/search'}>
        <form onSubmit={props.handleSubmit} className={css.form}>
            <Field component={"input"} name={"search"} placeholder={"Search"} autoComplete={"off"}/>
        </form>
    </NavLink>
};

const SearchFormRedux=reduxForm({form:"search"})(searchForm);

export default Search;