import React from 'react';

import {
    Button,
    Form,
    FormGroup,
    Row,
    Col,
    Input,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card, CardImg, CardTitle, CardHeader
} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserNinja} from "@fortawesome/free-solid-svg-icons";
import card_image from "../images/infinity-war.jpeg";

import {Link} from "react-router-dom";

class BrowseMovies extends React.Component {

    state = {
        QualitydropdownOpen: false,
        GenredropdownOpen: false,
        RatingdropdownOpen: false,
        ByOrderdropdownOpen: false
    };

    toggleQuality = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    };

    toggleGenre = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    };

    toggleRating = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    };

    toggleByOrder = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    };


    render() {
        return (
            <div className="container-fluid">
                <div className="browse-header">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className='emojiIcon'>
                                <Link to='/'><FontAwesomeIcon icon={faUserNinja} size="4x" /></Link>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="row">
                                <div className="col-lg-6 col-md-8 col-sm-12 header-container-input">
                                    <Form>
                                        <Row form>
                                            <Col sm={12}>
                                                <FormGroup>
                                                    <Input type="text" name="movie" placeholder="Search your Movie..." />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="col-lg-6 col-md-8 col-sm-12 header-container">
                                <Form>
                                    <Row form>
                                        <Col sm={3}>
                                            <Dropdown isOpen={this.state.QualitydropdownOpen} toggle={this.toggleQuality}>
                                                <DropdownToggle caret>
                                                    Quality
                                                </DropdownToggle>
                                                <DropdownMenu className='dropdown'>
                                                    <DropdownItem>720p</DropdownItem>
                                                    <DropdownItem>1080p</DropdownItem>
                                                    <DropdownItem>3D</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </Col>
                                        <Col sm={3}>
                                            <Dropdown isOpen={this.state.GenredropdownOpen} toggle={this.toggleGenre}>
                                                <DropdownToggle caret>
                                                    Genre
                                                </DropdownToggle>
                                                <DropdownMenu className='dropdown'>
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>Adventure</DropdownItem>
                                                    <DropdownItem>Comedy</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </Col>
                                        <Col sm={3}>
                                            <Dropdown isOpen={this.state.RatingdropdownOpen} toggle={this.toggleRating}>
                                                <DropdownToggle caret>
                                                    Rating
                                                </DropdownToggle>
                                                <DropdownMenu className='dropdown'>
                                                    <DropdownItem>7+</DropdownItem>
                                                    <DropdownItem>8+</DropdownItem>
                                                    <DropdownItem>9+</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </Col>
                                        <Col sm={3}>
                                            <Dropdown isOpen={this.state.ByOrderdropdownOpen} toggle={this.toggleByOrder}>
                                                <DropdownToggle caret>
                                                    Order By
                                                </DropdownToggle>
                                                <DropdownMenu className='dropdown'>
                                                    <DropdownItem>Latest</DropdownItem>
                                                    <DropdownItem>Oldest</DropdownItem>
                                                    <DropdownItem>Year</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </Col>
                                    </Row><br/>
                                    <Button className='submit' onClick='submit'>Submit</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="section-divider">
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-lg-10 col-md-12">
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
            </div>
        )
    }
}

export default  BrowseMovies;