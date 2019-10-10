import * as axios from "axios";

let instance=axios.create({
    baseURL:"https://api.themoviedb.org/3/"
});
export const SearchMovieAPI={
    getMovies(movie){
        return instance.get(`search/movie?api_key=f224e438cdaf4f8191268f9bbb283405&language=en-US&query=${movie}&page=1&include_adult=false`);
    },
    getGenres(){
        return instance.get(`genre/movie/list?language=en-Us&api_key=f224e438cdaf4f8191268f9bbb283405`)
    }
};

