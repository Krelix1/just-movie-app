import React from "react";
import css from "./MovieDescription.module.css"
import defPoster from "../../../assets/images/default-movie-1-3.jpg";
import Rating from "../../common/Rating/Rating";
import Genres from "../../common/Genres/Genres";
import YouTube from "react-youtube";


let MovieDescription = (props) => {
    let imgPath = (props.movie.poster_path) ? `https://image.tmdb.org/t/p/w500${props.movie.poster_path}` : defPoster;
    return <div className={css.movieDescriptionWrapper}>
        <div className={css.poster}>
            <img src={imgPath} alt="poster"/>
        </div>
        <div className={css.aboutMovie}>
            <h3 className={css.title}>{props.movie.title}</h3>
            <Rating bgc={false} rating={props.movie.vote_average}/>
            <div className={css.rating}>
                {props.language === "en-US" ? "Vote average: " : "Оценка: "}{props.movie.vote_average}
                <br/><br/>
                {props.language==="en-US"?"Release:":"Дата выхода:"} {(props.movie.release_date) && props.movie.release_date.replace(/-/g,".")}
            </div>
            <p className={css.overview}>{props.movie.overview}</p>
            <div className={css.genres}>
                <Genres movieGenres={props.genres}/>
            </div>
            {props.video && <div className={css.video}>
                <YouTube videoId={props.video}/>
            </div>}
        </div>
    </div>
};

export default MovieDescription;