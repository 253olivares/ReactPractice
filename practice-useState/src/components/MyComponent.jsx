import React, {useState} from 'react';
// My Component state practice
function MyComponent(props) {
    // create a name state and set a basic of guests
    const [name, setName] = useState(props.name);
    // create an age state that has a default of 0
    const [age, setAge] = useState(props.age);
    // creates an isEmployed state that has a default of false
    const [isEmployed, setIsEmployed] = useState(props.employed);

    const updateName = ()=> {
        // update name function
        // sets our name string from guest to spongebob
        setName("Spongebob");
        console.log(name);
    }
// runs increment age function which adds 1 to our age everytime its pressed
// dom component rerenders when this is updated
    const incrimentAge = () => {
        setAge( age + 1);
    }
    // toggle employed states
    // changes our bool for employee status flips it to its inverted value. if true sets to false if false sets to true
    // Dom component rerenders when this changes
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return(
        <div>
            {/* we create a div where we keep track of these states 
            along with our p tags we create buttons that will change our state by setting a new name or add to our counter
            */}
            <p>name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>age: {age}</p>
            <button onClick={incrimentAge}>Increment Age</button>
            <p>Is Employed: {isEmployed ? "yes": "no"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    )
}   

export default MyComponent;