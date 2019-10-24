import {SearchMovieAPI} from "../api/moviedbAPI/Mdb";

const SET_MOVIES = "SET_MOVIES";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_LANGUAGE = "SET_LANGUAGE";
const SET_FILTERS = "SET_FILTERS";

let initialState = {
    movies: [],
    isFetching: false,
    currentPage: 1,
    language: "en-US",
    filters: {
        dateDown: function (a, b) {
            return b.release_date.split('-')[0] - a.release_date.split('-')[0] + b.release_date.split('-')[1] - a.release_date.split('-')[1] + b.release_date.split('-')[2] - a.release_date.split('-')[2]
        },
        dateUp: function (a, b) {
            return a.release_date.split('-')[0] - b.release_date.split('-')[0] + a.release_date.split('-')[1] - b.release_date.split('-')[1] + a.release_date.split('-')[2] - b.release_date.split('-')[2]
        },
        voteDown: function (a, b) {
            return b.vote_average - a.vote_average;
        },
        voteUp: function (a, b) {
            return a.vote_average - b.vote_average;
        },
        titleDown: function (a, b) {
            if (a.title > b.title) {
                return -1;
            }
        },
        titleUp: function (a, b) {
            if (a.title < b.title) {
                return -1;
            }
        },
        popularityUp: function (a, b) {
            return a.popularity - b.popularity;
        },
        popularityDown: function (a, b) {
            return b.popularity - a.popularity;
        }
    },
    currentFilter: ["dateDown"]
};

const searchMovieReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.language
            };
        case SET_FILTERS:
            return {
                ...state,
                currentFilter: action.filter
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

        default:
            return state;
    }
};

export const onPageChangeCreator = (page) => (
    {type: SET_CURRENT_PAGE, page}
);
export const setCurrentFilters = (filter) => {
    if (filter===undefined)filter = "dateDown";
    return {type: SET_FILTERS, filter}
};

export const setMoviesCreator = (movies) => (
    {type: SET_MOVIES, movies}
);

export const toggleIsFetching = (isFetching) => (
    {type: TOGGLE_IS_FETCHING, isFetching}
);
export const setLanguageSearchCreator = (language) => (
    {type: SET_LANGUAGE, language}
);
export const searchMovie = (movie, lang) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let next = true;
    let page = 1;
    let movies = [];
    while (next) {
        let result = await SearchMovieAPI.getMovies(movie, page, lang);
        if (result.data.total_pages > page && page < 10) {
            page++
        } else {
            next = false
        }
        movies = [...movies, ...result.data.results].filter((m) => m.release_date !== "" && m.release_date !== undefined && m.vote_average !== 0).filter((thing, index, self) =>
            index === self.findIndex((t) => (
                t.id === thing.id
            ))
        );
    }
    dispatch(onPageChangeCreator(1));
    dispatch(setMoviesCreator([...movies]));
    dispatch(toggleIsFetching(false));
};


export default searchMovieReducer;