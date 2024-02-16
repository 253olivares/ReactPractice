import React from "react"
// Second reducer module this time with two different objects

// Our reducer function takes in our state and action we call from within our component
// Switch statement is used to take our type from action and check to see which function we return.
const reducer = (state,action) => {
  switch(action.type){
    case 'Increments':
      // after we determine our function we spread our state and then attached our mutated state at the end.
      return {...state, count: state.count + 1}
    case 'ToggleShowText':
      return {...state, showText: !state.showText}
    default:
      return state;
  }
}

// App component
function App() {
  // Creating our state that we will just call state since it will hold multiple values in a array
  // Potentially could be used only use context to create one large state collection that just holds multiple different arrays and values
  const [state, dispatch] = React.useReducer(reducer, {count: 0, showText : true})

  // React fragment
  return (
    <React.Fragment>
      <div>
        {/* since our state is stored in an object we have to change the method its called and specify the object key */}
        <h1> {state.count}</h1>
        <button
        onClick={()=>{
          // our ste functions are now replaced with our dispatch function which we give a type identifier to tell the program which line of code we want to run
          dispatch({type: 'Increments'});
          dispatch({type: 'ToggleShowText'});
        }}
        >
          Click here
        </button>
        {
          // turnery that will display our p text when showtext is true
          state.showText && <p>This is a text</p> 
        }
      </div>
    </React.Fragment>
  )
}

export default App
