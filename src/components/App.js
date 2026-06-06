import React from 'react';
import Tooltip from './Tooltip';
// import './App.css';

function App() {
  return (
    <div>
      <Tooltip text="This is another tooltip">
        <h1>Hover over me</h1>
      </Tooltip>
      
      <br/>

      <Tooltip text="This is another tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
}

export default App;