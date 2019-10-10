import React from "react";
import css from "./MovieDescription.module.css"
import defPoster from "../../../assets/images/default-movie-1-3.jpg";
import Rating from "../../common/Rating/Rating";

const MovieDescription = ({movie, genres, ...props}) => {
    let movieGenres = [];
    let getGenres = (id) => {
        genres.forEach(v => {
            if (v.id === id) movieGenres.push(v.name);
        })
    };
    movie.genre_ids.forEach(v => {
        getGenres(v)
    });

    let imgpath = (movie.poster_path) ? `https://image.tmdb.org/t/p/w185${movie.poster_path}` : defPoster;

    return <div className={css.movie}>
        <img src={imgpath} alt={movie.title}/>
        <h3>{movie.title}</h3>
        <Rating rating={movie.vote_average}/>
        <a className={css.movieDescription}>
            <div className={css.info}>
                <span className={css.rate}>Vote average: {movie.vote_average}</span>
                <span className={css.date}>Release date: {movie.release_date.split("-")[0]}</span>
                <div className={css.genres}>{movieGenres.map(genre => <span
                    className={css.genre}> {genre + "  "} </span>)}</div>
            </div>
        </a>
    </div>
}
export default MovieDescription;