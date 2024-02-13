import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Loader from './Loader.jsx';
import {BrowserRouter as Router} from 'react-router-dom'

const App = React.lazy(()=> import('./App.jsx'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Suspense fallback={<Loader />} >
      <Router>
        <App />
      </Router>
    </React.Suspense>
  </React.StrictMode>,
)
