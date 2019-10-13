import React, {Component} from 'react';
import css from './App.module.css';
import './App.module.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import SearchContainer from "./Components/Search/SearchContainer";
import {connect} from "react-redux";
import MoviesContainer from "./Components/Movies/MoviesContainer";
import {setGenres, setPageSize} from "./redux/searchMovie-reducer";
import {Route, Switch} from "react-router-dom";
import MoviesDescriptionContainer from "./Components/Movies/MovieDescription/MoviesDescriptionContainer";


class App extends Component {
    componentDidMount() {
        this.props.setGenres();
        (window.screen.availWidth <= 375) ? this.props.setPageSize(12) :
            (window.screen.availWidth <= 768) ? this.props.setPageSize(8) :
                (window.screen.availWidth <= 1080) ? this.props.setPageSize(12) : this.props.setPageSize(12);
    }


    render() {
        return <div className={css.app_wrapper}>
            <Header/>
            <SearchContainer/>
            <Nav/>
            <div className={css.app_wrapper_content}>
                <Switch >
                    <Route path='/search'  render={() =>
                        <MoviesContainer/>}/>
                    <Route path='/movie/:movieId?' render={() =>
                        <MoviesDescriptionContainer/>}/>
                </Switch>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {setGenres, setPageSize})(App);
