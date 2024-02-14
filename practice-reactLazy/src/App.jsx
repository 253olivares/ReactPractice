import React from 'react'
import Home from './component/Home'
import Layout from './component/Layout'
// import Admin from './component/Admin'

// Calling in error boundary and error fallback that will redirect the user to the home page in the event that the application or server fails
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './component/ErrorFallback';

// Our Routes
import { Routes, Route, useNavigate } from 'react-router-dom'
// Skeleton that masks our content and will function as a loader.
// I will go over this in a different module
import SkeletonAdmin from './component/Skeletons/SkeletonAdmin';

// calling our react lazy and storing our import in a admin variable that we will call below
const Admin = React.lazy(()=> import('./component/Admin'));

function App() {

  // import our use navigate to change our url
  const navigate = useNavigate();

  return (
    <React.Fragment>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />}></Route>
            <Route path='admin' element={
              // ErrorBoundary will provide us a feedback code and navigate the user back to the home pahe
              <ErrorBoundary FallbackComponent={ErrorFallback}
                onReset = {()=> navigate('/') }>
                {/* React lazy relies on suspense to function so we have to wrap our lazy component around suspense
                doing this we all provide a feedback that the page will load while our data is being fetch */}
                <React.Suspense fallback={<SkeletonAdmin />}>
                  <Admin />
                </React.Suspense>
              </ErrorBoundary>
            }></Route>
          </Route>
        </Routes>
    </React.Fragment>
  )
}

export default App
