import React from 'react';
import Cell from './Cell';


const Row = (props) => {
    const createEmptyRow = (cols) => {
        const row = [];
        for (let i=0; i < cols; i++) {
            row.push(<Cell key={i} id={i}/>);
        }
        console.log(row);
        return row;
    }

    return (
        <div className="row">
            {createEmptyRow(props.cols)}   
        </div>
    );
};

export default Row;