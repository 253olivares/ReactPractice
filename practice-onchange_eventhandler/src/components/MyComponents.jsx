// onChange = event handler used primarily with form elements 
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes

import React, {useState} from 'react';

function MyComponents () {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment,setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping,setShipping] = useState("");

    const changeName = (event) => {
        setName(event.target.value)
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    function handleCommentChange(event) {
        setComment(event.target.value)
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }

    function handleShippingChange(event) {
        setShipping(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={changeName}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type='number'></input>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping ==="Pick Up"} onChange={handleShippingChange}/>
                Pickup
            </label>
            <label>
            <input type="radio" value="Delivery" checked={shipping ==="Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default MyComponents;