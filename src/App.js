import React from 'react';
import './App.css';

import Intro from "./components/particles";
import Footer from "./components/footer";
import Approach from "./components/approach";

function App() {
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
    );
}

export default App;
