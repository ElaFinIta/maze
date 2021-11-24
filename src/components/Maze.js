import React, { Component } from 'react';
import Row from './Row';

class Maze extends Component {
    state = {
        columns: 4,
        rows: 4
    }


    createRandomMaze = (rowNumber) => {
            const maze = [];
            for (let i=0; i < rowNumber; i++) {
                maze.push(<Row cols={this.state.columns} key={i} row={i} />);
            }
            console.log(maze);
            return maze;


        // const maze = [];
        // for (let i=0; i < this.state.rows; i++) {
        //     const row = [];
        //     // let <RowNew />
        //     for (let j=0; j < this.state.columns; j++) {
        //         row.push(<Cell className={`cell_${this.getRandomInteger(0,1)}`} key={(i,j)}/>);
        //     }
        //     maze.push(row);
        // }
        // starting and ending points are always 1/free
        // maze[0][0] = 1;
        // maze[maze.length -1][maze.length -1] = 1;
        // console.log(maze);


        // const coordinates = [];
        // for (let i=0; i < maze.length; i++) {
        //     for (let j=0; j < this.state.columns; j++) {
        //         console.log('cords:', i, j);
        //         coordinates.push(`{i:${i}, j:${j}}`)
        //     }
        // }
        // console.log(coordinates);
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
                {this.createRandomMaze(this.state.rows)}
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