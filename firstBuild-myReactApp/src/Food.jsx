function Food() {
    // Food component where we create food variables to display in our return and pass back to our app jsx
    const food1 = "Orange";
    const food2 = "Banana"

    return (
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase}</li>
        </ul>
    );
}

export default Food