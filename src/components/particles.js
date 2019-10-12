import React from 'react';

import Particles from 'react-particles-js';
import particlesOpt from "../js/particle";

import {Button} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserNinja, faSearch} from "@fortawesome/free-solid-svg-icons";

import { Card, CardTitle, CardHeader, CardImg } from 'reactstrap';

import {Link} from "react-router-dom";

import card_image from '../images/infinity-war.jpeg';

class Intro extends React.Component {
    render() {
        return (
            <div className="intro">
                <div id="particles-js">
                    <Particles params={particlesOpt} />
                </div>
                <div className="container-fluid intro-container">
                    <div className="row navigation">
                        <div className="col-md-4 col-sm-12 logo">
                            <div>
                                <FontAwesomeIcon icon={faUserNinja} size="4x" />
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 navigation-container">
                            <div className="search">
                            <input type="text" name="Search Movies" placeholder="Quick Search" />
                            <FontAwesomeIcon icon={faSearch} />
                            </div>
                            <Button><Link to="/browse-movies">Browse Movies</Link></Button>
                            <div className="account dropdown">
                                <Button><Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                   aria-haspopup="true" aria-expanded="false">Account</Link></Button>
                                <div className="dropdown-menu">
                                    {/*add id of each profile before redirection*/}
                                    <button><Link to="/profile">Profile</Link></button>
                                    <button><Link to="/wishList">WishList</Link></button>
                                    <button><Link to="/cart">Cart</Link></button>
                                    <button><Link to="/ordered">Ordered</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row intro-desc">
                        <div className="col"></div>
                        <div className="col-md-8 col-sm-12">
                            <div className="row section-header">
                                <div className="col"></div>
                                <div className="col-md-8 col-sm-12">
                                    <h1>Latest Arrival</h1>
                                </div>
                                <div className="col"></div>
                            </div>
                            <div className="row section-divider">
                                <div className="col"></div>
                                <div className="col-lg-10 col-md-12">
                                    <div className="row items">
                                        <div className="col-lg-4 col-md-3 col-sm-12">
                                            <div className="card">
                                                <Card inverse>
                                                    <CardImg width="100%" src={card_image} alt="infinity war" />
                                                    <div className="card-overlay">
                                                        <CardTitle>Imdb Rating</CardTitle>
                                                        <CardHeader>6.8/10</CardHeader>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col"></div>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro;