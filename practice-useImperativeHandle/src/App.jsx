import React, {useRef} from "react"
import ImperativeHandelButton from './ImperativeHandel'

function App() {
  const buttonRef = useRef(null);
  return (
    <React.Fragment>
      <button 
      onClick={() => {
        buttonRef.current.alterToggle();
      }}>Button From Parent</button>
      <ImperativeHandelButton ref={buttonRef}/>
    </React.Fragment>
  )
}

export default App
