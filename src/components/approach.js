import React from 'react';

import { Card, CardTitle, CardHeader, CardImg } from 'reactstrap';

import card_image from '../images/infinity-war.jpeg';

class Approach extends React.Component {
    render() {
        return (
            <div className="approach">
                <div className="container-fluid intro-container">
                    <div className="row intro-desc">
                        <div className="col"></div>
                        <div className="col-md-8 col-sm-12">
                            <div className="row section-header">
                                <div className="col"></div>
                                <div className="col-md-8 col-sm-12">
                                    <h1>Highest Rated</h1>
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

export default Approach;