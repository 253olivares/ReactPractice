import React from "react";

// this is our square
// using forward ref we take in ref and pass it back to our main component where it stores that ref so we can 
// target this dom element later
const Square = React.forwardRef(({row, col, local,value, onSquareClick}, ref) => {
    return(
        <button
        // row location of our dom
        row={row}
        // col location of our dom
        col={col}
        // class name that helps draw our square
        className="square"
        // onclick function to trigger game logic
        onClick={onSquareClick}
        // ref that each time our button component renders it adds a new button to our ref array being 
        // used to map all our dom elements
        ref={el => ref.current[local] = el}
        >
            {/* value which is our x or O */}
            {value}
        </button>
    )
});

export default Square;