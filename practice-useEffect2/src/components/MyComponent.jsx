import React,{useState,useEffect} from "react"
// in this component we listen for window resizes
// we create one useEffect that runs at teh start of our program
// it adds an event listener that runs handResizes whenever our window changes resolution / size
// the function sets new values to our width and height which then
function MyComponent() {
    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    useEffect(()=> {
        // runs code when component mounts
        window.addEventListener("resize",handleResize);
        console.log("EVENT LISTENER ADDED");

        //clean up code that runs when component unmounts
        return()=> {
            window.removeEventListener("resize",handleResize);
            console.log("Event Listener Removed")
        }
    },[])
    // useEffect that runs when width and heigh changes
    useEffect(()=> {
        document.title=`Size: ${width} x ${height}`;
    },[width, height])
    // function that sets new width and height values when our windows resize eventhandler triggers
    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }

    return (
        <>
        {/* we show our height and width */}
        <p>Window Height: {height}</p>
        <p>Window Width: {width}</p>
        </>
    )
}

export default MyComponent;