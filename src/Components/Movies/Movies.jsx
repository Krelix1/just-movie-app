import React from "react";
import css from "./Movies.module.css"
import MoviePoster from "./MoviePoster/MoviePoster";
import Paginator from "../common/Paginator/Paginator";
import Preloader from "../common/Preloader/Preloader";

function Movies({pageSize, currentPage=1, totalMoviesCount,movies, ...props}) {
    if (movies.length === 0) return <h1 className={css.preSearch}>A lot of movies wait you!</h1>;
    if (props.isFetching) return <Preloader className={css.preloader}/>;
    return <div className={css.movieWrapper}>
        <div className={css.movieContent}>{
            (props.sort)?movies.sort(props.filters[props.currentFilter]).filter((m, i) => (i + 1 <= pageSize * currentPage))
                .map((m, i) => (i + 1 <= pageSize * currentPage && i + 1 > pageSize * (currentPage - 1)) && <MoviePoster movie={m} key={i} genres={props.genres} language={props.language}/>)
       : movies.filter((m, i) => (i + 1 <= pageSize * currentPage))
            .map((m, i) => (i + 1 <= pageSize * currentPage && i + 1 > pageSize * (currentPage - 1)) &&
            <MoviePoster movie={m} key={i} genres={props.genres} language={props.language}/>)
        }</div>
        <Paginator currentPage={currentPage}
                   pageSize={pageSize}
                   totalMoviesCount={totalMoviesCount}
                   onPageChange={props.onPageChange}
                   language={props.language}
        />
    </div>
}

export default Movies;