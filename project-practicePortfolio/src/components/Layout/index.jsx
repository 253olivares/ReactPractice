import './index.scss';
import React from 'react';
// import sidebar
import Sidebar from '../Sidebar';
// import our outlet
import { Outlet } from 'react-router-dom';

// Our layout component
// This component will always be rendered as per our route set up. In here we call call components we want to exist on every 
// page of our application

// here you can see we are rendering our Sidebar and will stay like this every page rerender
// we also have an outlet component that our router will render the child components inside our / layout route. 
// Outlet is where our about home and portfolio pages will render
// Layouts like this are really useful to creating unified page layouts
const Layout = () => {

    return (
        // main app component
            <div className='App'>
                {/* our side bar that will exist on every page */}
                <Sidebar />
                {/* page component that houses our page */}
                <div className='page'>
                    {/* special decoration tags */}
                    <span className='tags top-tags'>&lt;body&gt;</span>
                    
                    {/* outlet that displays child components in our route that matches the url */}
                    <Outlet />

                    {/* special decoration tages */}
                    <span className='tags bottom-tags'>
                        &lt;/body&gt;
                        <br />
                        <span className='bottom-tag-html'>&lt;/html&gt;</span>
                    </span>
                </div>
            </div>
    )
}

export default Layout;