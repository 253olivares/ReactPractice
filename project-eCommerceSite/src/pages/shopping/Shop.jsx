// Import React  
import React from "react";
// import our PRODUCTS object array from products js which is our fake db
import {PRODUCTS} from '../../products.js';
// import Product component
import Product from './Product.jsx';
// import our css
import './shop.css';

// our shopping component that is being called in app jsx whenever our url is https://root.com/ then we will render and our dom below.
const Shop = () =>{
    return(
        // Shopping div
        <div className="shop">
            {/* shopping title div */}
            <div className="shopTitle">
                <p>Tech Shop</p>
            </div>
            {/* products div */}
            <div className="products">
                {/* Here in our products div is where we are going to create a table with all our items */}
                {PRODUCTS.map((product,index) => 
                // loops through our products array and displays a product component with unique key and individual data
                // Data passes our individual object for that component
                // Key takes our index *just a requirement for react 
                // keyLocation take our index location and is primarily created since its not recommended to use our key prop 
                <Product key={index} keyLocation={index} data={product} />
                )}
            </div>
        </div>  
    );
}

export default Shop