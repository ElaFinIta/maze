# Rat in a maze

A project to practice data structures and recursion.

## Goal:

Create a maze and check if there is a way to move from STARTING POINT to DESTINATION.
In this case the rat can only move in two direction:
- forward (right)
- and down

## Built with:
- REACT
- JXS
- CSS

## Steps:

1. [x] Create a maze in the form of a matrix of N. For example a matrix of 4 is a table, or grid of 4 rows and 4 columns. The minimun length of the matrix is 2.

2. [x] Set every cell to either 1, meaning free/walkable, or 0, meaning blocked. The starting point is always the top left of the maze, with coordinates i=1 and j=1. The destination is always the bottom right of the maze, with coordinates i=length of the maze - 1 and j=length of the maze - 1

![screenshot](screenshot2.png?raw=true "Screenshot of the single page application")

3. [x] make a separate createVisualMaze function that takes the binary maze and create the frontend with Cell and Row components

### Screenshot of early stage visual maze generation:
![screenshot](screenshot.png?raw=true "Screenshot of early stage maze generation")

4. [x] <del>create a binary maze/matrix filled with 0 to start comparing the rat path with the maze</del> 

5. [x] Make a copy of same binay maze generated before to be used as a starting point for the rat path.

6. [x] solve the binary maze: 
using the copy, with recursion, go forward to start searching for a PATH to solve the maze. If going forward (x+1) is not possible (value is 0), then go down (y+1). If the cell is free (value is 1) then mark the cell as a step taken (value is 3). Value 3 is necessary to mark the right path in CSS. Forward and down are the only two directions possible in this solution. The base case is reaching the end of the matrix, i.e., the last value in the last array, wich is the destination.

7. [x] create a visual maze for the solved binary mazed
8. [x] fix bug: app breaks when deleting size in input field
9. [x] fix maze growing onto header

![screenshot](solved.png?raw=true "Screenshot of the solved maze")

10. [x] styling in CSS, images in START and DESTINATION cells
11. [x] <del>figure out how to show 2 separate mazes: first the unsolved and THEN the solved one. PLEASE, react person, HELP ME :D</del> I did figure out but I adopted a better solution: to show the found path in the same maze, not showing two separate mazes. SLEEPING helped me XD Lesson learnt (?): STOP it and get some sleep. It's useless to try too hard when tired.

### Final screenshots:

![screenshot3](unsolved.png?raw=true "Screenshot of the generated unsolved application")

![screenshot4](unsolved.png?raw=true "Screenshot of the solved maze")

### Credits:

- mouse icon https://www.pngfind.com/mpng/himRwbh_download-png-rat-transparent-png/

- cheese icon https://freeiconshop.com/icon/cheese-icon-outline-filled/
- paw icon https://fontawesome.com/license
  