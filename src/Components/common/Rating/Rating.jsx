import React from "react";
import css from "./Rating.module.css";
import FontAwesome from "react-fontawesome";

function Rating(props) {
    let rate = Math.round(props.rating/2)
    return <ul className={css.starList} >
        <FontAwesome name={"star"} className={rate >= 1 ? css.checked : css.star}/>
        <FontAwesome name={"star"} className={rate >= 2 ? css.checked : css.star}/>
        <FontAwesome name={"star"} className={rate >= 3 ? css.checked : css.star}/>
        <FontAwesome name={"star"} className={rate >= 4 ? css.checked : css.star}/>
        <FontAwesome name={"star"} className={rate === 5 ? css.checked : css.star}/>
    </ul>
}

export default Rating;