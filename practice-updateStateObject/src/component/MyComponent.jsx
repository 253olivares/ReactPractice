import React, {useState} from 'react';
// import state 
function MyComponent(){
    // create a car state insert an object
    const [car,setCar] = useState({
        year:2024,
        make:"Ford",
        model:"Mustang"
    })
    // update our car object year we take in our event then target its value
    function updateObjectYear(event) {
        // setCar({...car, year: event.target.value });

        //updater function
        // we update our object by creating a new object spreading our object values inside
        // {year: 2024, make: "Ford", model: "Mustang, year:"input value" "}
        // The array will then see two years and update the year with the later input to create our new object with updated values
        // state then rerenders our page with updated object values
        setCar(prevCar => ({...prevCar, year: event.target.value }));
    }

    function updateObjectMake (event) {
        // setCar({...car, make: event.target.value });
        setCar(prevCar => ({...prevCar, make: event.target.value }));
    }

    function updateObjectModel(event) {
        // setCar({...car, model: event.target.value });
        setCar(prevCar => ({...prevCar, model: event.target.value }));
    }

    return(
        <div>
            {/* p tag demonstrates our current state value and updates based on inputs
            this element is rerendered every time our framework senses changes in our state from our setter */}
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
            {/* bind our values of state to our input use on change to direct an changes and update our state
            when the input field changes */}
            <input type="number" value={car.year} onChange={updateObjectYear} /><br />
            <input type="text" value={car.make} onChange={updateObjectMake} /><br />
            <input type="text" value={car.model} onChange={updateObjectModel} />
        </div>
    )
}
export default MyComponent