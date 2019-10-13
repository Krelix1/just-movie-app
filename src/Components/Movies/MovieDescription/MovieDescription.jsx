import React from "react";
import css from "./MovieDescription.module.css"
import defPoster from "../../../assets/images/default-movie-1-3.jpg";


function MovieDescription({movie, ...props}) {
    let imgPath = (movie.poster_path) ? `https://image.tmdb.org/t/p/w185${movie.poster_path}` : defPoster;
    return <div className={css.movieDescriptionWrapper}>
        <img src={imgPath} alt=""/>
        <div className={css.aboutMovie}>
            <h3>{movie.title}</h3>
        </div>
    </div>
}

export default MovieDescription;