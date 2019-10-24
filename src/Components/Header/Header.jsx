import React from "react";
import css from "./Header.module.css"
import Nav from "../Nav/Nav";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <div className={css.header}>
        <NavLink  to='/popular' className={css.logo}><h1 tabIndex={10} className={css.color}>Just</h1><h1>Movie</h1></NavLink>
        <Nav {...props}/>
    </div>
};

export default Header;