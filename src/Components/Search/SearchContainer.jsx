import {searchMovie} from "../../redux/searchMovie-reducer";
import Search from "./Search";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    searchingMovie: state.search.searchingMovie
});

const SearchContainer=connect(mapStateToProps,{searchMovie})(Search);
export default SearchContainer;