import React from "react";

const ControlForm = () => {
    // Create a name state
    const [name,setName] = React.useState("");
    // submit function that will reset our name and deliver a mention to emulate a form being sent
    const handleSubmit = (e) => {
        e.preventDefault();
        // prevent page from reloading
        // set name
        setName("");
        console.log('Form submitted');
    }

    return(
        <React.Fragment>
            {/* on submit function that will run when submitted */}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="Field">
                        <label htmlFor="name">Name:</label>
                        <input 
                        id="name"
                        type="text" 
                        placeholder="Name" 
                        name="name" 
                        value={name} 
                        // function that will run a set name that whenever it detects a change in the dom will set the name to our e.target value
                        onChange={(e) => setName(prevName => prevName = e.target.value)} 
                        />
                    </div>
                    {/* Provider a disable submit that keeps user from submitting when our input is empty which is bind to our state */}
                    <button disabled={!name} type="submit">
                        Submit
                    </button>
                </fieldset>
            </form>
        </React.Fragment>
    )
}

export default ControlForm;