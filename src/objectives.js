import React from 'react';
import './objectives.css';

const objectivesList = [
    "50p: take picture of me sleeping ",
    "50p: win star player when playing with me ",
    "100p: beat me in hs in bg (you have to be eliminated after me) ",
    "100p: finish ching chong legos",
    "150p: finish the puzzle" ,
    "200p: finish something productive together",
    "50p: win at squad busters (higher place than me)",
    "100p: finish the mc house",
];

const Objectives = () => {
    return (
        <div className="objectives-container">
            {objectivesList.map((objective, index) => (
                <div key={index} className="objective-item">
                    {objective}
                </div>
            ))}
        </div>
    );
};

export default Objectives