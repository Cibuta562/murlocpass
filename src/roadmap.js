// src/Roadmap.js
import React from 'react';
import './roadmap.css';

const Roadmap = () => {
    const elements = Array.from({ length: 20 }, (_, i) => `Reward ${i + 1} (${(i+1)*100}p)`);

    return (
        <div className="roadmap-container">
            <div style={{fontSize: "20px", paddingBottom:"20px"}}>
                Normal Pass
            </div>
            {elements.map((element, index) => (
                <div key={index} className="roadmap-item">
                    {element}
                </div>
            ))}
        </div>
    );
};

export default Roadmap;
