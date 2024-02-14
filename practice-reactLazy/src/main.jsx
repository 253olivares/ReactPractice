import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Loader from './Loader.jsx';
import {BrowserRouter as Router} from 'react-router-dom'

const App = React.lazy(()=> import('./App.jsx'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* React suspense that allows our lazy loader to function 
    inside we pass a feedback that will display a loader on the page that lets our user know that our application is working
    we are just waiting for data to finish loading */}
    <React.Suspense fallback={<Loader />} >
      <Router>
        <App />
      </Router>
    </React.Suspense>
  </React.StrictMode>,
)
