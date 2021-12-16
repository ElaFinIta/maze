import React, { Component } from 'react';
import Row from './Row';

const {exitMaze} = require('./exitMaze.js');

class Maze extends Component {
    state = {
        size: 4,
        binayMazeToBeSolved: [],
        pathMaze: [],
        showMaze: false,
        showSolution: false
    }

    message = (<div className="message_wrapper">NO PATH FOUND</div>);

    sizeHandler = (event) => {
        this.setState({
            size: event.target.value,
        });
    }

    generateHandler = () => {
        if (this.state.size > 1 ) {
        this.setState({
            pathMaze: [],
            showMaze: true,
            showSolution: false
        })
        this.binaryMaze();
        }

    }

    solutionHandler = () => {
        if (this.state.size > 1 || this.state.size < 13) {
            this.setState({
                pathMaze: exitMaze(this.state.binayMazeToBeSolved),
                showSolution: true,
                showMaze: false
            })
        } else {
            this.setState({
                inputPopUp: true
            })
        }
    }

    // generate 1 with 2/3 probs and 0 with 1/3 probs
    getWeightedInteger = () => {
        const probs = [1,1,0];
        return probs[Math.floor(Math.random() * 3 )];
    }
    
    // a matrix filled with 0 and 1. First cell top left and last bottom right are filled with 1.
    binaryMaze = () => {
        let binMaze = [];
        if (this.state.size > 1 ) {
            for (let i=0; i < this.state.size; i++) {
                const row = [];
                for (let j=0; j < this.state.size; j++) {
                    row.push(this.getWeightedInteger(0,1));
                }
                binMaze.push(row);
            } 
            binMaze[0][0] = 1;
            binMaze[binMaze.length -1][binMaze.length -1] = 1;
            this.setState({
                binayMazeToBeSolved: binMaze
            })
        }
    }

    createVisualMaze = (binaryMaze) => {
        if (binaryMaze.length > 1) {
            const visualMaze = [];
            let key = 0;
            let adaptedMaze = binaryMaze;
            adaptedMaze[0][0]= 7;
            adaptedMaze[adaptedMaze.length -1][adaptedMaze.length -1]= 8;
            for (let r of adaptedMaze) {
                visualMaze.push(<Row cols={adaptedMaze.length} rowBinaries={r} key={key}/>);
                key += 1;
            }
            // if found a path return solved maze
            return (<div className="maze_wrapper">{visualMaze}</div>)
        }
        // if not return unsolved maze & message
        return (<div className="maze_wrapper">{this.message}{this.createVisualMaze(this.state.binayMazeToBeSolved)}</div>)
    }

    render() {
        return (
            <div className="wrapper">
                <div className="input_wrapper">
                    <p>Generate a maze and see if the rat can reach the cheese.</p>
                    <p>This rat can only go in two directions, right and down.</p>
                    <div className="label_input">
                        <label htmlFor="size">Give size of the maze, minimum is 2, default is 4:</label>
                        <input type="number" name="size" min="2" max="12" onChange={this.sizeHandler} />
                    </div>
                    <button className="generation_button" onClick={this.generateHandler}>GENERATE MAZE</button>
                    <button className="solution_button" onClick={this.solutionHandler}>GO TO CHEESE</button>
                </div>
                <div className="maze">
                    {this.state.showMaze && this.createVisualMaze(this.state.binayMazeToBeSolved)}
                    {this.state.showSolution && this.createVisualMaze(this.state.pathMaze)}
                </div>
            </div>
        );
    }
}


export default Maze;