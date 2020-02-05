import React, { useState } from 'react';
import Box from './Box1.jsx'

const PlayGround = () => {
  // const [mods, changeConfig] = useState(['default', 'gentle', 'molasses', 'slow', 'stiff', 'wobbly']);
  // const [phase, update] = useState([0,0,0,0,0,0]);
  const [phase, update] = useState([0,0]);
  const [reverse, toggle] = useState(false);

  return (
    <div className="container">
      <button onClick={() => toggle(!reverse)}>Revers Animation</button>
      {/* {phase[0] > 0 && phase[1] > 0 && phase[2] > 0 && phase[3] > 0 && phase[4] > 0 && phase[5] > 0 &&(
        <h3>About god damn time</h3>
      )} */}
      {/* {
        mods.map((ele, index)=> (
          <Box 
            key={`${index}`} 
            id={index} 
            mod={ele} 
            reverse={reverse}
            onRest={() => !phase[index] && update([
              ...phase.slice(0,index),
              phase[index] + 1,
              ...phase.slice(index + 1),
            ])}
          />
        ))
      } */}
      {phase[0] > 0 && phase[1] > 0 && (
        <h3>Animation Complete</h3>
      )}

      <Box id="0" mod={'default'} reverse={reverse} onRest={() => !phase[0] && update([phase[0] + 1, phase[1]])}/>
      <Box id="1" mod={'gentle'} reverse={reverse} onRest={() => !phase[1] && update([phase[0], phase[1] + 1])}/>
      {/* <Box id="2" mod={'molasses'} reverse={reverse} onComplete={null}/>
      <Box id="3" mod={'slow'} reverse={reverse} onComplete={null}/>
      <Box id="4" mod={'stiff'} reverse={reverse} onComplete={null}/>
      <Box id="5" mod={'wobbly'} reverse={reverse} onComplete={null}/> */}

    </div>
  )
};

export default PlayGround;
