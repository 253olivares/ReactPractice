import React from "react";

export interface Props {
    name:string;
    enthusiasmLevel?:number;
}

interface State {
    currentEnthusiasm: number;
}

function getExclamationMarks(numChars: number){
    return Array(numChars + 1).join("!");
}
// this is through regular functions
// 
// function Hello({name,enthusiasmLevel = 1}: Props){
//     if(enthusiasmLevel <= 0 ){
//         throw new Error("You could be a little more enthuiastic. :D");
//     }



//     return (
//         <div className="hello">
//             <div className="greeting">
//                 Hello {name+getExclamationMarks(enthusiasmLevel)}
//             </div>
//         </div>
//     )
// }

// Class Component

class Hello extends React.Component<Props, State> {
    state = { currentEnthusiasm: this.props.enthusiasmLevel || 1};

    updateEnthusiasm (change:number) {
        this.setState((currentState) => {
            return {currentEnthusiasm: currentState.currentEnthusiasm + change}
        })
    },

    onIncrement = ()=> {
        this.updateEnthusiasm(1);
    }
    onDecrement =() => {
        this.updateEnthusiasm(-1);
    }

    render() {
        const {name} = this.props;
        
        if (this.state.currentEnthusiasm <= 0) {
            throw new Error("You could be a little more enthusiastic. :D");
        }

        return(
            <div className="Hello">
                <div className="greeting">
                    Hello {name+ getExclamationMarks(this.state.currentEnthusiasm)}
                </div>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
            </div>
        )
    }
}

export default Hello;