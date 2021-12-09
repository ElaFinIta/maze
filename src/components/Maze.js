import React, { Component } from 'react';
import Row from './Row';

const {exitMaze} = require('./exitMaze.js');

class Maze extends Component {
    state = {
        size: 4,
        showMaze: false,
        showSolution: false
    }

    maze = [];
   
    sizeHandler = (event) => {
        this.setState({
            size: event.target.value,
            showMaze: false,
            showSolution: false
        });
    }

    generateHandler = () => {
        this.setState({
            showMaze: true
        })
    }

    solveHandler = (e) => {
        this.setState({
            showSolution: true
        })
        exitMaze(this.maze);
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
    
            this.maze = binMaze;
            return binMaze;
        }
    }

    createVisualMaze = (binaryMaze) => {
        if (this.state.size > 1) {
            const visualMaze = [];
            let key = 0;
            let adaptedMaze = binaryMaze;
            adaptedMaze[0][0]= 7;
            adaptedMaze[adaptedMaze.length -1][adaptedMaze.length -1]=8;
            for (let r of adaptedMaze) {
                console.log(r);
                visualMaze.push(<Row cols={adaptedMaze.length} rowBinaries={r} key={key}/>);
                key += 1;
            }
            if (this.state.showMaze) {
                return (<div className="maze_wrapper">{visualMaze}</div>)
            }
        }
    }

    render() {
        return (
            <div className="wrapper">
                {this.createVisualMaze(this.binaryMaze())}
                <div className="input_wrapper">
                    <label htmlFor="size">Give size of the maze:</label>
                    <p className="minimum">minimum is 2</p>
                    <input type="number" name="size" min="2" max="15" onChange={this.sizeHandler} />
                    <button className="generation_button" onClick={this.generateHandler}>GENERATE MAZE</button>
                    <button className="solution_button" onClick={this.exitMaze}>GO TO CHEESE</button>
                    {/* <button className="solution_button" onClick={() => this.createVisualMaze(exitMaze(this.maze))}>GO TO CHEESE</button> */}
                </div>
            </div>
        );
    }
}


export default Maze;