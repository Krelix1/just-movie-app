import {SearchMovieAPI} from "../api/moviedbAPI/Mdb";

const SEARCH_MOVIE = "SEARCH_MOVIE";
const SET_MOVIES = "SET_MOVIES";
const SET_GENRES = "SET_GENRES";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_PAGE_SIZE = "SET_PAGE_SIZE";

let initialState = {
    searchingMovie: "",
    movies: [],
    isFetching: false,
    currentPage: 1,
    totalMoviesCount: 0,
    pageSize: 6,
    genres: []
};

const searchMovieReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                searchingMovie: action.movies
            };
        case SET_PAGE_SIZE:
            return {
                ...state,
                pageSize: action.pageSize
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        case SET_MOVIES:
            return {
                ...state,
                movies: [...action.movies],
                totalMoviesCount: action.movies.length
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_GENRES:
            return {
                ...state,
                genres: action.genres
            };
        default:
            return state;
    }
};

export const onPageChangeCreator = (page) => (
    {type: SET_CURRENT_PAGE, page}
);

export const setMoviesCreator = (movies) => (
    {type: SET_MOVIES, movies}
);
export const setGenresCreator = (genres) => (
    {type: SET_GENRES, genres}
);

export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
};

export const searchMovie = (movie) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await SearchMovieAPI.getMovies(movie);
    dispatch(setMoviesCreator(response.data.results));
    dispatch(toggleIsFetching(false));
};
export const setGenres = () => (dispatch) => {
    SearchMovieAPI.getGenres().then(response => {
        dispatch(setGenresCreator(response.data.genres));
    })
};
export const setPageSize = (pageSize) => (
    {type: SET_PAGE_SIZE, pageSize}
);

export default searchMovieReducer;