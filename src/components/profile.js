import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faUserNinja } from "@fortawesome/free-solid-svg-icons";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

import avengerImage from '../images/infinity-war.jpeg';

class Profile extends React.Component {
    render() {
        return (
            <div className="profile">
                <div className="container-fluid">
                    <div className="row navigation">
                        <div className="col-md-4 col-sm-12 logo">
                            <div>
                                <Link to='/'> <FontAwesomeIcon icon={faUserNinja} size="4x" /></Link>
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
                                    <button><Link to="/wishList">WishList</Link></button>
                                    <button><Link to="/cart">Cart</Link></button>
                                    <button><Link to="/ordered">Ordered</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className='name'>Name</h2>
                        </div>
                    </div>
                    <div className="row profile-body">
                        <div className="col"></div>
                        <div className="col-lg-9 col-md-10 col-sm-12">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="row">
                                        <h3>Statistics</h3>
                                    </div>
                                    <div className="details-container">
                                        <p><span>User Id:</span>12345</p>
                                        <p><span>Joined:</span>12345</p>
                                        <p><span>Last Seen:</span>12345</p>
                                        <p><span>Downloads:</span>12345</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 image-align">
                                    <img src={avengerImage} alt="img"/>
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

export default Profile;