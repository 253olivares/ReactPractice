import React from "react";
import Board from "./component/Board";

// This is out main game board component

export default function Game() {
    // here we are creating our states that will keep track of the games progress and determine
    // when a user has won the game

    // Our history state takes in screenshots of our game to keep track on each player move and what each move action is.
    const [history,setHistory] = React.useState([Array(9).fill(null)]);
    // move history works in hand in history to save our moves but in a different format. This saves more specifics of our move in row and col format
    const [moveHistory,setMoveHistory] = React.useState([""])
    // current move keeps track our the round turn
    const [currentMove,setCurrentMove] = React.useState(0);
    // reverse is a state to changes our move list based on how the user wishes it to display
    const [reverse, setRevere] = React.useState(false);

    // this ref keeps track of the location of each of our game board locations
    // at the start of our game we create an array of each dom element so we can access it later and change its background color when a user wins
    const squaresRef = React.useRef([]);
    // current square grabs the current history location to display our board
    const currentSquares = history[currentMove];

    // keeps track on whos move it is on even numbers it will be X and on odd numbers it will be O
    const xIsTrue = currentMove % 2 === 0;


    // boardmapping exists just to map our board using the map function without hard coding our dom elements
    const boardMapping = [[0,1,2],[3,4,5],[6,7,8]];

    // when a user clicks on a slot we take in our current move (row and col) and current board state (an array with all the slots and telling what the current value inside is) 
    function handlePlay(nexSquares, move) {
        // inside our handel play we will update our history state meant to keep track of our games progress

        // we create a new array that slices our history and spreads all our turns up to the current turn number
        // it is created this way so we can discard any moves over the round that the user chose to go back and redo
        const nextHistory = [...history.slice(0,currentMove+1), nexSquares];
        // nextMoveHistory does the same thing but just keeps a more descriptive property for nextHistory
        // each move is recorded in the row and col format 
        const nextMoveHistory = [...moveHistory.slice(0,currentMove+1), move]
        // we set both of these
        setHistory(nextHistory);
        setMoveHistory(nextMoveHistory);
        // then set current move
        setCurrentMove(nextHistory.length-1);

        // Good idea would maybe be create a reducer for all this
    }

    function jumpTo(nextMove) {
        // when we click on the save state we want to launch we set our current move to the round selected
        // since it is a state it will cause to render our dom to the current save state selected
        // when changed it will over write any following data
        setCurrentMove(nextMove);
    }

    // create a moves variable to map and render our move lists
    let moves = history.map((square, move) => {
        // we take in the history and map through our array to display each round that has occured.
        // we have specially rules in place to display a different element depending on if it is the first start round and current round
        let description;
        // set our description
        if(move> 0) {
            // normal message
            description = `go to move# ${move+1}`;
        } else {
            // for the first round change message 
            description = `Go to game start`;
        }
        return (
            // return dom that checks to see if the round being listed is the current round. If it is instead of rendering a button render a text element just
            // stating it is current said round
                move === currentMove ? 
                (<li key={move}>
                    <a>It is currently round #{move+1}</a>
                </li>)
                : 
                // if false and it isnt the current round display a button can click on to jump to current game state
                (<li style={{margin:"10px 0px"}} key={move}>
                    <button style={{padding:"5px 10px 5px 10px"}} onClick={()=>jumpTo(move)}>{description}</button> {moveHistory[move+1]}
                </li>)
        )
    })

    // if reverse is true then we render our moves list in the opposite order
    if(reverse) {
        moves = moves.reverse();
    }

    return (
        // our game dom
        <div className="game">
            <div className="game-board">
                {/* board takes in our ref to help map our board dom elements to our ref to manipulate dom later.  
                // board rows is pass to map our game
                xIsTrue passes a bool that the game uses to check if its X or O turn
                squares passes the current state of the game
                onplay passes our handlePlay function to trigger when the user clicks on the game board square
                current move passes our round turn*/}
                <Board ref={squaresRef} boardRows={boardMapping} xIsTrue={xIsTrue} squares={currentSquares} onPlay={handlePlay} currentMove={currentMove} />
            </div>
            {/* this dom houses our control to fetch pass game states when the user requests and keeps track of round number for the user */}
            <div className="game-info">
                <ol style={{listStyleType: "none"}}>
                    {/* displays our list of game rounds */}
                    {moves}  
                    {/* a button the user can use to reverse the turns lists by changing the state
                    ! The only reason this is a state is so that our page can refresh when the user wants to change the listing order of the game turns
                    otherwise it will reverse the list but not rerender the page. */}
                    <li style={{marginTop:"20px"}}>
                        <button onClick={()=> setRevere(prev => !prev)} >Reverse order of our history list</button>
                    </li>
                </ol>

            </div>
        </div>
    );
}