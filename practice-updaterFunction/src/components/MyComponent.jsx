import React, {useState} from 'react'

function MyComponent(){

    const [count,setCount] = useState(0);

    function increment(){
        //uses the Current state to calculate the NEXT State
        //set functions do not trigger an update
        //react batches together state updates for performance reasons
        //NEXT state becomes the CURRENT state after an update
        setCount(count + 1);

        //updater function to add the value of 1 to our integer
        setCount (prevCount =>  prevCount +1);
    }

    function decrement() {
        setCount(count - 1);

        //updater function to remove the value of 1 from our integer
        setCount(prevCount=> prevCount -1);
    }

    function reset() {
        setCount(0);

        //updater function to set our count to 0
        setCount(prevCount => prevCount = 0);
    }

    return (

        <div>
            <p>Count: {count} </p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    )

}

export default MyComponent