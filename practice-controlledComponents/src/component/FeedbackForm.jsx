import React from "react";
// Feedbackform components
export default function FeedbackForm() {
    // Creating a score and comment state
    const [score, setScore] = React.useState("10");
    const [comment, setComment] = React.useState("");
    // submit function that will emulate a form submissions when conditions are meet
    const handleSubmit = (e) => {
        // e prevent keeps page from reloading
        e.preventDefault();
        // if our score state is above 5 and our comment lenfth is greater than 10 we allow the user to submit our form.
        // Otherwise we keep the form from submitting and ask the user to fill out requirements
        if (Number(score) <= 5 && comment.length <= 10){
            alert("Please provide a comment explaining why the experience was poor.")
            return;
        }
        console.log("Form submitted!");
        // reset our states
        setComment("");
        setScore("10");
    }

    return(
        <div className="App">
            {/* our onsubmit functions */}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedback form</h2>
                    <div className="Field">
                        {/* Label will display our score as we change our slider */}
                        <label>Score: {score} ⭐ </label>
                        <input 
                        type="range" 
                        // set and min and max for our range
                        min={0} 
                        max={10} 
                        value={score} 
                        // on change sets our score to what our range slider is changed to
                        onChange={e => setScore(e.target.value)} 
                        />
                    </div>
                    <div>
                        {/* comment box */}
                        <label>Comment: </label>
                        {/* bind our comment state to the text area
                        when our text area detects a change in the dom we set our comments state to our targets value */}
                        <textarea value={comment} onChange={e=> setComment(prevComment => prevComment = e.target.value)} />
                    </div>
                    {/* submit button triggers form on submit */}
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}