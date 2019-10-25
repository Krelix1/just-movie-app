
const LOGIN_LOGOUT = "LOGIN_LOGOUT";
const ERROR = "ERROR";


let initialState = {
    isAuth: false,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_LOGOUT:
            return {
                ...state,
                isAuth: action.isAuth
            };
        case ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};
export const SetIsAuth = (isAuth) => (
    {type: LOGIN_LOGOUT, isAuth}
);
export const SetError = (error) => (
    {type: ERROR, error}
);
export const Login = (credentials) => (dispatch, getState, getFirebase) => {
    let firebase = getFirebase();
    firebase.login(credentials).then(() => {
        dispatch(SetIsAuth(true));
    }).catch((e) => {
        dispatch(SetError("Ooops. Something wrong!"));
    });
};
export const SignUpUser = (email, password, firstName, lastName, ownProps) => (dispatch, getState, getFirebase) => {
    let firebase = getFirebase();
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((response)=>ownProps.firestore.collection('users').doc(response.user.uid).set({
            firstName: firstName,
            lastName: lastName,
            initials: firstName[0] + lastName[0]
        }))
        .then(dispatch(SetIsAuth(true)))
        .catch(e => {
            dispatch(SetError(e.message));

        });
};
export const LoginWithNetworks = (credentials) => (dispatch, getState, getFirebase) => {
    let firebase = getFirebase();
    firebase.login(credentials).then(() => {
        dispatch(SetIsAuth(true));
    });
};
export const Logout = () => (dispatch, getState, getFirebase) => {
    let firebase = getFirebase();
    firebase.auth().signOut().then(() => {
        dispatch(SetIsAuth(false));
    });
};

export default authReducer;