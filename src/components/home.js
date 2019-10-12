import React from 'react';
import '../App.css';


import Intro from "./particles";
import Footer from "./footer.js";
import Approach from "./approach.js";

function Home() {
    return (
        <div className="App">
            <div className="intro">
                <Intro />
            </div>
            <div className="approach">
                <Approach />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Home;