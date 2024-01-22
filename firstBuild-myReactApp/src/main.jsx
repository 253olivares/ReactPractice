import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// main app where all the components gather to be mounted and rendered on our dom.

// this is what is considered the virtual dom React makes all necessary changes within child components that extend from this component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
