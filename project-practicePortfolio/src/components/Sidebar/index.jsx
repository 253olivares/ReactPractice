import './index.scss'
import React from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faSuitcase, faUser, faBars, faClose } from '@fortawesome/free-solid-svg-icons'

// sidebar content
const Sidebar = () => {

    // show state that will hide or show our nav when we are on a mobile device
    const [showNav, setShowNav] = React.useState(false);

    return (
        <div className='nav-bar'>
            {/* link on the logo that will put us on the home page when we click it */}
            <Link className='logo' to='/'>
                <img src={LogoS} alt="logo" />
                <img className='sub-logo' src={LogoSubtitle} alt="logoName" />
            </Link>
            {/* our nav that will change when we are mobile otherwise it will be hidden */}
            {/* all mobile show does is hide and show
            we have already adjusted to change our navs look using media queries
            if the app finds the application to be less than the screen resolution of 1200 px then we display our nav in mobile style */}
            <nav className={showNav ? 'mobile-show': ''} >
                {/* navLinks that direct our page to their respective location where the user wants to go */}
                <NavLink extract="true" activeclassname="active" to="/" onClick={()=> setShowNav(false)} >
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
                </NavLink>
                <NavLink activeclassname="active" className="about-link" to="/about" onClick={()=> setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
                </NavLink>
                <NavLink activeclassname="active" className="contact-link" to="/contact" onClick={()=> setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
                </NavLink>
                <NavLink activeclassname="active" className="portfolio-link" to="/portfolio" onClick={()=> setShowNav(false)} >
                    <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e'/>
                </NavLink>
                {/* close icon that will only display when the screen resolution is lower than 1200px */}
                <FontAwesomeIcon 
                    onClick={()=> setShowNav(false)}
                    icon={faClose}
                    color='#ffd700'
                    size='3x'
                    className='close-icon'
                />
            </nav>
            {/* ul tags that link to external accounts that if we want people can follow on */}
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>
                    </a>
                </li>
            </ul>
            {/* a ui icon that displays when the screen resolution is less than 1200px. 
            When users click on the hamburger ico it sets our nav show to true*/}
            <FontAwesomeIcon 
            onClick={()=> setShowNav(true)}
            icon={faBars}
            color='#ffd700'
            size='3x'
            className='hamburger-icon'
            />
        </div>
    )
}

export default Sidebar;