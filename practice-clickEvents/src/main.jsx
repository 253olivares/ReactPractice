import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// we call in our index css This can work as a global css file
import './index.css'
// Here we load our react component into the index file.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
