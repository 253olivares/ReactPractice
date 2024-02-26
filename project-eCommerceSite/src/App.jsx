// normal react import to use hooks if we need
import React from 'react';
// importing our routers so we can create a single page application
// Import our browser router as router so we can call it just using router
// Browse router is what react uses to listen for url directions
// Routes houses our route content that will be changed
// Route is the individual contents that are swapped depending on our url
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// importing our nav bar component
import Navbar from './component/Navbar';
// importing our shop component
import Shop from './pages/shopping/Shop';
// importing our cart component
import Cart from './pages/cart/Cart';
// importing our shop context provider
import ShopContextProvider from './context/ShopContext'
import { ShopContext } from './context/ShopContext';
// app css that covers the entire application that is gathered in app jsx to be compiled.
import './App.css';

function App() {

  // Our main app file where we are collecting our components and structuring our site before it is passed over to our 
  // main jsx for final compilation

  return (
    // our react fragment that houses all our components
    <React.Fragment>
      {/* div app (We could just use this as our fragment to return our modules but I prefer using fragments for organization) */}
     <div className='app'>
      {/* inseart our context provider that takes in Router as a child component in the dom tree which is useful later */}
      {/* Shop context provider houses all our values */}
      <ShopContextProvider>
        {/* Our router component houses all our routes and is needed to swap its content from within - Reminder that this is our browser router that listens 
        for url changes and changes content in routes child*/}
        <Router>
          {/* Navbar Component This will remain prominent on all our pages and will not change*/}
          <Navbar />
          {/* Routes component that is a new V6 requirment that swaps in child route passed on if the irl path matches */}
          <Routes>
            {/* display our element if path is https://rootName/ */}
            <Route path='/' element={<Shop />} />
            {/* display our element if our path url is https://rootName/cart */}
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
     </div>
    </React.Fragment>
  )
}

export default App
