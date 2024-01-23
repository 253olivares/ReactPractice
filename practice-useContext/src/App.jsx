// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

import ComponentA from './components/ComponentA'
// component A
import React from 'react'

function App() {


  return (
    <React.Fragment>
      <ComponentA></ComponentA>
    </React.Fragment>
  )
}

export default App
