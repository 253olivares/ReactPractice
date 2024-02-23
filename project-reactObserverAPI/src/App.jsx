import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import ProductList from './components/ProductList';


// This is our observation api practice app. Everything is create and utilized in our product list.
// This is a really important practice as a majority of web pages utilize this method of data fetching to infinitely scroll
// through content as at the api allows it and when the api allows it. 

function App() {

  return (
   <React.Fragment>
      <ProductList/>
   </React.Fragment>
  )
}

export default App
