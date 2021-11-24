import React from 'react';
import Cell from './Cell';


const Row = (props) => {
    // generate 0 with 2/3 probs and 1 with 1/3 probs
    const getWeightedInteger = () => {
        const probs = [0,0,1];
        return probs[Math.floor(Math.random() * 3 )];
    }


    const createEmptyRow = (cols) => {
        const row = [];
        for (let j=0; j < cols; j++) {
            row.push(<Cell className={`cell_${getWeightedInteger()}`} key={j}/>);
        }
        // console.log(row);
        return row;
    }

    return (
        <div className="row">
            {createEmptyRow(props.cols)}   
        </div>
    );
};

export default Row;