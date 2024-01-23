import React, {useState} from 'react'
// import react
function ColorPicker () {
    // create our function based component 
    const [color, setColor] = useState("#FFFFFF");
    // color state we create a default for white #FFFFFF

    // create a function that changes sets our new color form our input down below
    function handelColorChange(event) {
        setColor(event.target.value);
    }

    return (
        <>
            {/* housing div */}
            <div className='color-picker-container'>
                <h1>Color Picker</h1>
                {/* Div that will be used to display our current color state. Div will show hex value and change
                its background color based on what is plugged into style */}
                <div className='color-display' style={{backgroundColor: color}}>
                    <p>Selected Color: {color}</p>
                </div>
                {/* label for our input */}
                <label>Select a Color:</label>
                {/* input will let user interact with a rbg color box and as it changes the event listener on change will
                trigger the handlecolorchange function. Every time this function runs we will set that new rgb value into our state and pass it into the div
                a css property is then added to handel animations to ease transactions. */}
                <input type="color" value={color} onChange={handelColorChange} />
            </div>
        </>
    )
}

export default ColorPicker;