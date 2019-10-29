import React, {useState} from "react";
import css from "./Nav.module.css"
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faClock, faFireAlt, faPlay, faStar, faUserPlus,faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import Language from "../common/Language/Language";
import ProfileMenuContainer from "../ProfileMenu/ProfileMenuContainer";


function Nav({language, ...props}) {
    let [show, setShow] = useState(false);
    let toggleShow = () => {
        if (window.innerWidth < 1024) show ? setShow(false) : setShow(true);
    };
    return <nav>
        <div className={css.menu} onClick={toggleShow}><FontAwesomeIcon icon={faBars}/></div>
        <ul className={(show) ? css.nav : css.show} onClick={toggleShow}>
            <NavLink to={'/popular'} className={css.navLink} activeClassName={css.activeNavLink}><FontAwesomeIcon
                icon={faFireAlt}/> {language === "en-US" ? "Popular" : "Популярные"}</NavLink>
            <NavLink to={'/top'} className={css.navLink} activeClassName={css.activeNavLink}><FontAwesomeIcon
                icon={faStar}/> {language === "en-US" ? "Top Rated" : "Лучшие"}</NavLink>
            <NavLink to={'/coming'} className={css.navLink} activeClassName={css.activeNavLink}><FontAwesomeIcon
                icon={faClock}/>{language === "en-US" ? "Upcoming" : "Ближайшие"}</NavLink>
            <NavLink to={'/now_playing'} className={css.navLink}
                     activeClassName={css.activeNavLink}><FontAwesomeIcon
                icon={faPlay}/>{language === "en-US" ? "Now Playing" : "В кино"}</NavLink>
            {props.auth.uid
                ?<ProfileMenuContainer/>
                : <div className={css.sign}>
                    <NavLink to={'/sign_in'} className={css.navLink}
                             activeClassName={css.activeNavLink}><FontAwesomeIcon
                        icon={faSignInAlt}/>
                        {language === "en-US" ? "Sign in" : "Войти"}
                    </NavLink>
                    <NavLink to={'/sign_up'} className={css.navLink}
                             activeClassName={css.activeNavLink}><FontAwesomeIcon
                        icon={faUserPlus}/>
                        {language === "en-US" ? "Sign up" : "Рег..."}
                    </NavLink>
                    <div >
                        <Language {...props}/>
                    </div>
                </div>
            }
        </ul>
    </nav>
}

export default Nav;