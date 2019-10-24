import SignIn from "./SignIn";
import {connect} from "react-redux";
import {compose} from "redux";
import {Login} from "../../redux/auth-reducer";
import {withFirebase} from "react-redux-firebase";

let mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth,
    auth:state.firebase.auth
});

const SignInContainer=compose(connect(mapStateToProps,{Login}),withFirebase)(SignIn);
export default SignInContainer;