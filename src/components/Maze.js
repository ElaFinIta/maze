import React, { Component } from 'react';
import Row from './Row';

class Maze extends Component {
    state = {
        size: 4
    }


    // generate 1 with 2/3 probs and 0 with 1/3 probs
    getWeightedInteger = () => {
        const probs = [1,1,0];
        return probs[Math.floor(Math.random() * 3 )];
    }
    
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
        console.log(binMaze);

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

    sizeHandler = (event) => {
        this.setState({
            size: event.target.value,
        });
    }


    render() {
        return (
            <div className="maze_wrapper">
                {/* {this.createRandomMaze(this.state.rows)} */}
                {this.createVisualMaze(this.binaryMaze())}
                <div className="input_wrapper">
                    <label htmlFor="size">Size of the maze:</label>
                    <input type="number" name="size" min="2" max="20" onChange={this.sizeHandler} />
                </div>
            </div>
        );
    }
}


export default Maze;