import React from 'react';

import Particles from 'react-particles-js';
import particlesOpt from "../js/particle";

class Error extends React.Component {
    render() {
        return (
            <div className="error">
                <div id="particles-js">
                    <Particles params={particlesOpt} />
                </div>
                <div className="container-fluid intro-container">
                    <div className="row center-align">
                        <div className="col"></div>
                        <div className="col-md-8 col-sm-12">
                            <div className="row section-header">
                                <div className="col"></div>
                                <div className="col-md-8 col-sm-12">
                                    <h1>Error!!! Page not found...</h1>
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

export default Error;