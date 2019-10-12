import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserNinja} from "@fortawesome/free-solid-svg-icons";
import {Button, Card, CardHeader, CardImg, CardTitle} from "reactstrap";
import card_image from "../images/infinity-war.jpeg";

class Ordered extends React.Component {
    render() {
        return (
            <div className="ordered">
                <div className="wishlist container-fluid">
                    <div className="row navigation">
                        <div className="col-md-4 col-sm-12 logo">
                            <div>
                                <Link to='/'> <FontAwesomeIcon icon={faUserNinja} size="4x" /></Link>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 navigation-container">
                            <Button><Link to="/profile">Profile</Link></Button>
                            <Button><Link to="/cart">Cart</Link></Button>
                            <Button><Link to="/ordered">Ordered</Link></Button>
                            <Button><Link to="/browse-movies">Browse Movies</Link></Button>
                        </div>
                    </div>
                    <hr/>
                    <div className="row movieContainer">
                        <div className="col"></div>
                        <div className="col-sm-10">
                            <div className="row items">
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <div className="browse-card">
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
            </div>
        )
    }
}

export default Ordered;