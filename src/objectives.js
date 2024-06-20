import React from 'react';
import './objectives.css';

const objectivesList = [
    "50p: take picture of me sleeping (COMPLETED)",
    "50p: win star player when playing with me (COMPLETED)",
    "100p: beat me in hs in bg (you have to be eliminated after me) ",
    "100p: finish ching chong legos",
    "150p: finish the puzzle" ,
    "200p: finish something productive together",
    "50p: win at squad busters (higher place than me) (COMPLETED)",
    "100p: finish the mc house",
    "100p: merge GUBLIN 10 times",
    "150p: buy me a coffee",
    "50p: walk in the park",
    "200p: escape from an escape room",
    "50p: watch a got episode",
    "150p: finish the first 3 chapters from the course",
    "50p: finish a sudoku in my book (without cheating)",
    "100p: 7 streak of physical ex for both of us"
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