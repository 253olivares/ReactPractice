import React from 'react'
import Home from './component/Home'
import Layout from './component/Layout'
// import Admin from './component/Admin'

import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './component/ErrorFallback';
// import changes to loadable from loadable component
import loadable from '@loadable/component'

import { Routes, Route, useNavigate } from 'react-router-dom'
import SkeletonAdmin from './component/Skeletons/SkeletonAdmin';

const Admin = React.lazy(()=> import('./component/Admin'));

// This time I am using loadable a bit different and loading my fallback as a prop 
const LoaderAdminComponent = loadable(() => import('./component/Admin'),{
})

function App() {
  
  const navigate = useNavigate();

  return (
    <React.Fragment>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />}></Route>
            <Route path='admin' element={
              <ErrorBoundary FallbackComponent={ErrorFallback}
                onReset = {()=> navigate('/') }>
                  {/* calling my fallback using a prop instead of of an object */}
                  <LoaderAdminComponent fallback={<SkeletonAdmin />}/>
              </ErrorBoundary>
            }></Route>
          </Route>
        </Routes>
    </React.Fragment>
  )
}

export default App
