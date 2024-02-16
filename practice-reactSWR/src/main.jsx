import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { preload } from 'swr'
import { getTodos,todosUrlEndpoint as cacheKey } from './api/index.jsx'

// Preloads the data
preload(cacheKey, getTodos);

// Main jsx file where app will compile

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
