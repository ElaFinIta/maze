import React, { Component } from 'react';
import Row from './Row';

class Maze extends Component {
    state = {
        size: 4
    }

    sizeHandler = (event) => {
        this.setState({
            size: event.target.value,
        });
    }

    // generate 1 with 2/3 probs and 0 with 1/3 probs
    getWeightedInteger = () => {
        const probs = [1,1,0];
        return probs[Math.floor(Math.random() * 3 )];
    }
    
    // a matrix filled with 0 and 1. First cell top left and last bottom right are filled with 1.
    binaryMaze = () => {
        let binMaze = [];
        for (let i=0; i < this.state.size; i++) {
            const row = [];
            for (let j=0; j < this.state.size; j++) {
                row.push(this.getWeightedInteger(0,1));
            }
            binMaze.push(row);
        } 
        binMaze[0][0] = 1;
        binMaze[binMaze.length -1][binMaze.length -1] = 1;
        console.log("The maze", binMaze);

        return binMaze;
    }
        
        // const coordinates = [];
        // for (let i=0; i < maze.length; i++) {
        //     for (let j=0; j < this.state.columns; j++) {
        //         console.log('cords:', i, j);
        //         coordinates.push(`{i:${i}, j:${j}}`)
        //     }
        // }
        // console.log(coordinates);

    createVisualMaze = (binaryMaze) => {
        const visualMaze = [];
        let key = 0;
        for (let r of binaryMaze) {
            visualMaze.push(<Row cols={binaryMaze.length} rowBinaries={r} key={key}/>);
            key += 1;
        }
        return visualMaze;
    }

    // check if position of mouse is inside of maze indexes and is free i.e. 1 
    isFree = (maze, x, y) => {
        return (x >= 0 && x < maze.length &&
             y >= 0 && y < maze.length &&
             maze[x][y] === 1);
    }

    goToCheese = () => {
        // matrix initialized with zeros except start=1 and end=1
        let path = [];
        let mousePathMaze = [];
        for (let i=0; i < this.state.size; i++) {
            const row = [];
            for (let j=0; j < this.state.size; j++) {
                row.push(0);
            }
            mousePathMaze.push(row);
        } 
        mousePathMaze[0][0] = 1;
        mousePathMaze[mousePathMaze.length -1][mousePathMaze.length -1] = 1;
        console.log('tried path', mousePathMaze);
        
    }

    render() {
        return (
            <div className="maze_wrapper">
                {/* {this.createRandomMaze(this.state.rows)} */}
                {this.createVisualMaze(this.binaryMaze())}
                <div className="input_wrapper">
                    <label htmlFor="size">Size of the maze:</label>
                    <input type="number" name="size" min="2" max="20" onChange={this.sizeHandler} />
                    {this.goToCheese()}
                </div>
            </div>
        );
    }
}


export default Maze;