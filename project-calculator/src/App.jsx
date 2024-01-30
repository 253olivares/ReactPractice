import React, {
  useRef,
  useState
} from "react";

// this will be our calculator application
// Everything will be sustained in our single app component

function App() {
  // Begin by creating refs that we will use to keep track of our values in dom.
  // Create our refs and set our values to null to begin
  const inputRef = useRef(null);
  const resultRef = useRef(null);

  // Result state
  // This will keep track of our totals whenever we add to it and update the dom to reflect the change
  const [result,setResult] = useState(0);

  // Addition function that takes our state and uses its set state function.
  // We then add our input ref value that we bind to our input dom element
  // Following functions minus, times, and divide do the same by taking our result state and uses setstate with proper math function to mutate our state. 
  const plus = (e) => {
    e.preventDefault();
    setResult(prevResult => prevResult + Number(inputRef.current.value));
  };

  const minus = (e) => {
    e.preventDefault();
    setResult(prevResult=> prevResult - Number(inputRef.current.value));
  };

  const times = (e) => {
    e.preventDefault();
    setResult(prevResult=> prevResult * Number(inputRef.current.value))
  };

  const divide = (e) => {
    e.preventDefault();
    setResult(prevResult => prevResult / Number(inputRef.current.value));
  };

  // Reset input does its name states and resets our input value
  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  // reset result resets our result value to 0
  const resetResult = (e) => {
    e.preventDefault();
    setResult(prevResult => prevResult = 0);
  };

  return (
    <React.Fragment>
      <div className="App">
        <div>
          <h1>Simple Calculator</h1>
        </div>
        <form>
          {/* p tag displays our result which is our current results let it be 2 of we start with 1+1 */}
          <p ref={resultRef}>
            {result}
          </p>
          {/* input is where we put our next value we want to use a math function with */}
          <input 
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
          />
          {/* Buttons that foes the following math functions */}
          <button onClick={plus}>Add</button>
          <button onClick={minus}>Minus</button>
          <button onClick={times}>Times</button>
          <button onClick={divide}>Divide</button>
          <button onClick={resetInput}>Reset Input</button>
          <button onClick={resetResult}>Reset Result</button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default App
