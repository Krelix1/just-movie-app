import * as axios from "axios";


const apiKey='f224e438cdaf4f8191268f9bbb283405';
let instance=axios.create({
    baseURL:"https://api.themoviedb.org/3/"
});
export const SearchMovieAPI={
    getMovies(movie,page,lang){
        return instance.get(`search/movie?api_key=${apiKey}&language=${lang}&query=${movie}&page=${page}&include_adult=false`);
    },
    getGenres(lang){
        return instance.get(`genre/movie/list?language=${lang}S&api_key=${apiKey}`)
    },
    getMovieById(movieId,lang){
      return instance.get(`movie/${movieId}?api_key=${apiKey}&language=${lang}`)
    },
    getVideosById(movieId,lang){
        return instance.get(`movie/${movieId}/videos?api_key=${apiKey}&language=${lang}`)
    },
    getPopularMovie(page,lang){
        return instance.get(`movie/popular?api_key=${apiKey}&language=${lang}&page=${page}`)
    },
    getTopMovie(page,lang){
        return instance.get(`movie/top_rated?api_key=${apiKey}&language=${lang}&page=${page}`)
    },
    getUpComingMovie(page,lang){
        return instance.get(`movie/upcoming?api_key=${apiKey}&language=${lang}&page=${page}`)
    },
    getNowPlayingMovie(page,lang){
        return instance.get(`movie/now_playing?api_key=${apiKey}&language=${lang}&page=${page}`)
    },
    createAccount(){
        return instance.get(`authentication/token/new?api_key=${apiKey}`)
    },
    createSession(request_token){
        return instance.post(`authentication/session/new?api_key=${apiKey}`,{"request_token": `${request_token}`})
    }
};

