
import React, {useState, useEffect, useRef} from 'react'

function MyComponent() {

    // let [number, setNumber] = useState(0)

    // const ref = useRef(0);
    // create refs that will be bind to our inputs
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);


    useEffect(()=> {
        console.log("Component Rendered");
    
    });

    function handleClick1() {
        // setNumber(state=> state + 1);
        // ref.current = ref.current+1;
        // console.log(ref.current);
        inputRef1.current.focus();
        // When ever we call ref it returns a current that targets elements.
        // Whenever we want to update our ref we need to call element id and value and set our ref to the new value.
        // only utility to help keep track of old values and update them without rerendering our page.
        // An optimal application would maybe be a edit page where we want to edit a page without updating our state real time
        // we can us ref to keep track of our value and then set it to the state when we click submit.
        console.log(inputRef1)
        inputRef1.current.style.backgroundColor="yellow";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
    }
    function handleClick2() {
        // setNumber(state=> state + 1);
        // ref.current = ref.current+1;
        // console.log(ref.current);
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor="yellow"
        inputRef1.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
    }
    function handleClick3() {
        // setNumber(state=> state + 1);
        // ref.current = ref.current+1;
        // console.log(ref.current);
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor="yellow";
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="";
    }

    return(
        <div>  
            <button onClick={handleClick1}>
                Click me 1!
            </button>

            <input type="text" ref={inputRef1}/>
            <button onClick={handleClick2}>
                Click me 2!
            </button>

            <input type="text" ref={inputRef2}/>
            <button onClick={handleClick3}>
                Click me 3!
            </button>

            <input type="text" ref={inputRef3}/>
        </div>
    )
}

export default MyComponent