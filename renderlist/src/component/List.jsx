import PropTypes from 'prop-types';

function List(props) {

    const itemList = props.items

    const category = props.category;

//     fruits.sort((a,b)=> a.name.localeCompare(b.name)); //Alphabetical Order
// //  fruits.sort((a,b)=> b.name.localeCompare(a.name)); Sort Reverse Order

//     const lowCalFruits = fruits.filter(fruit=> fruit.calories < 100)

//  const lowCalFruits = fruits.filter(fruit=> fruit.calories >= 100) // filter out fruit with high calories

    const listItems = itemList.map((fruit,index) => <li key={index}>
                                                        {fruit.name}: &nbsp;
                                                        <b>{fruit.calories} </b> </li>)

    return (
        <>  
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">
                {listItems}
            </ul>
        </>
    )
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number})),
    
}

List.defaultProps = {
    category: "category",
    items: []
}

export default List;