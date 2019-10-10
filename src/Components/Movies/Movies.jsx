import React from "react";
import css from "./Movies.module.css"
import MovieDescription from "./MovieDescription/MovieDescription";
import Paginator from "../common/Paginator/Paginator";
import Preloader from "../common/Preloader/Preloader";

function Movies({pageSize, movies, currentPage, totalMoviesCount, ...props}) {
    if(props.isFetching) return <Preloader/> ;
    return <div className={css.movieWrapper}>
        <div className={css.movieContent}>{movies
            .filter((movie, index) => (index + 1 <= pageSize * currentPage))
            .map((movie, index) => (index + 1 <= pageSize * currentPage && index + 1 > pageSize * (currentPage - 1)) &&
                <MovieDescription movie={movie} key={index} genres={props.genres}/>)}</div>
        <Paginator currentPage={currentPage}
                   pageSize={pageSize}
                   totalMoviesCount={totalMoviesCount}
                   onPageChange={props.onPageChange}
        />
    </div>
}

export default Movies;