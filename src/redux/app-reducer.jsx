import {SearchMovieAPI} from "../api/moviedbAPI/Mdb";


const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_GENRES = "SET_GENRES";
const SET_PAGE_SIZE = "SET_PAGE_SIZE";
const SET_LANGUAGE = "SET_LANGUAGE";

let initialState = {
    totalMoviesCount: 0,
    pageSize: 6,
    genres: [],
    language: "en-US"
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENRES:
            return {
                ...state,
                genres: action.genres
            };
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.language
            };
        case SET_PAGE_SIZE:
            return {
                ...state,
                pageSize: action.pageSize
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }
};
export const setGenres = (lang) => async (dispatch) => {
    let response = await SearchMovieAPI.getGenres(lang);
    dispatch(setGenresCreator(response.data.genres));
};
export const setPageSize = (pageSize) => (
    {type: SET_PAGE_SIZE, pageSize}
);
export const setGenresCreator = (genres) => (
    {type: SET_GENRES, genres}
);
export const setLanguageCreator = (language) => (
    {type: SET_LANGUAGE, language}
);
export const SetLanguage = (language,userId,ownProps)=>(dispatch)=>{
    userId && ownProps.firestore.collection('users').doc(userId).update({
        language:language
    });
    dispatch(setLanguageCreator(language));
};


export default appReducer;