// useState() = Re-renders the component when the state value changes.

// useRef() = "user reference" Does not cause re-renders when its value changes.
//            When you want a component to "remember" some information,
//            but you don't want that information to trigger a new render

//            Accessing/Interacting with DOM elements
//            Handling Focus, Animations, and transitions
//            Managing timers and intervals

import React, {useState,userEffect} from 'react'
import MyComponent from './component/MyComponent'

function App() {
  

  return (
    <MyComponent>
      
    </MyComponent>
  )
}

export default App
