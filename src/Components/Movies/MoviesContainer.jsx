import {connect} from "react-redux";
import Movies from "./Movies"
import {onPageChangeCreator} from "../../redux/searchMovie-reducer";
const mapStateToProps = (state) => ({
    movies: state.search.movies,
    genres: state.search.genres,
    pageSize: state.search.pageSize,
    currentPage: state.search.currentPage,
    totalMoviesCount: state.search.totalMoviesCount,
    isFetching: state.search.isFetching
});
const mapDispatchToProps = (dispatch) => ({
    onPageChange: (currentPage) => {
        dispatch(onPageChangeCreator(currentPage));
    }
});


const MoviesContainer = connect(mapStateToProps,mapDispatchToProps)(Movies);
export default MoviesContainer;