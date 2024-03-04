import React from "react";

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: React.ReactNode
}

const Counter = ({setCount,children}: CounterProps) => {
    
  return (
    <div>
        <h1>{children}</h1>
        <button onClick={()=> setCount(prev=> prev+1)}>+</button>
        <button onClick={()=> setCount(prev=> prev+1)}>+</button>
    </div>
  )
}

export default Counter;