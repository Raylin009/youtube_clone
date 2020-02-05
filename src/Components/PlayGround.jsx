import React, { useState } from 'react';
import ConfigExperiment from './ConfigExperiment.jsx';

const PlayGround = () => {
  const allConfig = ['default', 'gentle', 'molasses', 'slow', 'stiff', 'wobbly'];
  return (
    <div className="container">
      <ConfigExperiment configArr={allConfig}/>
    </div>
  )
};

export default PlayGround;
