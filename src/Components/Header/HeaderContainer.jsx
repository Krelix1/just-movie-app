import Header from "./Header";
import {connect} from "react-redux";
import {compose} from "redux";
import {withFirebase, withFirestore} from "react-redux-firebase";
import {Logout} from "../../redux/auth-reducer";

let mapStateToProps = (state) => ({
    language:state.firebase.profile.language?state.firebase.profile.language:state.app.language,
    auth:state.firebase.auth
});

export default compose(connect(mapStateToProps, {Logout}),withFirebase,withFirestore)(Header)