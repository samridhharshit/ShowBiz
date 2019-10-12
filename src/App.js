import React from 'react';
// import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './components/home';
import BrowseMovies from "./components/browseMovies";
import Error from "./components/error";
import Profile from "./components/profile";
import Wishlist from "./components/wishlist";
import Ordered from "./components/ordered";
import Cart from "./components/cart";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component = {Home} />
                <Route exact path='/browse-movies' component = {BrowseMovies} />
                <Route exact path='/profile' component = {Profile} />
                <Route exact path='/wishList' component = {Wishlist} />
                <Route exact path='/ordered' component = {Ordered} />
                <Route exact path='/cart' component = {Cart} />
                <Route component = {Error} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
