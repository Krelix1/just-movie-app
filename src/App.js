import React, {Component} from 'react';
import css from './App.module.css';
import './App.module.css';
import SearchContainer from "./Components/Search/SearchContainer";
import {connect} from "react-redux";
import MoviesContainer from "./Components/Movies/MoviesContainer";
import {setGenres, setPageSize} from "./redux/app-reducer";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import MoviesDescriptionContainer from "./Components/Movies/MovieDescription/MoviesDescriptionContainer";
import NavMovieContainer from "./Components/Movies/NavMovie/NavMovieContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {compose} from "redux";
import SignInContainer from "./Components/auth/SignInContainer";
import Preloader from "./Components/common/Preloader/Preloader";
import SignUpContainer from "./Components/auth/SignUpContainer";


class App extends Component {
    componentDidMount() {
        this.props.setGenres(this.props.language);
        (window.screen.availWidth <= 375) ? this.props.setPageSize(12) :
            (window.screen.availWidth <= 768) ? this.props.setPageSize(8) :
                (window.screen.availWidth <= 1024) ? this.props.setPageSize(10) : this.props.setPageSize(12);
    }

    componentDidUpdate(nextProps) {
        (nextProps.language !== this.props.language) && this.props.setGenres(this.props.language);
    }


    render() {
        return !this.props.auth.isLoaded ? <Preloader className={css.preloader}/> : <div className={css.app_wrapper}>
            <BrowserRouter>
                <HeaderContainer/>
                <SearchContainer/>
                <div className={css.app_wrapper_content}>
                    <Switch>
                        <Redirect exact from="/" to="/popular"/>
                        <Route path='/popular' render={() =>
                            <NavMovieContainer type={"popular"}/>}/>
                        <Route path='/top' render={() =>
                            <NavMovieContainer type={"top"}/>}/>
                        <Route path='/coming' render={() =>
                            <NavMovieContainer type={"coming"}/>}/>
                        <Route path='/now_playing' render={() =>
                            <NavMovieContainer type={"now_playing"}/>}/>
                        <Route path='/search/:movieName?' render={() =>
                            <MoviesContainer/>}/>
                        <Route path='/movie/:movieId?' render={() =>
                            <MoviesDescriptionContainer/>}/>
                        <Route path='/sign_in' render={() =>
                            <SignInContainer/>}/>
                        <Route path='/sign_up' render={() =>
                            <SignUpContainer/>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    }
}

const mapStateToProps = (state) => ({
    language: state.app.language,
    auth: state.firebase.auth
});
export default compose(connect(mapStateToProps, {setGenres, setPageSize}), withRouter)(App);
