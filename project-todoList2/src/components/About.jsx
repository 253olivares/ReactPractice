import React from "react";
import {Link} from "react-router-dom";

const About = () =>{

    return (
        <div>
            {/* Our about page that our link points to and renders */}
            <h4>Version 1.0.0</h4>
            {/* Then another link to take us back */}
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default About;