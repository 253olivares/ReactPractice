// importing react 
import React from "react"
// Route v6+ importing browse router and routes / route
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
// importing all our components
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import TaskDetails from "./components/TaskDetails"
import {TodoContext} from './provider/TodoProvider'

// Main Todo App jsx file where we will compile all our components and features
// Currently the app requires the use of a fake back end server but I plan on changing that.

// First step is to import context api. When I do I am going to create a state that checks to see if we are connected to the server
// if it is then display if not then dont display anything.

function App() {
  // calling our states and function from our provider using react.useContext to use the context we want
  const {toggle,tasks,connecting} = React.useContext(TodoContext);

  return (
    <Router>
      <div className="container">
        {/* Header component that houses our toggle and add task form. previously before adding use context we would pass down our state
        and functions that change the state as props. In this case we dont need to since now we are using context we are just calling header for this
        and passing a title
        */}
        <Header title="Task Tracker"/>

        {/* Routes component that will wrap around each of our individual route component.
        Each route component uses the element tag to house our react fragments we want to display when our 
        url has the corresponding url direction. */}
        <Routes>

          {/* When our url has / after the base url direction we will display thi fragment */}
          <Route path="/" element = {
            // Our react fragment that holds our content for what we want our route to display when our url points to the home page
            // home page being just "/"
            <React.Fragment>
              {/* Toggle turnery that will display our add task component when toggle is true.
              Every time our toggle state changes the page rerenders and it will render the add task based on this bool */}
              {toggle && <AddTask /> }
              {/* here we are first checking to make sure our task length is greater then 0
              if it is then we display our tasks component. otherwise we display not task or connection depending on if connecting is true or not
              
              Turnery inside a turnery*/}
              {tasks.length > 0 ? <Tasks/> : connecting ? "No Tasks To Show": "Trying to connect..." }
            </React.Fragment>
            } 
          />
          
          {/* When our url displays /about we will display our about component */}
          <Route path='/about' element={<About />} />

          {/* Routes will only display one of the nested route components and its elements at a time.
          So when our url has a / and that it it will display our content we want for our home page
          when it is /about it will display its about component
          */}

          <Route path="/task/:id" element={<TaskDetails />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
