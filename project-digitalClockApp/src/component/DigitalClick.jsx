import React, {useState, useEffect} from "react";

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(()=> {
        //when we mount the clock create interval that will add a second to the clock every second
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000); 

        return () => {
            //when the clock is unmount clear interval created previously
            clearInterval(intervalId);
        }
    },[]);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12? "PM" : "AM"

        //if returns 0 then use 12
        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(meridiem)}`
    }

    function padZero(number) {
        return (number < 10 ? "0":"") + number
    }

    return ( 
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}

export default DigitalClock;