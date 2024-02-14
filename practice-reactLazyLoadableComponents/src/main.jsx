import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Loader from './Loader.jsx';
import loadable from '@loadable/component'
import {BrowserRouter as Router} from 'react-router-dom'

// Set up is the same only difference is that suspense is no longer utilized.

// While suspense is no longer utilized it can still be used in conjunction to loader. 
const App = React.lazy(()=> import('./App.jsx'))

// This is one method to apply a fallback we can pass it as an object following our function that 
// imports our app js and create a high order component
const LoaderAppComponent = loadable(() => import('./App.jsx'),{
  fallback: <Loader />,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <LoaderAppComponent />
      </Router>
  </React.StrictMode>,
)
