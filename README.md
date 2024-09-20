# Robot Controller App

This is a simple React-based web application that simulates controlling a robot on a 5x5 grid. The user can move the robot forward and rotate it to face any of the four cardinal directions (North, East, South, West). The application also features a Bellroy-inspired look with a clean, minimalist design.

## Features
1) Robot movement: Move the robot forward on the grid in the direction it is currently facing.
2) Rotation: Rotate the robot left or right to change its direction.
3) Visual direction indicator: The robot shows which direction it’s facing at any given time with arrows.
4) Responsive, minimalist design: Inspired by Bellroy’s design aesthetic, the layout is clean and intuitive.

## Installation
Follow these steps to get the application running on your local machine:

### Prerequisites
Ensure you have Node.js installed.

### Steps
1) Clone the repository: [https://github.com/sj9612/robot-controller.git]
2) Navigate to the project directory: cd robot-controller
3) Install dependencies: npm install
4) Run the development server: npm start
5) Access the app: http://localhost:3000

## How to use the App

### Start the App:  
The app loads with a 5x5 grid. The robot starts at the top-left corner (0, 0), facing north (↑).

### Move the Robot:
1) Use the Move Forward button to move the robot in the direction it’s currently facing.
2) The robot will move one cell at a time, and if it reaches the edge of the grid, it won’t move further in that direction.

### Rotate the Robot:
1) Use the Rotate Left button to rotate the robot 90 degrees counter-clockwise.
2) Use the Rotate Right button to rotate the robot 90 degrees clockwise.
3) The arrow on the robot indicates which direction it is facing (↑ for North, → for East, ↓ for South, ← for West).

### Grid Boundaries:
1) The robot can’t move outside the 5x5 grid. If it tries to move off the grid, the movement will be ignored.

