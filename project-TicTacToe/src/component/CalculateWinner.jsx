
// calculate winner handles our game logic
// we pass a current status of the game board and pass our ref
export default function calculateWinner(squares,ref) {
    // console.log(ref);
    // we set our win conditions
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    // our for loops then runs through our win conditions
    for (let i=0; i<lines.length; i++){
        // each loop we deconstruct our array that have numbers of our board locations
        const [a,b,c] = lines[i];
        // then we check if all these areas have the same value X or O
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            // if they do then we loop through those lines again
            lines[i].map((local,index)=> {
                // call our ref and current then using local which should be the number in the array
                // we target the dom element and change its background color to green
                ref.current[local].style.backgroundColor = "green";
            })
            // return the Value of the winner
            return squares[a];
        }
    }

    // of no winner is found we loop through our ref and set background colors of all dom elements to white so that the board resets
    // since when the user wins the background color is green
    ref.current.map((_,i) => {
        ref.current[i].style.backgroundColor="white";
    })

    // we return null if no user is found keeping the game from registering as over and won
    return null;
}