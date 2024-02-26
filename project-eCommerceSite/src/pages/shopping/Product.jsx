// Import React
import React from "react";
// Import our shopcontext this way we can call our context
import {ShopContext} from '../../context/ShopContext'

// product component calling our props 
const Product = (props) => {
    // deconstruct our props taking out our values passed from our parent component
    const {id, productName, price, productImage} = props.data;

    // useContext hook lets us call states or function that we inserted in our provider value
    const {cartItems,addToCart,removeFromCart,elementRefTest} = React.useContext(ShopContext);

    // we grab the quantity amount our item has in our cart
    // since our items listing should match our cart index location we can just pass key location.
    // I should also work if we passed our id but for now we are going to use array location since we want them to both match up
    const cartItemAmount = cartItems[props.keyLocation];

    console.log(props.keyLocation);

    return (
        // Our product div that houses the items
        <div ref={el => elementRefTest.current[props.keyLocation] = el} className="product">
            {/* image that displays our item */}
            <img src={productImage} alt="productName" />
            <div className="description">
                <p>
                    {/* Product name */}
                    <b>{productName}</b>
                </p>
                {/* Product price */}
                <p>${price}</p>
            </div>
            {/* button that adds our product to our cart by passing the items id and its index location 
            inside our button we have turnery that checks to see if our quantity for this item in the cart is greater than 0 and if it is then we display its amount so user can keep track of how much exist in the cart
             */}
            <button className="addToCartButton" onClick={()=>addToCart(id, props.keyLocation)}>Add To Cart {cartItemAmount > 0 && <React.Fragment>({cartItemAmount})</React.Fragment>}</button>
        </div>
    )
}

export default Product;