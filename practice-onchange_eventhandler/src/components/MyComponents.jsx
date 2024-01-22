// onChange = event handler used primarily with form elements 
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes
// Practice using states in react to update our state value whenever we call our onChange function. 
import React, {useState} from 'react';
// Component function 
function MyComponents () {
    // Our states we are creating to hold our values of whatever is input within our text box.
    // onChange will keep track on changes inside our input and when it detects changes it will run the function that is set inside
    // Once the function runs we will call our set states to change our state value.
    // That state value will then displayed under our input.
    // Name State
    const [name, setName] = useState("Guest");
    // Quality State
    const [quantity, setQuantity] = useState(0);
    // Comment State
    const [comment,setComment] = useState("");
    // Payment State
    const [payment, setPayment] = useState("");
    // Shipping State
    const [shipping,setShipping] = useState("");
    // To my understanding states are values that the framework keeps track of and rerenders elements of the page when they change (through using set)
    // for example the input boxes of this application rerender its contexts when ever the state value changes and is set. 

    // onchange sends an event target and then we call that target value to set the new name in our name state
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
            {/* Creating our inputs and then using the onchange event listeners to tell react to run the functions inside {}
            Whenever it detects inside values change from user input. Function sets new value to state and displays that state value under the input f
             */}
            <input value={name} onChange={changeName}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type='number'></input>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
            <p>Comment: {comment}</p>
            {/* Select on change triggers when ever its selection option changes */}
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>
             {/* Radio onchange triggers whenever it detects a different option is triggered. */}
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
// exports everything so we can send it to our app component
export default MyComponents;