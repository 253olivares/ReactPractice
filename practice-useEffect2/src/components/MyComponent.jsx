import React,{useState,useEffect} from "react"

function MyComponent() {
    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    useEffect(()=> {
        window.addEventListener("resize",handleResize);
        console.log("EVENT LISTENER ADDED");

        //clean up code that runs when component unmounts
        return()=> {
            window.removeEventListener("resize",handleResize);
            console.log("Event Listener Removed")
        }
    },[])

    useEffect(()=> {
        document.title=`Size: ${width} x ${height}`;
    },[width, height])

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }

    return (
        <>
        <p>Window Height: {height}</p>
        <p>Window Width: {width}</p>
        </>
    )
}

export default MyComponent;