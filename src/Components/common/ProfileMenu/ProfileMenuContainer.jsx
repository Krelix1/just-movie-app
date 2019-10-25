import {compose} from "redux";
import {withFirebase, withFirestore} from "react-redux-firebase";
import ProfileMenu from "./ProfileMenu";
import {connect} from "react-redux";
import {Logout} from "../../../redux/auth-reducer";


let mapStateToProps = (state) => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    language: state.app.language
});

let mapDispatchToProps = (dispatch) => ({
    Logout: () => {
        dispatch(Logout())
    },
});

const ProfileMenuContainer = compose(withFirebase, withFirestore,connect(mapStateToProps, mapDispatchToProps))(ProfileMenu);
export default ProfileMenuContainer;