import React from 'react';
import {useSpring, animated} from 'react-spring'

const Box1 = ({ id }) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}});
  
  return (
    <div className={`box-${id}`} style={props}>
      <animated.h2 style={{...props, textAlign: 'center'}} >Just Words</animated.h2>
    </div>
  )
};

export default Box1;