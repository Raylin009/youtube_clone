import React, { useState } from 'react';
import { animated } from 'react-spring';

const Box1 = ({ styles=[{}]}) => {
  const [on, toggle] = useState(false);
  const handleToggle = () => {toggle(!on)
  console.log(on)};

  return (
    <div className={'box'}>
      <div className={'inner-box'}>
        <div className={'animation-portal'}>
          {console.log(styles)}
          {styles.map((item, key)=> <animated.h1 style={item(on)} key={key}>Hello World</animated.h1>)}
        </div>
        <button onClick={handleToggle}>Animate Motion</button>
      </div>
    </div>
  )
};

export default Box1;