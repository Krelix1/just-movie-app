import React from "react";
import {connect} from "react-redux";
import Movies from "./../Movies"
import Preloader from "../../common/Preloader/Preloader";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {onPopularPageChangeCreator, setMovie} from "../../../redux/navMovie-reducer";
import {withFirestore} from "react-redux-firebase";

class NavMovieContainer extends React.Component {
    componentDidMount(props) {
       this.props.setMovie(this.props.type,this.props.language);
    }
    componentDidUpdate(nextProps) {
        (nextProps.match.path !== this.props.match.path)&&this.props.setMovie(this.props.type,this.props.language);
        (nextProps.language !== this.props.language)&&this.props.setMovie(this.props.type,this.props.language);
    }

    render() {
        return (this.props.isFetching) ? <Preloader/> : <Movies {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    movies: state.nav.movie,
    isFetching: state.nav.isFetching,
    genres: state.app.genres,
    pageSize: state.app.pageSize,
    currentPage: state.nav.currentPage,
    totalMoviesCount: state.nav.totalMoviesCount,
    language:state.firebase.profile.language?state.firebase.profile.language:state.app.language
});
const mapDispatchToProps = (dispatch) => ({
    setMovie: (type,lang) => {
        dispatch(setMovie(type,lang));
    },
    onPageChange: (currentPage) => {
        dispatch(onPopularPageChangeCreator(currentPage));
    }
});

export default compose(withRouter,withFirestore, connect(mapStateToProps, mapDispatchToProps))(NavMovieContainer);
