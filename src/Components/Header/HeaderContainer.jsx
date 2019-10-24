import Header from "./Header";
import {connect} from "react-redux";
import {setLanguageCreator} from "../../redux/app-reducer";
import {setLanguageMovieCreator} from "../../redux/movie-reducer";
import {setLanguageSearchCreator} from "../../redux/searchMovie-reducer";
import {setLanguageNavCreator} from "../../redux/navMovie-reducer";
import {compose} from "redux";
import {withFirebase} from "react-redux-firebase";
import {Logout} from "../../redux/auth-reducer";

let mapStateToProps = (state) => ({
    language: state.app.language,
    auth:state.firebase.auth
});

export default compose(connect(mapStateToProps, {setLanguageCreator,setLanguageMovieCreator,setLanguageSearchCreator,setLanguageNavCreator,Logout}),withFirebase)(Header)