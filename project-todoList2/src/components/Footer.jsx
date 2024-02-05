import React from "react";
import {Link, useLocation} from "react-router-dom";
// This is my footer component Nothing really special about this component just learning to use the route component in react
const Footer = () => {

    const location = useLocation();

    return (
        <footer>
            <p>Copyright &copy; 2023</p>
            {/* Link component that is used instead of a tags */}
            {location.pathname === '/' && <Link to="/about">About</Link>}
        </footer>
    )
}

export default Footer