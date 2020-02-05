import React, { useState } from 'react';
import {useSpring, animated, config} from 'react-spring'

const Box1 = ({ id, mod, reverse, onComplete}) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}, config: mod});
  const grow = useSpring({
    width: 400, 
    from: {width: 200}, 
    config: config[mod],
    reset: true,
    reverse,
  })
  
  return (
    <animated.div className={`box box-${id}`} style={grow}>
      <h2 style={{ textAlign: 'center'}} >
        {mod}
      </h2>
    </animated.div>
  )
};

export default Box1;