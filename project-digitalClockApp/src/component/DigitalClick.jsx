import React, {useState, useEffect} from "react";
// Import React, UseState, & UseEffect

// Create a digital clock function component
function DigitalClock() {

    // Time state that is set to current system date
    const [time, setTime] = useState(new Date());

    // useEffect function will run at the start when the application mounts
    // once mounted we will create a interval function
    useEffect(()=> {
        //when we mount the clock create interval that will add a second to the clock every second
        const intervalId = setInterval(() => {
            // every second we set the time to the new date
            setTime(new Date());
        }, 1000); 

        return () => {
            //when the clock is unmount clear interval created previously
            clearInterval(intervalId);
        }
    },[]);

    // function format time
    function formatTime() {
        // get our hours minutes and seconds from time state and creates a pm or am variable depending on the hour
        // function then mounts to the dom and continues to update our component re render every time our interval sets a new time. 
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12? "PM" : "AM"
        
        //if returns 0 then use 12
        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(meridiem)}`
    }
    
    // function that we run in our format time return to format our number placement to pad any blank spaces with a 0 whenever our values are not double digits.

    function padZero(number) {
        return (number < 10 ? "0":"") + number
    }
    // return our clock component we created within clock container
    // css is then applied in our index css to stretch out the clock component to cover to whole browser window
    // and format our actual clock within.
    return ( 
        <div className="clock-container">
            <div className="clock">
                {/* span calculated every rerender */}
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}

export default DigitalClock;