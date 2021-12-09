import React, { Component } from 'react';
import Row from './Row';

let maze = [];

class Maze extends Component {
    state = {
        size: 4,
    }

    // maze = [];
   
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
        if (this.state.size > 1 ) {
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
    
            // this.maze = binMaze;
            maze = binMaze;
            return binMaze;
        }
    }

    createVisualMaze = (binaryMaze) => {
        if (this.state.size > 1) {
            const visualMaze = [];
            let key = 0;
            for (let r of binaryMaze) {
                visualMaze.push(<Row cols={binaryMaze.length} rowBinaries={r} key={key}/>);
                key += 1;
            }
            return visualMaze;
        }
    }

    createVisualMazeX = (binaryMaze) => {
        if (this.state.size > 1) {
            const visualMaze = [];
            let key = 0;
            for (let r of binaryMaze) {
                visualMaze.push(<Row cols={binaryMaze.length} rowBinaries={r} key={key}/>);
                key += 1;
            }
            return visualMaze;
        }
    }

    isSafe = (maze, x, y) => {
        const n = maze.length;
        // check we are inside maze and it's 1
        if (x >= 0 && y >= 0 && x < n && y < n && maze[x][y] !== 0) {
          return true; 
        }
        return false;
    }

    exitMaze = (origMaze) => {
        // let mousePath = this.maze;
        let mousePath = maze;
        // matrix initialized with zeros except start=1 and end=1
        // for (let i=0; i < this.state.size; i++) {
        //     const row = [];
        //     for (let j=0; j < this.state.size; j++) {
        //         row.push(0);
        //     }
        //     mousePath.push(row);
        // } 
        
        if (this.findPath(maze, 0, 0, mousePath) === true) {
            console.log('mousePath', mousePath);
            // return the matrix of the right path
            return mousePath;
        }
        return "NO PATH FOUND"; // if no path found 
    }
      
    findPath = (maze, x, y, mousePath) => {
        const n = maze.length;
      
        // if we are at the end of maze and it's 1 (base case)
        if (x === n - 1 && y === n - 1) {
          mousePath[x][y] = 3;
          return true;
        }

        if (this.isSafe(maze, x, y) === true) {
            mousePath[x][y] = 3; // mark cell as safe


            // what you think are rows are maybe actually colums :D
            // I blame flex direction
            // go down (into another row/array) and check if it's free i.e. 1
            // which means go forward ;)
            if (this.findPath(maze, x, y + 1, mousePath)) {
                    return true;
            }

            // go forward (horizontally/in the same array of matrix) and check if it's free i.e. 1
            // I meant go down
            if (this.findPath(maze, x + 1, y, mousePath)) {
                return true;
            }
      
            // if going one step forward or down didn't help, mark as unsafe i.e. 0
            mousePath[x][y] = 0;
            return false;
        }
        return false;
    }

    render() {
        return (
            <div className="maze_wrapper">
                {this.createVisualMaze(this.binaryMaze())}
                <div className="input_wrapper">
                    <label htmlFor="size">Size of the maze:</label>
                    <input type="number" name="size" min="2" max="15" onChange={this.sizeHandler} />
                    {/* {this.createVisualMaze(this.exitMaze(this.maze))} */}
                    {this.createVisualMazeX(this.exitMaze(maze))}
                    {/* <button onClick={() => this.createVisualMaze(this.exitMaze(this.maze))}>FIND A WAY TO THE CHEESE</button> */}
                </div>
            </div>
        );
    }
}


export default Maze;