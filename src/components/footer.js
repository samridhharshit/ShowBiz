import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserNinja} from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row footer-container">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="col-md-4 col-sm-12 logo">
                            <FontAwesomeIcon icon={faUserNinja} size="5x" />
                            <h3>ShowBiz</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="row contact">
                            <div className="col-sm-12">
                                <h6>CONTACT</h6>
                                <span>+91 8210760017</span><br/>
                                <span>Jaipur, India</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-sm-12 about">
                                <h6>Location</h6>
                                <span>Manipal University</span>
                                <span>Jaipur</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12"></div>
                </div>
            </div>
        )
    }
}

export default Footer;