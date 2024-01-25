import React, {
  useRef,
  useState
} from "react";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result,setResult] = useState(0);

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

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

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
          <p ref={resultRef}>
            {result}
          </p>
          <input 
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
          />
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
