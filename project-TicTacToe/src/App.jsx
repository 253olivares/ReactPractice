import React from "react";
import Board from "./component/Board";

export default function Game() {
    const [history,setHistory] = React.useState([Array(9).fill(null)]);
    const [moveHistory,setMoveHistory] = React.useState([""])
    const [currentMove,setCurrentMove] = React.useState(0);
    const [reverse, setRevere] = React.useState(false);
    const squaresRef = React.useRef([]);
    const currentSquares = history[currentMove];
    const xIsTrue = currentMove % 2 === 0;

    // console.log(squaresRef);
    // console.log(squaresRef.current);

    const boardMapping = [[0,1,2],[3,4,5],[6,7,8]];

    function handlePlay(nexSquares, move) {
        // console.log("History:",history);
        // console.log("History.slice():",history.slice());
        // console.log("CurrentMove:",currentMove);
        // console.log("History.slice(0,currentMove+1):",history.slice(0,currentMove+1));
        // console.log("nextSquares:",nexSquares);
        const nextHistory = [...history.slice(0,currentMove+1), nexSquares];
        const nextMoveHistory = [...moveHistory.slice(0,currentMove+1), move]
        // const moveHistory = [...moveHistory.slice(0,currentMove+1), move];
        // console.log("NextHistory:",nextHistory);
        setHistory(nextHistory);
        setMoveHistory(nextMoveHistory);
        setCurrentMove(nextHistory.length-1);

        // console.log(move);
        // console.log(nextMoveHistory);
        // console.log(moveHistory);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    let moves = history.map((square, move) => {
        
        let description;
        if(move> 0) {
            description = `go to move# ${move+1}`;
        } else {
            description = `Go to game start`;
        }
        return (
                move === currentMove ? 
                (<li key={move}>
                    <a>It is currently round #{move+1}</a>
                </li>)
                : 
                (<li style={{margin:"10px 0px"}} key={move}>
                    <button style={{padding:"5px 10px 5px 10px"}} onClick={()=>jumpTo(move)}>{description}</button> {moveHistory[move+1]}
                </li>)
        )
    })

    if(reverse) {
        moves = moves.reverse();
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board ref={squaresRef} boardRows={boardMapping} xIsTrue={xIsTrue} squares={currentSquares} onPlay={handlePlay} currentMove={currentMove} />
            </div>
            <div className="game-info">
                <ol style={{listStyleType: "none"}}>
                    {moves}  
                    <li style={{marginTop:"20px"}}>
                        <button onClick={()=> setRevere(prev => !prev)} >Reverse order of our history list</button>
                    </li>
                </ol>

            </div>
        </div>
    );
}