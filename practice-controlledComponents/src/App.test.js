// This is a test files further playing around with Reacts built in test module
// unfortunately I am not knowledgeable with reacts test api as I am unable to run its successfully. 

import {fireEvent, render, screen} from '@testing-library/react'
import FeedbackForm from './component/FeedbackForm'

// Normally jest would run our test scenario
describe("Feedback Form", ()=> {
    // We are declaring our test scenario  here
    test("Submission is disabled if score is lower than 5 and there is no feedback", ()=> {
        // This is a mock function 
        const handleSubmit = jest.fn();
        // we pass our mock function
        render(<FeedbackForm onsubmit={handleSubmit} />);

        // we grab our input element 
        const rangeInput = screen.getByLabelText(/Score:/);
        // Then interact with our input element byt changing its values to 40
        fireEvent.change(rangeInput, {target: {value: "4"}});

        // We get our button element
        const submitButton = screen.getByRole("button");
        // We trigger our submit button by running a emulated click 
        fireEvent.click(submitButton);

        // Here we are checking the results of our test
        // First we need to check to make sure our mock function has not been called or fired
        expect(handleSubmit).not.toHaveBeenCalled();

        // our second expect checks to see if our button has the disabled button
        expect(submitButton).toHaveAttribute("disabled");
    })
})