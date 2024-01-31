import React from "react"
import axios from "axios"

// App component

function App() {
  // Creating a data state and toggle state that will track both our data retrieved from json placeholder and our toggle that
  // will show our h1 tag when true
  const [data, setData] = React.useState(null);
  const [toggle,setToggle] = React.useState(false);

  //useEffect grabs our data at the start and sets it
  React.useEffect(()=>{
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response)=> {
        setData(response.data);
    });
  },[]);

  // long name function that we use to return our data 
  // The function will run through our data set and return the longest "Name" reality these are just comment strings
  // so it will return the longest string by comparing string lengths
  const findLongestName = (comments) => {
    if(!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++ ){
      let currentName = comments[i].name;
      if(currentName.length > longestName.length){
        longestName = currentName;
      }
    }

    console.log("This is ran");

    return longestName;
  }

  // Our useMemo is used to make sure our find longest name function doesnt run multiple times.
  // This is usefully for when we have states like toggle that will change repeatively and we dont want to run our find longest name 
  // function multiple times. So we create a memo pass our function and create a dependecy that lets react know we only want
  // to run this function when there has actually been change in our data state otherwise do not run.
  const getLongestName = React.useMemo(()=> findLongestName(data),[data])

  return (
    <React.Fragment>
      <div className="App">
        <div>
          {/* Get our longestname function and return our results */}
          {getLongestName}
        </div>
        <button
        // button onclick changes our toggle states that triggers a page refresh
        onClick={()=> {
          setToggle(!toggle)
        }}
        >
          {" "} Toggle
        </button>
        {/* Toggle turnery that will display our h1 tag when toggle == true */}
        {toggle && <h1>toggle</h1>}
      </div>
    </React.Fragment>
  )
}

export default App
