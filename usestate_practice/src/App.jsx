// React hook = Special function that allows functional components
//              to use features without writing class components (React v16.8)
//              (useState, useEffect, useContext, useReducer, useCallback, and more... )

// useState() = A react hook that allows the creation of a stateful variable
//              and a setter function to update its value in the Virtual DOM.
//              [name, setName]


import MyComponent from "./components/MyComponent"
import Counter from "./components/Counter"

function App() {

  return (
    // <MyComponent></MyComponent>
    <Counter></Counter>
  )
}

export default App
