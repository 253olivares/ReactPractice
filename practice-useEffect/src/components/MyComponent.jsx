//useEffect() = React gook that tells react to DO SOME CODE WHEN (pick one):
//              This component re-renders
//              This component mounts
//              This state of a value

//useEffect(function, [dependencies])

// 1. useEffect(()=> {})            // runs after every re-render
// 2. useEffect(()=> {},[])         //runs only on mount
// 3. useEffect(()=> {},[value])    //runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, {useState, useEffect} from "react";

function MyComponent() {

    const [count,setCount] = useState(0);
    const [color, setColor] = useState("green");
    
    //run every time component rerenders
    // useEffect(()=> {
    //     document.title = `Count:${count}`
    // });

    //run one once out component mounts
    // useEffect(()=> {
    //     document.title = `Count:${count}`
    // },[]);

    //run count only when count updates (or anything in the array)
    useEffect(()=> {
        document.title = `Count:${count} ${color}`
        return ()=> {
            //cleanup code
        }
    },[count]);

    function addCount() {
        setCount(prevState => prevState+ 1);
    }

    function subtractCount() {
        setCount(prevState => prevState- 1);
    }

    function changeColor() {
        setCount(prevState => prevState === "green" ? "red": "green");
    }

     return (<>
        <p style={{color:color}}>Count: {count}</p>
        <button onClick={addCount}> Add </button>
        <button onClick={subtractCount}> Add </button><br/>
        <button onClick={changeColor}> Change Color </button>
    </>)
}

export default MyComponent