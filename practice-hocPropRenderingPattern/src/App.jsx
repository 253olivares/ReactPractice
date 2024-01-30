import React from "react"
// Our React application that utilizes HOC Method by rendering our components using prop rendering 


// Data fetcher deconstruct our render and url props
// render being a function that creates a p tag that takes in our data length and tells us out long our array is
// url is our link that our code looks at to determine what data we want to return
const DataFetcher  = ({render,url}) => {
  // Data state created to hold our data
  const [data,setData] = React.useState({})

  // use effect runs at the initial mount of each components
  React.useEffect(()=> {
    // if use effect detects our irl includes the string desserts 
    // then we set our desserts array which has 4 items
    if (url.includes("desserts")) {
      setData(["cake","ice cream", "brownie","sugar cookie"])
    } else {
      // if it does not detect that our url includes desserts then we set our drinks array
      setData(["water", "soda", "juice"])
    }
    // ultimately a fake api that sets different data depending on our url

  }, []); 

  // after we have our data we call our render function and pass our data create depending on the url
  // in this case our render is (data) => <p>{data.length} Dessert or Drink depending on if this function is being called by DessertsCount or DrinksCount </p>
  return render(data);
}
// same as drink component but passes a desert url to access a different data array
const DessertsCount = () => {
  return (
    <DataFetcher 
      url="https://littlelemon/desserts"
      render={(data) => <p>{data.length} Desserts</p>}
    />
  )
}
// dinking function that calls our data fetcher function where our state and use effect is created and injected into our react component.
// We pass a url that the data fetch component then checks to see if the url match what we are looking for
// depending on if our url says dessert we will set two different arrays that are then rendered using our render prop.
// our render prop takes our data and renders a p tag that demonstrates data.length and the work desserts or drink depending on the component we are calling
const DrinksCount = () =>{

  return (
    <DataFetcher 
    url="https://littlelemon/drinks"
    render={(data) => <p>{data.length} Drinks</p>}
    />
  )
}

// Our app functions is what is ultimately rendered in our application so we need to render our components all within this react fragment.
function App() {
  return (
    <React.Fragment>
      <header className="Header">Little Lemon Restaurant </header>
      <DessertsCount />
      <DrinksCount />
    </React.Fragment>
  )
}

export default App
