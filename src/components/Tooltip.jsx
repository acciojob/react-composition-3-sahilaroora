import React, { useState } from 'react';

const Tooltip = ({ text, children, as: Tag = 'div' }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Tag
      className="tooltip"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div>
        <div>{children}</div>
      </div>
      {isVisible && <span className="tooltiptext">{text}</span>}
    </Tag>
  );
};

export default Tooltip;