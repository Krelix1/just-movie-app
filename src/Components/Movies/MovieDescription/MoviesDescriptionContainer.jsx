import React from "react";
import {connect} from "react-redux";
import MovieDescription from "./MovieDescription";
import {setMovieById} from "../../../redux/searchMovie-reducer";
import Preloader from "../../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class MoviesDescriptionContainer extends React.Component {
    componentDidMount() {
        let movieId = this.props.match.params.movieId;
        this.props.setMovieById(movieId);
        console.log(this.props.isFetching);
    }

    render() {
        return (this.props.isFetching) ? <Preloader/> : <MovieDescription {...this.props}/>;
    }
}


const mapStateToProps = (state) => ({
    isFetching: state.search.isFetching,
    movie: state.search.movieById,
    genres: state.search.genres
});

export default compose(withRouter,connect(mapStateToProps, {setMovieById}))(MoviesDescriptionContainer);