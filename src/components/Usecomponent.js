import React from 'react'
import { useState } from 'react';

const Usecomponent = ({name}) => {
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(1);
  return (
    <div>
        <h2>{count2}</h2>
        <h2>{count}</h2>
      <h2>{name }</h2>
      <h2>Second</h2>
    </div>
    
  )
}

export default Usecomponent
