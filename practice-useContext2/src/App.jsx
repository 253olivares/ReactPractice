import React from "react"
import { UserProvider , useUser}from "./UserContext";

const LoggedInUser = () => {

  const {user} = useUser();

  return (
    <p>
      Hello <span className="Username">{user.name}</span>
    </p>
  );
};

const Header = () => {
  
  return(
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {

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

function Root() {
  return ( <UserProvider>
    <App />
  </UserProvider>)
}

export default Root
