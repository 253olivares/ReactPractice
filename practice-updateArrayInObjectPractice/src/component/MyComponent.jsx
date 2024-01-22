import React, {useState} from 'react'
// Our function component
function MyComponent () {
    // Start by create our states 
    // Car State this will hold an array of our objects which will further include more objects that dictate our cars information like year and make / model
    const [cars, setCars] = useState([]);
    // State to keep track of our cars year
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    // State to keep track of our cars make
    const [carMake,setCarMake] = useState("");
    // state to keep track of our cars model
    const [carModel,setCarModel] = useState("");
    // function updates our cars array state
    function handleAddCar(){
        // create a new object
        const newCar = {year: carYear, make:carMake, model: carModel};
        // spread all our previous objects and append the new car object
        // [object1, object2, object3, newCar]
        setCars((prevCars)=> [...prevCars, newCar])
        // Reset our inputs by clearing the states and resetting them back to original values. 
        setCarYear(new Date().getFullYear())
        setCarMake("");
        setCarModel("");
    }
    // Remove car from our car state by passing its index location
    function handleRemoveCar(index) {
        setCars(prevCars=> prevCars.filter((_,i)=> i !== index))
    }
    // Most of theses function only changes the state value of the current car that is going to be appended to the car array.
    // If we want to change the car array values itself we would have to add additional functionality that has the user select the car 
    // and then track the index of the car they select. After which we would have to edits the state values in the array.
// function to change our cars year by targeting our event element and setting the state to its value.
    function handleYearChange(event) {
        setCarYear(event.target.value);
    }
// Function to change our cars make 
    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }
    // function to change our cars model
    function handleModelChange(event) {
        setCarModel(event.target.value);
    }
    return (
        <div>
            <h2>List of Car Objects</h2>
            {/* List element that keeps track of our car array. This ul element updates and rerenders any time our
             car array updates and a new objet is appended to the array */}
            <ul>
                {cars.map((car,index) => 
                // map function to loop through our array and set an index for each car listing
                // then add and double click listener that will run the remove car function when the framework 
                // recognizes the user has double clicked the li element. 
                // index is passed and then cleared from teh array.
                    <li key={index} onDoubleClick={()=>handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}
            </ul>
            {/* bind our value to the state on use the on change event listener to update our state 
            whenever the user makes a change to the input box.
            When the user is dont making inputs they use the submit button to pass these values onto a new object and push it
            onto our car state that keep track of the cars the user has created.*/}
            <input type="number" value={carYear} onChange={handleYearChange}/> <br/>    
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter car make'/> <br/> 
            <input type="text" value={carModel} onChange={handleModelChange} placeholder='Enter car model'/> <br/>

            <button onClick={handleAddCar}>Add Car</button> 
        </div>
    )
}

export default MyComponent