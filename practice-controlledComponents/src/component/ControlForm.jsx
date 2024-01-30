import React from "react";

const ControlForm = () => {
    const [name,setName] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        console.log('Form submitted');
    }

    return(
        <React.Fragment>
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
                        onChange={(e) => setName(prevName => prevName = e.target.value)} 
                        />
                    </div>
                    
                    <button disabled={!name} type="submit">
                        Submit
                    </button>
                </fieldset>
            </form>
        </React.Fragment>
    )
}

export default ControlForm;