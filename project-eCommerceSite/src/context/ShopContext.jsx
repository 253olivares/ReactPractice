// Usually react import to call our hooks
// This is personal preference but I like to just call react and then use .Hook name to call my hooks instead of calling them in individually 
import React from "react";

// import products that houses our database.
// (Current database)
import {PRODUCTS} from "../products"

// our global state management using our context api


// Function that allows us to accept new items
const getDefaultCart = () =>{
    // create a cart that will become our state
    // currently empty
    let cart = {};
    // loop through our products database that we imported and set each item inside our cart
    // For this to work we want our database id for each item to match the position we are setting so we want to start with 0
    // and each item in the db needs to increments by 1 since we are looping through product length using a for loop that increments by 1
    for (let i=0; i<PRODUCTS.length; i++){
         // ex: 0:0, 1:0, 2:0 ... (until we reach the last item and if the items increment the same method we should not run into any issues)
        // Previously 
        // cart[i]=0;

        // new
        // adjusted this way to avoid any issues where database item id doesn't match its array location for example:
        // situations like where the first array item has an id of 1 when in actuality it would have a array location of 0
        // or a number is skipped item number 9 in object array has an id of 10 or 11 instead of 9.
        cart[PRODUCTS[i].id] = 0;
    }
    console.log(cart)
    return cart;
}

// Creating a context that will be used in out application as a global state called shop context
// When we want to call our states or functions in the future we want to call use context and refer to shop context
export const ShopContext = React.createContext(null);

// Shop context provider grabbing our children props
const ShopContextProvider = ({children}) =>{

    // Use Memo makes sure our function et default cart doesn't have to rerender everytime our cartItems state changes as currently
    // withut this is runs our get defult function again when its not needed
    const getCart= React.useMemo(()=>  getDefaultCart(),[PRODUCTS])


    // Creating our cart items state that will keep track of our apps cart
    // We useState and then pass our getDefaultCart function tha returns our cart object that is used to set our state
    // with our state created we now keep track of our cart but updating the id quantity by one or removing one 
    const [cartItems, setCartItems] = React.useState(getCart);

    const resetCart =() => {
        alert("Your cart has been cleared");
        setCartItems(getCart);
    }

    // Function in our state responsible for getting our cart subtotal
    const getTotalCartAmount = () => {  
        // first create a variable that will be used to keep track of our subtotals as we loop through our array
        let totalAmount = 0;

        // for loop that takes our cart state and loop each entry as item
        for (const item in cartItems){
            // if cartItem item is greater than 0 then run our if statement
            if(cartItems[item]>0) {
                // let itemInfo
                // use the find function to loop through our products if our product id equals the item key we determined is higher than 0 then 
                // we take our total quantity times the item info price.\
                // find returns the object with id that matches our key that we already know has stock greater then 0
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
                // add that price to our total amount
                totalAmount += cartItems[item] * itemInfo.price;
            }
            // Loops through our products once 
        }

        // return our subtotal once our function has looped through our state and gather totals for everything
        return totalAmount;
    }

    // addToCart Function that takes in our id prop so we can identify our object that needs to be changed
    const addToCart = (itemId, index)=> {
        // We call our setCartItems function to make changes to our object
        // we begin bu spreading our objects using ... operator
        // Then we identify out id and that call our previous quantity and add one. Ony issue with this method is that it does require knowing the index so we do need to pass our 
        // index locations
       setCartItems((prev)=> ({...prev, [itemId]: prev[index] + 1}))

    };

    // Function does the same as previous function just subtracts one for the button we use this function on
    const removeFromCart = (itemId,index)=> {
            
        setCartItems((prev)=> ({...prev, [itemId]: prev[index] - 1}))
    };

    // update cart function that takes our value from our input and passes it to our object array that the script is going to see two keys of the same id and
    // replace the first with the new data which is the same id from before with updated input amount
    const updateCartItemCount = (newAmount ,id) => {
        // set function
        if (newAmount) {
            setCartItems((prev)=> ({...prev, [id]:newAmount}))
        } 
    }
    // to get multiple objects

    const elementRefTest = React.useRef([]);
    const controller = React.useRef();


    // Storing all our states and functions in a object array called contextValue that im then going to use to pass as our value in provider
    // this allows us to use these states and functions where we need to use it in our program
    const contextValue = {cartItems,elementRefTest,controller,addToCart,removeFromCart,updateCartItemCount,getTotalCartAmount,resetCart}

    // console log that I use to check and see what my current state is just more debugging
    console.log("My current state object array:",cartItems)

    return(
        // My provider that takes its children components from react and then puts them inbetween our providers to create a global context
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
};

export default ShopContextProvider;