import React, { Component } from 'react';
import Row from './Row';

class Maze extends Component {
    state = {
        columns: 4,
        rows: 4
    }


    // generate 1 with 2/3 probs and 0 with 1/3 probs
    getWeightedInteger = () => {
        const probs = [1,1,0];
        return probs[Math.floor(Math.random() * 3 )];
    }
    
    binaryMaze = () => {
        let binMaze = [];
        for (let i=0; i < this.state.rows; i++) {
            const row = [];
            for (let j=0; j < this.state.columns; j++) {
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
            visualMaze.push(<Row cols={this.state.columns} rowBinaries={r} key={key}/>);
            key += 1;
        }
        return visualMaze;
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
                {/* {this.createRandomMaze(this.state.rows)} */}
                {this.createVisualMaze(this.binaryMaze())}
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