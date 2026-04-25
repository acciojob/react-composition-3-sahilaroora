import React, { useState } from "react";
import "./styles.css"; // optional for styling

function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{ display: "inline-block", position: "relative" }}
    >
      {children}

      {show && (
        <span
          className="tooltiptext"
          style={{
            visibility: "visible",
            backgroundColor: "black",
            color: "#fff",
            textAlign: "center",
            borderRadius: "5px",
            padding: "5px",
            position: "absolute",
            bottom: "125%",
            left: "50%",
            transform: "translateX(-50%)",
            whiteSpace: "nowrap"
          }}
        >
          {text}
        </span>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: "50px" }}>
      <Tooltip text="Hello Tooltip!">
        <button>Hover me</button>
      </Tooltip>

      <br /><br />

      <Tooltip text="This is a paragraph tooltip">
        <p>Hover over this text</p>
      </Tooltip>
    </div>
  );
}