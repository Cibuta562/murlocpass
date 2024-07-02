import React, { useState } from 'react';
import './premiumRoadmap.css';

const Roadmap = () => {
    const roadmapList = [
        "Reward 1 (100p)",
        "Reward 2 (200p)",
        "Reward 3 (300p)",
        "Reward 4 (400p)",
        "Reward 5 (500p)",
        "Reward 6 (600p)",
        "Reward 7 (700p)",
        "Reward 8 (800p)",
        "Reward 9 (900p)",
        "Reward 10 (1000p)",
        "Reward 11 (1100p)",
        "Reward 12 (1200p)",
        "Reward 13 (1300p)",
        "Reward 14 (1400p)",
        "Reward 15 (1500p)",
        "Reward 16 (1600p)",
        "Reward 17 (1700p)",
        "Reward 18 (1800p)",
        "Reward 19 (1900p)",
        "Reward 20 (2000p)",
    ];

    const newTextList = [
        "Inghetata pe victoriei sau alta strada (COMPLETED)",
        "Flori dragute",
        "Mergem la Panini",
        "Carte",
        "Brunch",
        "Escape Room",
        "Paste gatite de mine + livrare",
        "Reward 8 (800p)",
        "Reward 9 (900p)",
        "Reward 10 (1000p)",
        "Reward 11 (1100p)",
        "Reward 12 (1200p)",
        "Reward 13 (1300p)",
        "Reward 14 (1400p)",
        "Reward 15 (1500p)",
        "Reward 16 (1600p)",
        "Reward 17 (1700p)",
        "Reward 18 (1800p)",
        "Reward 19 (1900p)",
        "Reward 20 (2000p)",
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index); // Toggle the active state
    };

    return (
        <div className="roadmap-container-gold">
            <div style={{ fontSize: "20px", paddingBottom: "20px", color: "white" }}>
                Gold Pass
            </div>
            {roadmapList.map((objective, index) => (
                <div
                    key={index}
                    className={`roadmap-item ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleClick(index)}
                >
                    {activeIndex === index ? newTextList[index] : objective}
                </div>
            ))}
        </div>
    );
};

export default Roadmap;
