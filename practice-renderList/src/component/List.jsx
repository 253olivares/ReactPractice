import PropTypes from 'prop-types';
// importing prop types from the prop types module
function List(props) {
    // taking our props items and assigning it to a new variable same with our category
    const itemList = props.items

    const category = props.category;
    // function to sort our array by name alphabetical order 
//     fruits.sort((a,b)=> a.name.localeCompare(b.name)); //Alphabetical Order
// //  fruits.sort((a,b)=> b.name.localeCompare(a.name)); Sort Reverse Order
    // filter our array by calories to to get a new array of only fruits with less than 100 calories
//     const lowCalFruits = fruits.filter(fruit=> fruit.calories < 100)

//  const lowCalFruits = fruits.filter(fruit=> fruit.calories >= 100) // filter out fruit with high calories

    // we take our items array and then map through the array creating a a new li for every object
    const listItems = itemList.map((fruit,index) => <li key={index}>
                                                        {fruit.name}: &nbsp;
                                                        <b>{fruit.calories} </b> </li>)

    return (
        <React.Fragment>  
        {/* after creating a new variable that stores our li elements created by going through our array we 
        call it in our react fragment to display our list. */}
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">
                {listItems}
            </ul>
        </React.Fragment>
    )
}  
    // Declare our prop types. Since we are dealing with object inside an array we have to use array of to define prop types
    // inside our array. since our array is holding another array. 
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number})),
    
}
// Create defaults if nothing is passed through our component. 
List.defaultProps = {
    category: "category",
    items: []
}

export default List;