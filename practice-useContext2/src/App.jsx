import React from "react"
import { UserProvider , useUser}from "./UserContext";

const LoggedInUser = () => {
  // calls and deconstructs our user from the provider component with our state
  const {user} = useUser();

  return (
    <p>
      {/* user component */}
      Hello <span className="Username">{user.name}</span>
    </p>
  );
};
// Header component that wraps our logged in user
const Header = () => {
  
  return(
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};
// page component that we are using to render our page component 
const Page = () => {
  // We call use user from our provider to let the component know to grab our user information
  const {user} = useUser();

  return(
    <div>
      <h2>What is Lorem ipsum?</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab perspiciatis, numquam est tenetur sunt voluptas recusandae delectus quae neque error dolorum fugiat esse, ipsum nobis explicabo natus cumque? Ipsa, nulla.
      </p>
      <p>Written by {user.name}</p>
    </div>
  );
};


// App component that collects our components
function App() {

  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <Page />
      </div>
    </React.Fragment>
  )
}
// New root components that for testing purposes was being used on this module to bc originally my components werent rendering
// so for this project only root is what is being used and sent to render 
function Root() {
  return ( 
  <UserProvider>
    <App />
  </UserProvider>)
}

export default Root
