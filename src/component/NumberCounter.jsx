import React, { useState, useEffect } from 'react';
import './NumberCounter.css';

const NumberCounter = ({ isActive }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % 11); // Increment count from 0 to 10
    }, 500); // Update every 500 milliseconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isActive]);

  return (
    <div className={`counter-container ${isActive ? 'active' : ''}`}>
      <div className="counter">{isActive ? count : ''}</div>
    </div>
  );
};

export default NumberCounter;
