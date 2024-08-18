import { useState } from "react";
import './counter.css';

const counter = () => {
    const[constValue,setConstValue]= useState(0);
  return (
    <div>
      <h2>COUNTER</h2>
      <h1> {constValue} </h1>
      <div className="btn-grp">
      <button onClick={() => setConstValue(constValue - 1)}>Decrement</button>
      <button onClick={() => setConstValue(constValue + 1)}>Increment</button>
      </div>
    </div>
  )
}

export default counter