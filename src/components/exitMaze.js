function exitMaze(maze) {
    let mousePath = JSON.parse(JSON.stringify(maze));
 
    // console.log('maze', maze);
    if (findPath(maze, 0, 0, mousePath) === true) {
        console.log('mousePath', mousePath);
        // return the matrix of the right path
        mousePath[0][0]=7;
        mousePath[mousePath.length -1][mousePath.length -1]= 8;
            return mousePath;
    }
    return []; // if no path to cheese found in maze


    function isSafe(maze, x, y) {
        const n = maze.length;
        // check we are inside maze and it's 1
        if (x >= 0 && y >= 0 && x < n && y < n && maze[x][y] !== 0) {
          return true; 
        }
        return false;
    }
    
    function findPath(maze, x, y, mousePath) {
        const n = maze.length;
      
        // if we are at the end of maze and it's 1 (base case)
        if (x === n - 1 && y === n - 1) {
          mousePath[x][y] = 3;
          return true;
        }
    
        if (isSafe(maze, x, y) === true) {
            mousePath[x][y] = 3; // mark cell as safe
    
    
            // what you think are rows are maybe actually colums :D
            // I blame flex direction
            // go down (into another row/array) and check if it's free i.e. 1
            // which means go forward ;)
            if (findPath(maze, x, y + 1, mousePath)) {
                    return true;
            }
    
            // go forward (horizontally/in the same array of matrix) and check if it's free i.e. 1
            // I meant go down
            if (findPath(maze, x + 1, y, mousePath)) {
                return true;
            }
      
            // if going one step forward or down didn't help, mark as unsafe i.e. 0
            mousePath[x][y] = 1;
            return false;
        }
        return false;
    }
}

module.exports = { exitMaze};
  

