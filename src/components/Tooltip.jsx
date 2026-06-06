import React, { useState } from 'react';
// import '../components/Too.css'
import './Tooltip.css'

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <span className="tooltiptext">{text}</span>}
    </div>
  );
};

export default Tooltip;