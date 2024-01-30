import React from "react"
// High order component practice


// HOC Setup

// in our with mouse position function we are passing our cloned components panelMouseLogger and pointMouseLogger
// This is out function that will return a new component using pre-existing components
const withMousePosition = (WrappedComponent) => {
  return (props) => {
    // Create a new mousePosition state in our new component
    const [mousePosition,setMousePosition] = React.useState({
      x: 0,
      y:0
    })
    // Create a use event that creates a listener for the component that is listening for the windows mouse move.
    // When mouse moves to target the client x and y cords of the mouse and set it for our mouse state
    React.useEffect(()=> {
      
      const handleMousePositionChange = (e)=> {
        setMousePosition({
          x:e.clientX,
          y:e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMousePositionChange);
      // When our component unmounts remove our mouse move listener
      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange)
      };
    },[]);
    // we are returning our component we cloned and took recently and returning our props any that may of been previously passed already
    // by spreading it onto our new component and returning a new prop called mouse position that is called in our previous components
    return <WrappedComponent {...props} mousePosition={mousePosition}></WrappedComponent>
  }
}

// before setup
// Our stencils These functions are our render components of our hoc. 
// Both PanelMouseLogger and PointMouseLogger
// if we were to fully construct these components they would feature a lot of the same states and functions. Unnecessary repeat code with the only
// difference being in the return aspect of these components. Both to be displayed in separate parts of the page the same data in
// different methods. 
const PanelMouseLogger = ({mousePosition}) => {
  // expecting a mouse position prop which will be turned using our withMousePosition function
  if (!mousePosition) {
    return null;
  }

  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <div className="Row">
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  )
}
// before setup
const PointMouseLogger = ({mousePosition})=> {
  if(!mousePosition){
    return null;
  }
  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  )
}

// we are cloning our components and passing them into our with mouse position and setting them as the tracker
// components. This way we are passing clones of our component to the same function to share the same code that will create states
// that keep track of the users mouse. 
const PanelMouseTracker=  withMousePosition(PanelMouseLogger );
const PointMouseTracker = withMousePosition(PointMouseLogger);

// Our App where we take our components and render
function App() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="Header">Little Lemon Restaurant</header>
        {/* call our tracker functions that created new components by cloning pre-existing components and adding our state and use effect
        functions from withmouseposition onto the new component. */}
        <PanelMouseTracker />
        <PointMouseTracker />
      </div>
    </React.Fragment>
  )
}

export default App
