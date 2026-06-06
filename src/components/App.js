// import React from 'react';
import React from 'react';
import Tooltip from './Tooltip';

function App() {
  return (
    <div>
      <Tooltip text="This is another tooltip" as="h2">
        Hover over me
      </Tooltip>
      <br/>

      <Tooltip text="This is another tooltip" as="p">
        Hover over me to see another tooltip
      </Tooltip>
    </div>
  );
}

export default App;