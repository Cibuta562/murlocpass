import React from 'react';
import Roadmap from './roadmap';
import Objectives from "./objectives";
import './App.css';
import murloc from "./bg_f8f8f8-flat_750x_075_f-pad_750x1000_f8f8f8.u1-4vWiP-Rpy-transformed.jpeg"
import RoadmapPremium from "./premiumRoadmap";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Murloc Pass</h1>
            </header>
            <Objectives/>
            <p style={{backgroundColor: "#4381fd", padding: "10px", color: "white"}}>Points: 750</p>
            <img src={murloc} style={{height: "400px", marginTop: "20px"}}/>
            <div className="roadmap-wrapper">
                <Roadmap />
                <RoadmapPremium />
            </div>
        </div>
    );
}

export default App;
