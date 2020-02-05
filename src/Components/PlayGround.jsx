import React, { useState } from 'react';
import Box from './Box1.jsx'

const PlayGround = () => {
  const [mods, changeConfig] = useState(['default', 'gentle', 'molasses', 'slow', 'stiff', 'wobbly']);

  const [reverse, toggle] = useState(false);

  return (
    <div className="container">
      <button onClick={() => toggle(!reverse)}>Revers Animation</button>

      <Box id="0" mod={'default'} reverse={reverse} onComplete={null}/>
      <Box id="1" mod={'gentle'} reverse={reverse} onComplete={null}/>
      <Box id="2" mod={'molasses'} reverse={reverse} onComplete={null}/>
      <Box id="3" mod={'slow'} reverse={reverse} onComplete={null}/>
      <Box id="4" mod={'stiff'} reverse={reverse} onComplete={null}/>
      <Box id="5" mod={'wobbly'} reverse={reverse} onComplete={null}/>

    </div>
  )
};

export default PlayGround;
