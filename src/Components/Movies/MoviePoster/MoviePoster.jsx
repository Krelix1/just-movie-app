import React from "react";
import css from "./MoviePoster.module.css"
import defPoster from "../../../assets/images/default-movie-1-3.jpg";
import Rating from "../../common/Rating/Rating";
import {NavLink} from "react-router-dom";
import Genres from "../../common/Genres/Genres";

const MoviePoster = ({movie, genres,language, ...props}) => {
    let imgpath = (movie.poster_path) ? `https://image.tmdb.org/t/p/w185${movie.poster_path}` : defPoster;

    return <NavLink to={`/movie/${movie.id}`} className={css.movie}>
        <img src={imgpath} alt={movie.title}/>
        <Rating  bgc={true} rating={movie.vote_average}/>
        <div className={css.movieDescription}>
            <div className={css.info}>
                <h3 className={css.title}>{movie.title}</h3>
                <span className={css.rate}>{language==="en-US"?"Vote average:":"Оценка:"} {movie.vote_average}</span>
                <span className={css.date}>{language==="en-US"?"Release:":"Дата выхода:"} {(movie.release_date) && movie.release_date.replace(/-/g,".")}</span>
                <Genres movieGenres={movie.genre_ids} genres={genres}/>
            </div>
        </div>
    </NavLink>
};
export default MoviePoster;