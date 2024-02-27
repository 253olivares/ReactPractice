import React, {useState, useEffect, useRef} from 'react'
// import useState useEffect useRef
function MyComponent () {
    // Create a running state that will keep track of our stop watching.
    // This will dictate if our stopwatch is running
    const [isRunning, setIsRunning] = useState(false);
    // Create an elapsed time state
    // This state will be used to hold our as name implies elapsed time
    const [elapsedTime, setElapsedTime] = useState(0);

    // create a ref for interval this will be used to keep track of elapsed time. 
    const intervalIdRef = useRef(null);
    
    // Start time ref that keeps track our 0
    const startTimeRef = useRef(0);
    // use effect that will run every time our component is rerendered due to isRunning state

     
    useEffect(()=>{

        if(isRunning){
            // target our intervalRef and sets its current to equal a set interval function that runs every milisecond
            // every milisecond we set a new elapsed time which rerenders our component putting the new time on our dom
            intervalIdRef.current = setInterval(()=>{
                // we get elapsed time and then use our function ever rerender of the dom to display our elapsed time
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 40)
        }

        return ()=> {
            // we clear our interval when we return false.
            clearInterval(intervalIdRef.current)
        }
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    // stop function changes our running state to false and causes our component to rerender
    function stop() {
        
        setIsRunning(false);
    }

    // will set our elapsed time to 0
    // and set running to false format time rerenders due to our setfunction and since our elapsed time state is reset to 0 format time returns 0's

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){
        // math is done to calculate how many hours are in our elapsed time in miliseconds
        let hours = Math.floor(elapsedTime / (1000*60*60)); //1000 miliseconds in a seconds 60 seconds in a min 60 mins in a hour is how many miliseconds in an hour
        let minutes = Math.floor(elapsedTime /(1000*60)%60); //
        let seconds = Math.floor(elapsedTime / (1000)%60);
        let milliseconds = Math.floor((elapsedTime %1000)/10);

        // Stringify everything and pad black space with a 0 if our value is not 2 digits
        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        milliseconds = String( milliseconds).padStart(2,"0");
        // display our information every render
        return `${minutes}:${seconds}:${milliseconds}`
    }

    return (
        <div className='stopwatch'>
            <div className='display'>
                {formatTime()}
            </div>
            <div className='controls'>
                {/* Our control interface for our clock
                    Start button will trigger our start function
                    Stop - Stop function
                    Reset - Reset function
                */}
                <button onClick={start} className='start-button'>START</button>
                <button onClick={stop} className='stop-button'>STOP</button>
                <button onClick={reset} className='reset-button'>RESET</button>
            </div>
        </div>
    )
}

export default MyComponent