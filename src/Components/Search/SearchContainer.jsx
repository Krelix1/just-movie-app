import {searchMovie, setCurrentFilters} from "../../redux/searchMovie-reducer";
import Search from "./Search";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    language: state.search.language
});

const SearchContainer=connect(mapStateToProps,{searchMovie,setCurrentFilters})(Search);
export default SearchContainer;