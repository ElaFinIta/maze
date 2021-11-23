import React, { Component } from 'react';
import Cell from './Cell';

class Maze extends Component {
    state = {
        columns: 4,
        rows: 4
    }

    // generate a random integer between min and max included
    getRandominteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }


    createEmptyMaze = () => {
        const maze = [];
        for (let i=0; i < this.state.rows; i++) {
            const row = [];
            for (let j=0; j < this.state.columns; j++) {
                row.push(<Cell />);
            }
            maze.push(row);
        }
        console.log(maze);
        return maze;
    }

    createRandomMaze = (rows, columns) => {
        const maze = [];
        for (let i=0; i < this.state.rows; i++) {
            const row = [];
            for (let j=0; j < this.state.columns; j++) {
                row.push(this.getRndInteger(0,1));
            }
            maze.push(row);
        }
        // starting and ending points are always 1/free
        maze[0][0] = 1;
        maze[maze.length -1][maze.length -1] = 1;
        console.log(maze);
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
            <div className="maze_wrapper">
                {this.createEmptyMaze()}
                <div className="input_wrapper">
                    <label htmlFor="rows">Number of rows:</label>
                    <input type="number" name="rows" min="2" max="30" onChange={this.rowNumberHandler} />
                    <label htmlFor="columns">Number of columns:</label>
                    <input type="number" name="colums" min="2" max="30" onChange={this.columNumberHandler} />
                </div>
            </div>
        );
    }
}


export default Maze;