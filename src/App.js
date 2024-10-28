import React, { useState } from 'react';
import ShapeGenerator from './ShapeGenerator';
import './App.css';

const App = () => {
  const [sides, setSides] = useState(3);
  const [color, setColor] = useState('#ff0000');

  return (
    <div>
      <header>
        <h1>3D Shape Generator</h1>
      </header>
      <div className="app-container">
        <div className="controls">
          <label>
            Number of sides:
            <input
              type="number"
              value={sides}
              onChange={(e) => setSides(parseInt(e.target.value))}
            />
          </label>
          <label>
            Color:
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
        </div>
        <ShapeGenerator sides={sides} color={color} />
      </div>
    </div>
  );
};

export default App;
