// React hook = Special function that allows functional components
//              to use features without writing class components (React v16.8)
//              (useState, useEffect, useContext, useReducer, useCallback, and more... )

// useState() = A react hook that allows the creation of a stateful variable
//              and a setter function to update its value in the Virtual DOM.
//              [name, setName]

// every time use state is used it will rerender its component.

import MyComponent from "./components/MyComponent"
import Counter from "./components/Counter"

function App() {

  return (
    // <MyComponent></MyComponent>
    <>
    {/* added two counter to test state scope. State oly update and seems to be self contaminant so we can have multiple states with the same name
    and update individually to each of their own component. Since they're in their own components it will not update the other which is good for when
    we need to display a cart page that updates its value. We can create a component for each update with its own state that updates its value.
    Add a global state that keeps track of cart and user total and we effectively have a user intractable ecommerce site  */}
      <Counter></Counter>
      <Counter></Counter>
      {/* we pass props that will then create a state for the component that will these values to it */}
      <MyComponent name="Guest" age={0} employed={false}></MyComponent>
      <MyComponent name="Patrick" age={25} employed={false}></MyComponent>
    </>
  )
}

export default App
