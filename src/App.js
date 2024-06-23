import React, { useState } from 'react';
import NumberCounter from './component/NumberCounter';
import './App.css'

function App() {
  const [activeBox, setActiveBox] = useState(1);

  const handleBoxClick = (boxNumber) => {
    setActiveBox(boxNumber);
  };

  return (
    <div className="App">
        <div class="neon-box">
    <h1>Coming Soon</h1>
  </div>
    </div>
  );
}

export default App;
