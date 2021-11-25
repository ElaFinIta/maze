# Rat in a maze

An exercise project to practice backtracking with REACT.

## Goal:

Create a maze and check if there is a way to move from STARTING POINT to DESTINATION.

***picture here***

## Steps:

1. - [x] Create a maze in the form of a matrix of N. For example a matrix of 4 is a table, or grid of 4 rows and 4 columns.

2. - [x] Set every cell to either 1, meaning free/walkable, or 0, meaning blocked. The starting point is always the top left of the maze, with coordinates i=1 and j=1. The destination is always the bottom right of the maze, with coordinates i=length of the maze - 1 and j=length of the maze - 1

![screenshot](screenshot.png?raw=true "Screenshot of the single page application")

3. - [x] make a separate createVisualMaze function that takes the binary function and create the frontend with Cell and Row components

4. - [x] create an empty maze to start searching for a PATH to solve the maze

![screenshot](screenshot2.png?raw=true "Screenshot of the single page application")

5. - [ ] solve the binary maze
6. - [ ] create a new visual maze for the solved binary mazed
7. - [ ] fix bug: app breaks when deleting size in input field
8. - [ ] fix maze growing onto header