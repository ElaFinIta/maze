# Rat in a maze

A project to practice data structures and recursion.

## Goal:

Create a maze and check if there is a way to move from STARTING POINT to DESTINATION.

## Built with:
- REACT
- JXS
- CSS

## Steps:

1. [x] Create a maze in the form of a matrix of N. For example a matrix of 4 is a table, or grid of 4 rows and 4 columns. The minimun length of the matrix is 2.

2. [x] Set every cell to either 1, meaning free/walkable, or 0, meaning blocked. The starting point is always the top left of the maze, with coordinates i=1 and j=1. The destination is always the bottom right of the maze, with coordinates i=length of the maze - 1 and j=length of the maze - 1

![screenshot](screenshot.png?raw=true "Screenshot of the single page application")

3. [x] make a separate createVisualMaze function that takes the binary maze and create the frontend with Cell and Row components

4. [x] <del>create a binary maze/matrix filled with 0 to start comparing the rat path with the maze</del> 

![screenshot](screenshot2.png?raw=true "Screenshot of the single page application")

4. [x] Make a copy of same binay maze generated before to be used as a starting point for the rat path.

5. [x] solve the binary maze: 
using the copy, with recursion, go forward to start searching for a PATH to solve the maze. If going forward (x+1) is not possible (value is 0), then go down (y+1). If the cell is free (value is 1) then mark the cell as a step taken (value is 3). Value 3 is necessary to mark the right path in CSS. Forward and down are the only two directions possible in this solution. The base case is reaching the end of the matrix, i.e., the last value in the last array, wich is the destination.

6. [x] create a visual maze for the solved binary mazed
7. [x] fix bug: app breaks when deleting size in input field
8. [x] fix maze growing onto header

![screenshot](solved.png?raw=true "Screenshot of the solved maze")

9. [x] styling in CSS, images in START and DESTINATION cells
10. [ ] figure out how to show 2 separate mazes: first the unsolved and THEN the solved one. PLEASE, react person, HELP ME :D

### Credits:

- mouse icon https://www.pngfind.com/mpng/himRwbh_download-png-rat-transparent-png/

- cheese icon https://freeiconshop.com/icon/cheese-icon-outline-filled/
  