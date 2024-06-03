// src/Roadmap.js
import React from 'react';
import './premiumRoadmap.css';

const RoadmapPremium = () => {
    const elements = Array.from({ length: 20 }, (_, i) => `Reward ${i + 1} (${(i+1)*100}p)`);

    return (
        <div className="roadmap-container-gold">
            <div style={{color: "white", fontSize: "20px", paddingBottom:"20px"}}>
                Gold Pass
            </div>
            {elements.map((element, index) => (
                <div key={index} className="roadmap-item">
                    {element}
                </div>
            ))}
        </div>
    );
};

export default RoadmapPremium;
