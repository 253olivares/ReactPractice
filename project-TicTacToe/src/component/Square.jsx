import React from "react";

const Square = React.forwardRef(({row, col, local,value, onSquareClick}, ref) => {
    return(
        <button
        row={row}
        col={col}
        className="square"
        onClick={onSquareClick}
        ref={el => ref.current[local] = el}
        >
            {value}
        </button>
    )
});

export default Square;