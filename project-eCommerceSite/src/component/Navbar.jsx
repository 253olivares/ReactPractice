import React from "react";
// link component that is used instead of a tags to prevent pages from reloading
import {Link} from 'react-router-dom';
// shopping cart imported from phosphor react which is just an icon we are going to call
import {ShoppingCart} from 'phosphor-react';
import './navbar.css'

// Our navbar component

// component
const Navbar = () =>{
    return (
        // navBar div that houses each component
        <div className="navbar">
            {/* links */}
            <div className="links">
                {/* Our link with a to attribute which us what redirects our site url */}
                <Link to="/"> Shop </Link>
                <Link to="/cart">
                    {/* Shopping cart component that takes in prop of size which sets our px for the icon. this case we set it a sizer of 32px */}
                    <ShoppingCart size={32} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar