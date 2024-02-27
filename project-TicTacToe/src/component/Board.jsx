import React from "react"
import Square from "./Square"
import calculateWinner from "./CalculateWinner";

const Board = React.forwardRef(({boardRows, xIsTrue, squares, onPlay, currentMove}, ref) => {

  function handleClick(i) {
    if(!winner) {
      if(!squares[i] || calculateWinner(squares,ref)) {
        const nextSquares = squares.slice();
        nextSquares[i] = xIsTrue ? 'X': "O";
        const move = `Row: ${ref.current[i].getAttribute("row")} | Col:${ref.current[i].getAttribute("col")} : Player: ${nextSquares[i]}`
        onPlay(nextSquares , move);
      }
    }
  }

  const winner = calculateWinner(squares,ref);

  let status;

  if(!winner && currentMove === 9) {
    status = "Game is a tie no winner!";
  } else if(winner){
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsTrue ? "X": "O");
  }

  return (
    <React.Fragment>
      <div className="status">{status}</div>
  
      {
        boardRows.map((_,i) => 
            <div key={i} className="board-row">
              {
                boardRows[i].map((local,index)=> {
                // console.log(`Row: ${i+1}`);
                // console.log(`Col: ${index+1}`);
                return <Square row={i+1} col={index+1} ref={ref} key={local} local={local} value={squares[local]} onSquareClick={() => handleClick(local)} />
                })
              }
            </div>
        )
      }
    </React.Fragment>
    )
}); 

export default Board;

// export default function Board({boardRows, xIsTrue, squares, onPlay, currentMove}) {

//   function handleClick(i) {
//     if(!winner) {
//       if(!squares[i] || calculateWinner(squares)) {
//         const nextSquares = squares.slice();
//         nextSquares[i] = xIsTrue ? 'X': "O";
//         onPlay(nextSquares);
//       }
//     }
//   }

//   const winner = calculateWinner(squares);

//   let status;

//   if(!winner && currentMove === 9) {
//     status = "Game is a tie no winner!";
//   } else if(winner){
//     status = "Winner: " + winner;
//   } else {
//     status = "Next player: " + (xIsTrue ? "X": "O");
//   }

//   return (
//   <React.Fragment>
//     <div className="status">{status}</div>

//     {
//       boardRows.map((_,index) => 
//           <div key={index} className="board-row">
//             {
//               boardRows[index].map((local,index)=> 
//               <Square key={local} value={squares[local]} onSquareClick={() => handleClick(local)} />
//               )
//             }
//           </div>
//       )
//     }
//   </React.Fragment>
//   )
// }
