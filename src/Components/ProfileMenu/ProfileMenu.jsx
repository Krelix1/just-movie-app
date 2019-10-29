import React from "react";
import css from "./ProfileMenu.module.css";
import {NavLink} from "react-router-dom";
import Language from "../common/Language/Language";
import {faBars, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

let ProfileMenu = ({profile, ...props}) => {
    let language = profile.language ? profile.language : props.language;
    let initials = profile.initials ? profile.initials : profile.displayName && profile.displayName.split(" ").map(name => name[0]);
    let photoURL = profile.avatarUrl && <img src={profile.avatarUrl} alt="avatar"/>;
    return <div className={css.menu}>
        <input type="checkbox" id={css.menuButton} className={css.menuButton}/><label htmlFor={css.menuButton}
                                                                                      className={css.button}><FontAwesomeIcon
        icon={faBars}/></label>
        <nav className={css.menuWrapper}>
            <h3 className={css.avatar}>{photoURL ? photoURL : initials}</h3>
            <NavLink to={'/sign_in'} className={css.navLink} onClick={props.Logout}
                     activeClassName={css.activeNavLink}><FontAwesomeIcon
                icon={faSignOutAlt}/>
                {language === "en-US" ? "Log out" : "Выйти"}
            </NavLink>
            <div>
                <Language {...props}/>
            </div>
        </nav>
    </div>
};

export default ProfileMenu;
