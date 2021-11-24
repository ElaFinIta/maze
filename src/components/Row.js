import React from 'react';
import Cell from './Cell';


const Row = (props) => {
    const createRow = () => {
        const row = [];
        // console.log("row", props.rowBinaries);
        let key = 0;
        for (let cellBinary of props.rowBinaries) {
            row.push(<Cell className={`cell_${cellBinary}`} key={key}/>);
            key += 1;
        }
        return row;
    }

    return (
        <div className="row">
            {createRow()}   
        </div>
    );
};

export default Row;