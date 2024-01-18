import React, {useState} from 'react'

function MyComponent() {

    const [foods, setFoods] = useState (["Apple", "Orange","Banana"])

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;

        document.getElementById("foodInput").value="";


        //updater function
        setFoods(prevFoods => [...prevFoods, newFood]);
    }

    function handleRemoveFood(index){
        setFoods(prevFoods => prevFoods.filter((_, i)=>index!==i));
    }


    return(
        <>
        <h2>List of Foods</h2>
        <ul>
            {foods.map((food,index)=> 
            <li key={index} onDoubleClick={()=>handleRemoveFood(index)}>
                {food}
            </li>)}
        </ul>
        <input type="text" id='foodInput' placeholder='Enter food name' />
        <button onClick={handleAddFood}>Add Food</button>
        </>
    )
}

export default MyComponent