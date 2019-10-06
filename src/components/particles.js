import React from 'react';

import Particles from 'react-particles-js';
import particlesOpt from "../js/particle";

import {Button} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserNinja} from "@fortawesome/free-solid-svg-icons";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';


class Intro extends React.Component {
    render() {
        return (
            <div className="intro">
                <div id="particles-js">
                    <Particles params={particlesOpt} />
                </div>
                <div className="container-fluid intro-container">
                    <div className="row navigation">
                        <div className="col-md-6 col-sm-12 logo">
                            <div>
                                <FontAwesomeIcon icon={faUserNinja} size="5x" />
                            </div>
                            {/*<h1>logo</h1>*/}
                        </div>
                        <div className="col-md-6 col-sm-12 navigation-container">
                            <Button>Browse Movies</Button>
                            <Button>Bookmarks</Button>
                            <Button>Account</Button>
                        </div>
                    </div>
                    <div className="row intro-desc">
                        <div className="col"></div>
                        <div className="col-md-8 col-sm-12">
                            <div className="row section-divider">
                                <div className="col"></div>
                                <div className="col-lg-8 col-md-12">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="card">
                                                <Card inverse>
                                                    <CardImg width="100%" src="/assets/318x270.svg" alt="Card image cap" />
                                                    <CardImgOverlay>
                                                        <CardTitle>Card Title</CardTitle>
                                                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                                        <CardText>
                                                            <small className="text-muted">Last updated 3 mins ago</small>
                                                        </CardText>
                                                    </CardImgOverlay>
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