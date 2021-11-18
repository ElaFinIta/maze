import React, { Component } from 'react';
import Row from './Row';


class EmptyMaze extends Component {
    // create a matrix, i.e. a list of lists filled with emtpy strings. Use Row component
    state = {
        columns: 4,
        rows: 4
    }

    createEmptyMaze(rowNumber) {
        const maze = [];
        for (let j=0; j < rowNumber; j++) {
            maze.push(<Row cols={this.state.columns} key={j} row={j} />);
        }
        console.log(maze);
        return maze;
    }

    rowNumberHandler = (event) => {
        this.setState({
            rows: event.target.value,
        });
    }

    columNumberHandler = (event) => {
        this.setState({
            columns: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <div className="maze_wrapper">
                    {this.createEmptyMaze(this.state.rows)}
                </div>
                <div className="input_wrapper">
                    {/* little bit of confusion with rows and columns :D */}
                    <label htmlFor="rows">Number of columns:</label>
                    <input type="number" name="rows" min="2" max="30" onChange={this.rowNumberHandler} />
                    <label htmlFor="columns">Number of rows:</label>
                    <input type="number" name="colums" min="2" max="30" onChange={this.columNumberHandler} />
                </div>
            </div>
        );
    }
}

export default EmptyMaze;