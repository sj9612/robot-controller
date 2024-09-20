import React from 'react';
import './Grid.css';

const directionArrows = {
  North: '↑',
  East: '→',
  South: '↓',
  West: '←',
};

const Grid = ({ robotPosition, robotDirection }) => {
  const gridSize = 5;

  return (
    <div className="grid">
      {[...Array(gridSize)].map((_, rowIndex) => (
        <div key={rowIndex} className="row">
          {[...Array(gridSize)].map((_, colIndex) => (
            <div key={colIndex} className="cell">
              {robotPosition.x === colIndex && robotPosition.y === rowIndex && (
                <div className="robot">
                  <span className="direction-indicator">
                    {directionArrows[robotDirection]}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;