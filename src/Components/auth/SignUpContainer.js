import {connect} from "react-redux";
import {compose} from "redux";
import {withFirebase, withFirestore} from "react-redux-firebase";
import SignUp from "./SignUp";
import {SignUpUser} from "../../redux/auth-reducer";

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    auth: state.firebase.auth,
    error: state.auth.error
});
const SignUpContainer = compose(connect(mapStateToProps, {SignUpUser}), withFirebase,withFirestore)(SignUp);
export default SignUpContainer;