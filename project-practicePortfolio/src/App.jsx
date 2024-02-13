import React from "react"
// global css
import './app.scss';
// call our routes needed
import { Routes, Route } from "react-router-dom";
// calling our individual components
// Something to note setup for this project is different from my normal as usually I call the file within the name as the folder.
// for this project I decide to practice with a different method of calling our home file in each folder index. That way when we are importing
// all we are doing is calling the folder and jsx will do the rest and automatically call the index file. 
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Dashboard from "./components/dashboard";

// Our main app application component

function App() {
  // our app component not much is going on here aside from our routes and directing the page where ever component is to be placed
  return (
    <React.Fragment>
      {/* Our routes component that houses and listens to our route component */}
      <Routes>
        {/* route component that handles the / and anything after
        Set up is a different from other set ups but we are basically telling our route we will always render our layout since 
        our url will always include a /. This is our base then we will render an additional element based on what comes after our / 
        */}
        <Route path="/" element={<Layout />} >
          {/* on default if nothing else follows our / we will render home */}
          <Route index element={<Home />} />
          {/* render about when our url reads /about */}
          <Route path="about" element={<About />} />
          {/* render contact when our url reads /contact */}
          <Route path="contact" element={<Contact />} />
          {/* render portfolio when our url reads /portfolio */}
          <Route path="portfolio" element={<Portfolio />}/>
          {/* render dashboard when our url reads / dashboard
          this is the only element render we have on the page that will not have a button
          on nav so to access this page we have to change the url directly */}
          <Route path="dashboard" element={<Dashboard />}/>
        </Route>
      </Routes>
    </React.Fragment>
  )
}

export default App
