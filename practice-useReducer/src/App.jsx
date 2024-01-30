import React, { useReducer } from "react"
// importing stuff well use

// creating our reducer that will take our state function 
// Tthen after taking our state function we pass over an action which will be recorded using type
  const reducer = (state,action) => {
    // Depending on the type we pass our reducer will execute one of the following functions of changing out money
    if(action.type === 'buy_ingredients') return {money: state.money -10};
    if(action.type === 'sell_a_meal') return {money: state.money +10};
    if(action.type === 'guest_visit') return {money: state.money + 5000};

  }

function App() {
  // Our state 
  const initialState = {money: 100};
  // creating our reducer by passing our object and declaring the reducer function
  const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <React.Fragment>
      <div className="App">
        <h1>Wallet: {state.money}</h1>
        <div>
          {/* Each onclick will call a different function based on type which was passed through our object */}
          <button onClick={()=>dispatch({type: "buy_ingredients"})}>Shopping for veggies!</button>
          <button onClick={()=>dispatch({type: "sell_a_meal"})}>Serve a meal to the customer.</button>
          <button onClick={()=>dispatch({type: "guest_visit"})}>Guest visitor.</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
