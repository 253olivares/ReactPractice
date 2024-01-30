import React from "react"

function App() {
  
  const[user,setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
    .then(response=>response.json())
    .then(data => setUser(data));
  }

  React.useEffect(()=> {
    fetchData();
  },
  //only run once at start 
  [])
  // conditional logic that turns our object into an array based on keys or entries like name last: name: address: 
  // when array length is longer than 0 then we know we have something and display our user information
  return Object.keys(user).length > 0 ? (
    <React.Fragment>
      <div>
        <h1>Data returned</h1>
        <h2>First Name: {user.results[0].name.first}</h2>
        <h2>Last Name: {user.results[0].name.last}</h2>
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment>
       <h1>Data Pending...</h1>
    </React.Fragment>
  )
}

export default App
