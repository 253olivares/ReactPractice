import './index.scss'
import React from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faSuitcase, faUser, faBars, faClose } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {

    const [showNav, setShowNav] = React.useState(false);

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt="logo" />
                <img className='sub-logo' src={LogoSubtitle} alt="logoName" />
            </Link>
            <nav className={showNav ? 'mobile-show': ''} >
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
                <FontAwesomeIcon 
                    onClick={()=> setShowNav(false)}
                    icon={faClose}
                    color='#ffd700'
                    size='3x'
                    className='close-icon'
                />
            </nav>
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