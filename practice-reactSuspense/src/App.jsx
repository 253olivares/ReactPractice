import React from "react";
import Header from './components/Header'
import PostList from "./components/PostList";

import { Suspense } from "react"

import SkeletonPost from "./components/Skeletons/SkeletonPost";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

// any previously created content has been deleted to avoid any confusion with previously created module. 

// 

function App() {

  const [currentUserId, setCurrentUserId] = React.useState(0);

  return (
    <React.Fragment>
      <Header 
        currentUserId ={currentUserId}
        setCurrentUserId = {setCurrentUserId}
      />

      {currentUserId == 0 ? 
         <h2 className="message">Select an Employee to view posts</h2>
        :
        (
          // Error boundary will catch any errors within our dom tree from post list and onward and then display that error instead of post list 
          <ErrorBoundary
          // with error boundary we set a component we want to load when we run into any issues
          // in thi case we are setting our error fallback component as our component to redirect to when we hit an error. 
          FallbackComponent={ErrorFallback} 
          // passes down a function we would like to utilize in our error fallback
          // this appears in our error component as  "resetErrorBoundary"
          onReset={() => setCurrentUserId(0)}
          // we are telling error boundary that when our current userid changes we reset our error boundary
          // which causes a rerender and we're hoping for the error to disappear.
          resetKeys={[currentUserId]}
          >
            {/* everything within error boundary with be caught if we run into an issues from post list downward our dom tree. */}
            {/* for our suspense we proide a fallback this is what will be show as our react application waits for the data to be retrieved
            originally this code was store inside post list using conditional rendering by with suspense we move it up the dom tree and have it display. While
            not the best example in a ideal situation this could function really well in use cases where we have multiple different  components we wish to render
            like a router.  */}
            <Suspense fallback={[...Array(10).keys()].map(i => <SkeletonPost key={i} />)}>
              {/* Post list rendering remains un touched we just pass it along as normal */}
               <PostList currentUserId = {currentUserId}/>
            </Suspense>
          </ErrorBoundary>
        )}

    </React.Fragment>
  )
}

export default App
