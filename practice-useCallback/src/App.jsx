import React from "react"
import Child from "./component/Child";

function App() {
  const [toggle, setToggle] = React.useState(false);
  const [data,setData] = React.useState("This is data")

  // Same idea as useMemo only difference is that were saving the function vs saving the return value;
  // This keeps the function from rendering everytime the component rerenders due to toggle change.
  const returnComment = React.useCallback((name)=>{
    return data + name;
  }, [])

  return (
    <React.Fragment>
      <div className="App">
        <Child returnComment={returnComment}/>
        <button
        onClick={()=>{
          setToggle(!toggle)
        }}
        >
        {" "}
        Toggle
        </button>
        {toggle && <h1>toggle</h1>}
      </div>
    </React.Fragment>
  )
}

export default App
