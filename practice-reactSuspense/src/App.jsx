import React from "react";
import Header from './components/Header'
import PostList from "./components/PostList";

function App() {
  const [currentUserId, setCurrentUserId] = React.useState(0);

  return (
    <React.Fragment>
      <Header 
        currentUserId ={currentUserId}
        setCurrentUserId = {setCurrentUserId}
      />
      <PostList 
        currentUserId = {currentUserId}
      />
    </React.Fragment>
  )
}

export default App
