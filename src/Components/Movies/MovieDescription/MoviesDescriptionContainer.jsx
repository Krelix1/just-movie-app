import React from "react";
import {connect} from "react-redux";
import MovieDescription from "./MovieDescription";
import {setMovieById} from "../../../redux/movie-reducer";
import Preloader from "../../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withFirestore} from "react-redux-firebase";


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
    language:state.firebase.profile.language?state.firebase.profile.language:state.app.language

});

export default compose(withRouter,withFirestore, connect(mapStateToProps, {setMovieById}))(MoviesDescriptionContainer);