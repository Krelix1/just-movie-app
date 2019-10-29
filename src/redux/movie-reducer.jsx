import {SearchMovieAPI} from "../api/moviedbAPI/Mdb";


const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_MOVIE_BY_ID = "SET_MOVIE_BY_ID";

let initialState = {
    movieById: {},
    video:"",
    isFetching: false,
    genres:[]
};

const movieReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_MOVIE_BY_ID:
            return {
                ...state,
                movieById: action.movie,
                video: (action.video[0])?action.video[0].key:null,
                genres: action.movie.genres
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

export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
};
export const setMovieByIdCreator = (movie, video) => (
    {type: SET_MOVIE_BY_ID, movie, video}
);

export const setMovieById = (movieId,lang) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await SearchMovieAPI.getMovieById(movieId,lang);
    let video = await SearchMovieAPI.getVideosById(movieId,lang);
    dispatch(setMovieByIdCreator(response.data, video.data.results));
    dispatch(toggleIsFetching(false));
};

export default movieReducer;