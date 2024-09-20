import React, { useState } from 'react';
import Grid from './Grid';
import './App.css';

const DIRECTIONS = ['North', 'East', 'South', 'West'];

function App() {
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0 });
  const [robotDirection, setRobotDirection] = useState('North');

  const moveForward = () => {
    const { x, y } = robotPosition;
    switch (robotDirection) {
      case 'North':
        if (y > 0) setRobotPosition({ x, y: y - 1 });
        break;
      case 'East':
        if (x < 4) setRobotPosition({ x: x + 1, y });
        break;
      case 'South':
        if (y < 4) setRobotPosition({ x, y: y + 1 });
        break;
      case 'West':
        if (x > 0) setRobotPosition({ x: x - 1, y });
        break;
      default:
        break;
    }
  };

  const rotateLeft = () => {
    const newIndex = (DIRECTIONS.indexOf(robotDirection) + 3) % 4;
    setRobotDirection(DIRECTIONS[newIndex]);
  };

  const rotateRight = () => {
    const newIndex = (DIRECTIONS.indexOf(robotDirection) + 1) % 4;
    setRobotDirection(DIRECTIONS[newIndex]);
  };

  return (
    <div className="app">
      <h1>Robot Controller</h1>
      <Grid robotPosition={robotPosition} robotDirection={robotDirection} />
      <div className="controls">
        <button onClick={rotateLeft}>Rotate Left</button>
        <button onClick={moveForward}>Move Forward</button>
        <button onClick={rotateRight}>Rotate Right</button>
      </div>
    </div>
  );
}

export default App;
