import React, {forwardRef, useImperativeHandle, useState}from "react";

// our imperative Component we are going to use for this module
// I will be passing up setToggle to our parent component to allow it to trigger our function and change our toggle state
// As mentioned in the readme this is usually not recommended 

// Using our forward ref we expose our parent element to this dom module
const ImperativeHandelButton = forwardRef((props,ref) => {

    const [toggle,setToggle] = useState(false);
    // Imperative handle takes our ref and sets our alterToggle function so its passed to the parent div using forward ref
    // Same idea as when we pass down state functions using props only difference being we are creating an object that is going to use ref
    // to store our functions that have the set functions inside
    useImperativeHandle(ref, () => ({
        alterToggle() {
            // setToggle changes our toggle state
            setToggle(!toggle)
        },
    }));

    return (
        <React.Fragment>
            <button
            onClick={()=> {
                // set toggle in child dom so it can change the toggle state as well
                setToggle(!toggle)
            }}
            >
                Button From Child
            </button>
            {/* Turnery that checks to see if toggle is true. if it is then we display our span otherwise nothing.
            && is another way to use turnery often times preferable since it only requires one condition versus providing a second condition
            ex: bool ? Condition true : Conditional false  (Both are needed to function)
            ex: bool && Condition true     (Only needs true) */}
            {toggle && <span>Toggle</span>}
        </React.Fragment>
    )
});  

export default ImperativeHandelButton;