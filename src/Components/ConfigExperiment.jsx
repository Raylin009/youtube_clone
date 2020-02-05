import React, { useState } from 'react';
import Box from './Box1.jsx'

const ConfigExperiment = ({ configArr}) => {
  const [reverse, toggle] = useState(false);
  return (
    <div className="container">
      <button onClick={() => toggle(!reverse)}>Revers Animation</button>
       { configArr.map((ele, index)=> (
          <Box 
            key={`${index}`} 
            id={index} 
            mod={ele} 
            reverse={reverse}
          />
        ))
      }

    </div>
  )
}

export default ConfigExperiment;
