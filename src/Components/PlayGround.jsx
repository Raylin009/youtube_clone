import React, { useState, useRef} from 'react';
import { useSpring } from 'react-spring';
import Box from './Box1.jsx';
import FromAndTo from'./FromAndTo.jsx';

const PlayGround = () => {
  const animation = (on) => useSpring({
    from: {opacity: 0},
    to: {opacity:1},
    reset: true,
    reverse: on,
  })

  const colorAnimation = (on) => useSpring({
    from: { color:'blue' },
    to: { color:`rgb(255,0,0)` },
    reset: true,
    reverse: on,
  });

  const multiAnimation = (on) => useSpring({
    from: { opacity: 0, color: 'red' },
    to: [
        { opacity: 1, color: '#ffaaee' },
        { opacity: 1, color: 'red' },
        { opacity: .5, color: '#008000' },
        { opacity: .8, color: 'black' }
    ],
    reset: on,
    reverse: on,
  });

  const animation_state = (on) => useSpring({
    color: on ? 'blue' : 'red'
  });

  return (
    <div className="container">
      <Box styles={[animation, colorAnimation, multiAnimation]}/>
      <Box styles={[animation_state]}/>
      {/* <Box />
      <Box />
      <Box />
      <Box />      
      <Box />      
      <Box />      
      <Box />      
      <Box />       */}
    </div>
  )
};

export default PlayGround;
