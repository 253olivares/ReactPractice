import React, {useState} from "react";
import './counter.css'

// most of this you may of seen from my practice counter module. This is just a coding practice interview
// to create a counter from scratch from the top of my head
// no references or guides 

function Counter() {
    // Our state
    const [counter,setCounter] = useState(0);
    // Our functions to mutate our state
    function addCount() {
        setCounter(prevCounter => prevCounter + 1);
    }

    function resetCount() {
        setCounter(prevCounter => prevCounter = 0);
    }

    function minusCount() {
        setCounter(prevCounter => prevCounter - 1);
    }

    return (
        <React.Fragment>
            <div className="box">
                <div className="counter">
                    <span>{counter}</span>
                </div>
                <div className="interface">
                    <button className="addCount" onClick={addCount}>Add 1</button>
                    <button className="resetCount" onClick={resetCount}>Reset</button>
                    <button className="minusCount" onClick={minusCount}>Remove 1</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Counter