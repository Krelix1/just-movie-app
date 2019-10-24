import React from "react";
import css from "../../Movies/MoviePoster/MoviePoster.module.css";

const Genres = ({movieGenres, genres, ...props}) => {
    let movieGenresResult = [];
    if(genres) {
        let getGenres = (id) => {
            genres.forEach(v => {
                if (v.id === id) movieGenresResult.push(v.name);
            })
        };
        movieGenres.forEach(v => {
            getGenres(v)
        });
    }else{
        movieGenres.forEach(v=>{
            movieGenresResult.push(v.name)
        })
    }
    return <div className={css.genres}>
        {movieGenresResult.map((genre, index) => <div
            className={css.genre} key={index}> {genre + "  "} </div>)}
    </div>
};


export default Genres;