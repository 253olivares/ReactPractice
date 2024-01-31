import React from "react"
import { useRef } from "react";

// Simple page that shows when our uselayouteffect runs
// UselayoutEffect functions the same as use effect and serves the same purpose the only difference is that use layouteffect runs rearly
// in the app component lifecycle than useeffect

function App() {

  const inputRef = useRef(null);

  // No matter where on the component use layouteffect is located it will always run before useEffect
  // useEffect is called after the page is rendered
  React.useEffect(()=> {
    console.log("useEffect");
    inputRef.current.value = "Hello"
  },[])
  // UseLayoutEffect is called before page is rendered
  React.useLayoutEffect(()=>{
    console.log(inputRef.current.value);
    console.log("uselayoutEffect");
  },[]);

  return (
    <React.Fragment>
      <div className="App">
        <input ref={inputRef} value="Pedros" />
      </div>
    </React.Fragment>
  )
}

export default App
