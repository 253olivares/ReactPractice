import React from "react"

function App() {
  
  return (
    <React.Fragment>
      <div className="App">
        {/* Simple app that all its to do is display a link with the restaurant name and url to restaurant name .com */}
        <a href="https://restaurantName.com" className="App-Link">
          Restaurant Name
        </a>
      </div>
    </React.Fragment>
  )
}

export default App
