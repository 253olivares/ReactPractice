import React, {useState, userState} from 'react';
 
function Counter() {
    // counter component
    // we set counter
    const [count, setCount]= useState(0);
    // increment our counter by 1 when pressed
    const increment =() => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div className='counter-container'>
            <p className='count-display'>{count}</p>
            <button className='counter-button' onClick={decrement}>decrement</button>
            <button className='counter-button' onClick={reset}>reset</button>
            <button className='counter-button' onClick={increment}>increment</button>
        </div>
    )
        // Same code as our updater function this was just done 
        // before that and then replicated to play around and practice updater functions
}

export default Counter;