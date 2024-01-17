function Button (){
    
    const handleClick = ()=> {
        console.log("ouch");
    }
    let count = 0
    const handleClick2 = (name)=> {
        if(count <3){
            count ++;
            console.log(`${name} you clicked me ${count} time/s`);
        } else {
            console.log(`${name} stop clicking me!`);
        }
    }

    const handleClick3 = (e) => console.log(e)

    return (<button onDoubleClick={(e)=>handleClick3(e)}>Click Me </button>)
}
export default Button;