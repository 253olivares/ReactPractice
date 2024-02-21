import React from "react";
import Header from './components/Header'
import PostList from "./components/PostList";

// Our main app jsx file where well gather all our components before pushing it to main jsx to compile in our react framework.

function App() {
  // we create a state for our user id this way our functions we create a select list that displays all our users. As soon as a onchange is detect in our header our page rerenders 
  // with new selected user id that is passed to our state
  const [currentUserId, setCurrentUserId] = React.useState(0);

  return (
    <React.Fragment>
      {/* we pass our new user id state down to the header along sure our set function that changes our currentUserId */}
      <Header 
        currentUserId ={currentUserId}
        setCurrentUserId = {setCurrentUserId}
      />
      {/* our currentUserId passes down to our post lists which the app gets to make sure it fetches the correct user information. */}
      <PostList 
        currentUserId = {currentUserId}
      />
    </React.Fragment>
  )
}

export default App
