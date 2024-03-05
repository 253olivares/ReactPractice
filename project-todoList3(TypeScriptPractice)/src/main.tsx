import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// for this project we are creating a todo app in type script

ReactDOM.createRoot(document.getElementById('root')!).render(
  // created issues with dom 
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />,
)
