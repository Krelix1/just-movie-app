import {SearchMovieAPI} from "../api/moviedbAPI/Mdb";


const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_MOVIE = "SET_MOVIE";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = {
    movie: [],
    isFetching: false,
    currentPage: 1,
    totalMoviesCount: 0
};

const navMovieReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_MOVIE:
            return {
                ...state,
                movie: [...action.movie.filter((m) => m.release_date !== "" && m.release_date !==undefined && m.vote_average!==0).filter((thing, index, self) =>
                    index === self.findIndex((t) => (
                        t.id === thing.id
                    ))
                )],
                totalMoviesCount: action.movie.filter((m) => m.release_date !== "" && m.release_date !==undefined && m.vote_average!==0).filter((thing, index, self) =>
                    index === self.findIndex((t) => (
                        t.id === thing.id
                    ))
                ).length
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
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
export const onPopularPageChangeCreator = (page) => (
    {type: SET_CURRENT_PAGE, page}
);

export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
};

export const setMovieCreator = (movie) => (
    {type: SET_MOVIE, movie}
);

export const setMovie = (type,lang) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let next = true;
    let page = 1;
    let movies = [];
    if (type === "popular") {
        while (next) {
            let result = await SearchMovieAPI.getPopularMovie(page,lang);
            if (result.data.total_pages > page &&  page <15) {
                page++
            }else{next=false}
            movies = [...movies, ...result.data.results];
        }
    } else if (type === "top") {
        while (next) {
            let result = await SearchMovieAPI.getTopMovie(page,lang);
            if (result.data.total_pages > page &&  page <15) {
                page++
            }else{next=false}
            movies = [...movies, ...result.data.results];
        }
    } else if (type === "coming") {
        while (next) {
            let result = await SearchMovieAPI.getUpComingMovie(page,lang);
            if (result.data.total_pages > page &&  page <10) {
                page++
            }else{next=false}
            movies = [...movies, ...result.data.results];
        }
    } else if (type === "now_playing") {
        while (next) {
            let result = await SearchMovieAPI.getNowPlayingMovie(page,lang);
            if (result.data.total_pages > page &&  page <10) {
                page++
            }else{next=false}
            movies = [...movies, ...result.data.results];
        }
    }
    dispatch(onPopularPageChangeCreator(1));
    dispatch(setMovieCreator(movies));
    dispatch(toggleIsFetching(false));
};


export default navMovieReducer;