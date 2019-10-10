import React from "react";
import preloader from "../../../assets/images/Spinner-1s-200px.svg";
import css from "./Preloader.module.css";

const Preloader=()=>{
    return <div className={css.preloader}>
        <img src={preloader} alt="preloader"/>
    </div>
};

export default Preloader;