import {searchMovie, setCurrentFilters} from "../../redux/searchMovie-reducer";
import Search from "./Search";
import {connect} from "react-redux";
import {compose} from "redux";
import {withFirestore} from "react-redux-firebase";

const mapStateToProps = (state) => ({
    language:state.firebase.profile.language?state.firebase.profile.language:state.app.language

});

const SearchContainer=compose(withFirestore,connect(mapStateToProps,{searchMovie,setCurrentFilters}))(Search);
export default SearchContainer;