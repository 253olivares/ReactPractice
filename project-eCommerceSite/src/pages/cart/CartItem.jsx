import React from "react";
import {ShopContext} from '../../context/ShopContext'

// Cart items that display for each item if its value is greater than 0 in our cart state
const CartItem = (props) =>{

    // deconstruct our props
    const {id, productName, price, productImage} = props.data;

    // get our functions and states from our global context
    const {cartItems,addToCart,removeFromCart,updateCartItemCount,getTotalCartAmount} = React.useContext(ShopContext);
    
    return(
        // cart item div
        <div className="cart-item">
            {/* image element that displays our image prop */}
            <img src={productImage} />
            <div className="description">
                <p>
                    {/* product name */}
                    <b>{productName}</b>
                </p>
                {/* price */}
                <p>${price}</p>
                <div className="countHandler">
                    {/* button that calls our removeFromCart Function */}
                    <button
                    onClick={()=>removeFromCart(id,props.keyLocation)}
                    > - </button>
                    <input 
                    value={cartItems[props.keyLocation]}
                    onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}
                    />
                    {/* Button that calls our ad to cart function */}
                    <button
                    onClick={()=>addToCart(id,props.keyLocation)}
                    > + </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;