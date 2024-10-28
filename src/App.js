import React, { useState } from 'react';
import ShapeGenerator from './ShapeGenerator';
import './App.css';
import { ThemeProvider, useTheme } from './ThemeContext';

const AppContent = () => {
  const [sides, setSides] = useState(3);
  const [color, setColor] = useState('#ff0000');
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      <header>
        <h1>3D Shape Generator</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </header>
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
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
