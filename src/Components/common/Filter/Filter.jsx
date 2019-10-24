import React from "react";
import css from "../../Search/Search.module.css";
import {Field} from "redux-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltDown, faLongArrowAltUp} from "@fortawesome/free-solid-svg-icons";

const Filter = ({name, lang, rus}) => {
    return <div className={css.date}>
        <span>{lang === "en-US" ? name : rus}</span>
        <div className={css.dateInput}>
            <div className={css.up} tabIndex={8}>
                <label htmlFor={"input1"}>
                    <Field component={"input"} type={'radio'} name={"filter"}
                           value={name + "Down"}
                           className={css.radio}/>
                    <FontAwesomeIcon icon={faLongArrowAltUp}/>
                </label>
            </div>
            <div className={css.down} tabIndex={9}>
                <label>
                    <Field component={"input"} type={'radio'} name={"filter"}
                           value={name + "Up"}
                           className={css.radio}/>
                    <FontAwesomeIcon icon={faLongArrowAltDown}/>
                </label>
            </div>
        </div>
    </div>
};

export default Filter;