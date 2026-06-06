import React, { useState } from 'react';
import './Tooltip.css'

const Tooltip = ({ text, children, as: Tag = 'div' }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Tag
      className="tooltip"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div>{children}</div>
      {isVisible && <span className="tooltiptext">{text}</span>}
    </Tag>
  );
};

export default Tooltip;