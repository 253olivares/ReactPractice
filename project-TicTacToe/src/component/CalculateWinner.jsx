export default function calculateWinner(squares,ref) {
    // console.log(ref);
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
    for (let i=0; i<lines.length; i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            lines[i].map((local,index)=> {
                ref.current[local].style.backgroundColor = "green";
            })
            return squares[a];
        }
    }

    ref.current.map((_,i) => {
        ref.current[i].style.backgroundColor="white";
    })

    return null;
}