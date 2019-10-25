import React from "react";
import css from "./ProfileMenu.module.css";
import {NavLink} from "react-router-dom";
import Language from "../Language/Language";
import {faBars, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

let ProfileMenu = ({language,profile, ...props}) => {
    console.log(props);
    let initials=profile.initials?profile.initials:props.auth.displayName.split(" ").map((x)=>(x[0]));
    return <div className={css.menu}>
        <input type="checkbox" id={css.menuButton} /><label htmlFor={css.menuButton} className={css.button}><FontAwesomeIcon icon={faBars}/></label>
        <nav className={css.menuWrapper}>
            <h3 className={css.initials}>{initials}</h3>
            <NavLink to={'/sign_in'} className={css.navLink} onClick={props.Logout}
                     activeClassName={css.activeNavLink}><FontAwesomeIcon
                icon={faSignOutAlt}/>
                {language === "en-US" ? "Log out" : "Выйти"}
            </NavLink>
            <div >
                <Language {...props}/>
            </div>
        </nav>
    </div>
};

export default ProfileMenu;
