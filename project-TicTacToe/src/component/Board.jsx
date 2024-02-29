import React from "react"
import Square from "./Square"
import calculateWinner from "./CalculateWinner";


// our board component handles alot of game logic and drawing the game on screen 

// we begin by taking in all our props from our previous component
// BoardRows takes in a array that helps map our board 
// xIsTrue handles if it is X or O turn
// squares carries the current game state of game
// onPlay passes our function that will run additional game logic the progresses the move turn and turn number
// current move handles the turn number passing it down

// we have an additional ref here called ref
// this is used in conjunction with forward ref to pass down our ref to our board component so we can pass back our ref information of the current
// dom elements we want to store in our ref and target
const Board = React.forwardRef(({boardRows, xIsTrue, squares, onPlay, currentMove}, ref) => {

  // handleClick function that runs when the user clicks on the square
  // i is passed as our number which is the identifier used to keep track of game dom options
  // 0-8
  function handleClick(i) {
    // if there is no winner yet
    if(!winner) {
      // and if the square doesnt already have an X or O value as well as calculate winner returns false then we run the inside code
      if(!squares[i] || calculateWinner(squares,ref)) {
        // create a new square instance to mutate
        const nextSquares = squares.slice();
        // in the key passed we identify the location and set X or O place or true or false
        nextSquares[i] = xIsTrue ? 'X': "O";
        // create a move variable to translates the user action into a user understands format telling the move row and col action and who it was
        const move = `Row: ${ref.current[i].getAttribute("row")} | Col:${ref.current[i].getAttribute("col")} : Player: ${nextSquares[i]}`;
        // then pass the new current game state and move taken to our on play in our parent component
        onPlay(nextSquares , move);
      }
    }
  }

  // this is a winner logic that runs every time our board component renders 
  // it will tell the user the game status if X or O has won or if the game is a tie
  const winner = calculateWinner(squares,ref);
// create our status
  let status;
  // if winner is false and current move has not reached max move count then there is not winner
  if(!winner && currentMove === 9) {
    status = "Game is a tie no winner!";
    // if winner is true then set our winner message
  } else if(winner){
    status = "Winner: " + winner;
    // if all false the display our next player message
  } else {
    status = "Next player: " + (xIsTrue ? "X": "O");
  }

  return (
    // this is our react fragment that maps our game board using boardRows we run two map functions to draw our game board without needing
    // to hard code 9 dom elements copy and pasting hard data
    <React.Fragment>
      {/* our game status */}
      <div className="status">{status}</div>
  
      {
        //  we map through our boardRows to draw our rows
        boardRows.map((_,i) => 
        // we create a div that is our row
            <div key={i} className="board-row">
              {
                // inside our div we then run an additional map that draws each col
                // Local is our array data which is the identifier used for our board locations
                // index is our map index which only gets as high as 2 (3 but 2 since it counts 0) this is what we use to map our row and col information
                // and store it in our dom as a custom attribute (its fist passed down since we can set attributes on a react component)
                boardRows[i].map((local,index)=> {
                  // row is our Dom element relative position
                  // col is our dome element relative position
                  // ref is passed to target our dom element and store it
                  // key is our identifier for our map
                  // value is our X or O if there is one in that location
                  // onsquare click passes our click function that triggers when our user clicks on the dom element
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
