// Button function 
function Button (){
    // const handleclick This is the function function in our component
    // console log ouch
    const handleClick = ()=> {
        console.log("ouch");
    }
    // cont variable we will keep track of and display in our console log
    // if we wanted to display this on our dom and keep it updated we would have to turn it into a tate 
    // 
    let count = 0
    const handleClick2 = (name)=> {
        if(count <3){
            count ++;
            console.log(`${name} you clicked me ${count} time/s`);
        } else {
            console.log(`${name} stop clicking me!`);
        }
    }
    // Click function to test passing events 
    const handleClick3 = (e) => console.log(e)
    // Return our fragment
    return (<button onDoubleClick={(e)=>handleClick3(e)}>Click Me </button>)
}
export default Button;