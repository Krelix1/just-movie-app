import React from "react";
import {connect} from "react-redux";
import MovieDescription from "./MovieDescription";
import {setMovieById} from "../../../redux/movie-reducer";
import Preloader from "../../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class MoviesDescriptionContainer extends React.Component {
    componentDidMount() {
        this.props.setMovieById(this.props.match.params.movieId,this.props.language);
    }
    componentDidUpdate(nextProps) {
        (nextProps.match.params.movieId !== this.props.match.params.movieId)&&this.props.setMovieById(this.props.match.params.movieId,this.props.language);
        (nextProps.language !== this.props.language)&&this.props.setMovieById(this.props.match.params.movieId,this.props.language);
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <MovieDescription {...this.props}/>}
        </>
    }
}

const mapStateToProps = (state) => ({
    genres: state.movie.genres,
    isFetching: state.movie.isFetching,
    movie: state.movie.movieById,
    video: state.movie.video,
    language: state.movie.language
});

export default compose(withRouter, connect(mapStateToProps, {setMovieById}))(MoviesDescriptionContainer);