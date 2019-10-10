import React from "react";
import logoIcon from "../../assets/images/LogoMakr_2bgndz.png"
import css from "./Header.module.css"
const Header=()=>{
    return <div className={css.header}>
        <div className={css.logo}>
            <img src={logoIcon} alt="logo-icon"/>
        </div>
    </div>
};

export default Header;