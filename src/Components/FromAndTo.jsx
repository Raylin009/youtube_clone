import React from 'react';
import {useSpring, animated}from 'react-spring';

const FromtAndTo = () => {
  const animation = useSpring({
    from: {opacity: 0 },
    to: {opacity: 1 },
  })

  const colorAnimation = useSpring({
    from: { color: 'blue' },
    to: { color: `rgb(255,0,0)` }
  })

  const multiAnimation = useSpring({
    from: { opacity: 0, color: 'red' },
    to: [
        { opacity: 1, color: '#ffaaee' },
        { opacity: 1, color: 'red' },
        { opacity: .5, color: '#008000' },
        { opacity: .8, color: 'black' }
    ]
  })

  return (
    <>
      <animated.h1 style={animation} >Hello Animation</animated.h1>
      <animated.h1 style={colorAnimation} >Hello Animation</animated.h1>
      <animated.h1 style={multiAnimation} >Hello Animation</animated.h1>
    </>
  )
}


export default FromtAndTo;
