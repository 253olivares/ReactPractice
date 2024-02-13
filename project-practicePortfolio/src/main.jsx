import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// global css for everything that is chiled 
import './index.css'
// Router
import {BrowserRouter as Router} from 'react-router-dom';

// Out main index file that we will wrap our browser router in 
// This way we can use routers to create a single page application

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      {/* Our application */}
      <App />
    </Router>
  </React.StrictMode>,
)
