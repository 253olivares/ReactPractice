import React, {useState} from 'react'
// import states
function MyComponent() {
    // Create a foods state that stores an array our fruits
    const [foods, setFoods] = useState (["Apple", "Orange","Banana"])
    // Function to add new food value
    function handleAddFood(){
        // Our function begins by creating a new variable that grabs our input element value
        const newFood = document.getElementById("foodInput").value;
        // we resent our inpur element value
        document.getElementById("foodInput").value="";


        //using our set foods updater function we update our state by spreading all our previous values and then appending the new value at the end.
        setFoods(prevFoods => [...prevFoods, newFood]);
        // our page updates and rerenders our component with the new array


        // This is another variable of our code that pushes our new object to the start of the array. 
        // setFoods(prevFoods => [newFood, ...prevFoods])
    }
    // Function to remove our food from our array by keeping track of its index
    function handleRemoveFood(index){
        // we pass our index in the function and then update our state with a new array that filters out
        // any object where its index matches the index passed through the function.
        setFoods(prevFoods => prevFoods.filter((_, i)=>index!==i));
    }


    return(
        <React.Fragment>
        {/* Create a list of foods */}
        <h2>List of Foods</h2>
        {/* Ul Element to hold our li values */}
        <ul>
            {/* grab our foods state and use the map function to loop through our arrays objects. After looping through our array
            we grab our food object and index. we give each li a unique key of its index and create a double click event listener
            when the li element is double clicked we run a function to remove food by passing its index in the function params.
            This index helps us keep track of the element we want to remove. 
            our food is displayed within li and the component is then displayed on our app.jsx */}
            {foods.map((food,index)=> 
            <li key={index} onDoubleClick={()=>handleRemoveFood(index)}>
                {food}
            </li>)}
        </ul>
        {/* Create an input to insert a new food object in our array*/}
        <input type="text" id='foodInput' placeholder='Enter food name' />
        {/* our button carries an onclick event listener that runs handleAddFood function*/}
        <button onClick={handleAddFood}>Add Food</button>
        </React.Fragment>
    )
}

export default MyComponent