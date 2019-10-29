import React from "react";
import {connect} from "react-redux";
import Movies from "./Movies"
import {onPageChangeCreator, searchMovie} from "../../redux/searchMovie-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {withFirestore} from "react-redux-firebase";

class MoviesContainer extends React.Component {
    componentWillMount() {
        this.props.searchMovie(this.props.match.params.movieName,this.props.language);
    }

    componentDidUpdate(nextProps) {
        (nextProps.match.params.movieName !== this.props.match.params.movieName)&&this.props.searchMovie(this.props.match.params.movieName,this.props.language);
        (nextProps.language !== this.props.language)&&this.props.searchMovie(this.props.match.params.movieName,this.props.language);
        (nextProps.currentFilter !== this.props.currentFilter)&&this.props.searchMovie(this.props.match.params.movieName,this.props.language);
    }
    render() {
        return (this.props.isFetching) ? <Preloader/> : <Movies sort={true} {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    movies: state.search.movies,
    genres: state.app.genres,
    pageSize: state.app.pageSize,
    currentPage: state.search.currentPage,
    totalMoviesCount: state.search.totalMoviesCount,
    isFetching: state.search.isFetching,
    filters: state.search.filters,
    currentFilter: state.search.currentFilter,
    language:state.firebase.profile.language?state.firebase.profile.language:state.app.language
});
const mapDispatchToProps = (dispatch) => ({
    onPageChange: (currentPage) => {
        dispatch(onPageChangeCreator(currentPage));
    },
    searchMovie:(movie,lang)=>{
        dispatch(searchMovie(movie,lang))
    }
});

export default compose(withRouter,withFirestore, connect(mapStateToProps, mapDispatchToProps))(MoviesContainer);
