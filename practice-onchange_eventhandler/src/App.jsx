// onChange = event handlet used primarly with the form elements
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes

import MyComponents from "./components/MyComponents"
// Importing our component
function App() {

  return (
    <React.Fragment>
    {/* Utilizing our component */}
    <MyComponents></MyComponents>
    </React.Fragment>
  )
}

export default App
