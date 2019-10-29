import SignIn from "./SignIn";
import {connect} from "react-redux";
import {compose} from "redux";
import {Login} from "../../redux/auth-reducer";
import {withFirebase, withFirestore} from "react-redux-firebase";

let mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth,
    auth:state.firebase.auth,
    language:state.firebase.profile.language?state.firebase.profile.language:state.app.language
});
let mapDispatchToProps=(dispatch)=>({
    Login: (credentials)=>{
        dispatch(Login(credentials));
    }
});

const SignInContainer=compose(connect(mapStateToProps,mapDispatchToProps),withFirebase,withFirestore)(SignIn);
export default SignInContainer;