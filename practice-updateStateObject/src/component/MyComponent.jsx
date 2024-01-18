import React, {useState} from 'react';

function MyComponent(){
    const [car,setCar] = useState({
        year:2024,
        make:"Ford",
        model:"Mustang"
    })

    function updateObjectYear(event) {
        // setCar({...car, year: event.target.value });

        //updater function
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
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={updateObjectYear} /><br />
            <input type="text" value={car.make} onChange={updateObjectMake} /><br />
            <input type="text" value={car.model} onChange={updateObjectModel} />
        </div>
    )
}
export default MyComponent