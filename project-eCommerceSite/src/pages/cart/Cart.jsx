// import react
import React from "react";
// Import products from our product.js
import { PRODUCTS } from "../../products";
// import our shoping context that we are going to use to access our global context
import {ShopContext} from '../../context/ShopContext'
import CartItem from './CartItem';
// React router dom library hook that allows us to know what our browser router is currently set too
import { useNavigate } from "react-router-dom";

// This is our cart page
// When the url directs to https://root.com/cart
// we will render this dom component
const Cart = () =>{

    // use context component
    const {cartItems,getTotalCartAmount,resetCart} = React.useContext(ShopContext);

    // calling useNavigate hook from our react router dom library to read our url direction 
    const navigate = useNavigate();

    return (
        // cart div that houses our entire page content for cart
        <div className="cart">
            {/* page Title */}
            <div>
                <h1>Your Cart Items</h1>
            </div>
            {/* Our cart items div */}
            {
                getTotalCartAmount() > 0 ? 
                <React.Fragment>
                <div className="cartItems">
                    {
                    // maps through our products and if its value in the cart is greater than 0 then we render that item in our cart using the cart item to pass
                    // our data
                    PRODUCTS.map((product,index)=>{
                        if(cartItems[product.id] !== 0){
                            return <CartItem key={index} keyLocation={index} data={product} />
                        }
                    })
                    }
                </div>
                
                 <div className="checkout">
                    <p>Subtotal: ${getTotalCartAmount()}</p>
                    <button onClick={()=> navigate("/") }>Continue Shopping</button>
                    {/* redirect us to the main page and clear our cart */}
                    <button onClick={()=> {navigate("/"); resetCart()}}>Checkout</button>
                </div>
                </React.Fragment>

                : 
                
                "You have no Items in cart!"
            }
        </div>
    )
}

export default Cart;