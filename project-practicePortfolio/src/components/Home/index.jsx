import './index.scss'
import React, {useEffect} from 'react'
// import logo
import LogoTitle from '../../assets/images/logo-s.png'
// import react dom links
import { Link } from 'react-router-dom'
// import our css for home
import './index.scss'
// import a custom component that animates our letters by passing an array
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import Loader from 'react-loaders'

// Our main home page
// this page is what people will see when they first load the page
const Home = () => {
    // something to note since I was following a portfolio building tutorial none of this content is my own I was just following and studying code

    // letter class state that gives each of our letters a text animate class that will trigger a load up animation that is coupled with a 
    // delay class that tells our application how long go delay the animation before actually playing
    const [letterClass, setLetterClass] = React.useState('text-animate');

    // Our use effect waits for everything to finish before changing our letterclass to text-animate-hover
    // that way after our letters load up we can hover and cause a different animation 
    useEffect(() => {
        return () => setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return(
        <React.Fragment>
            {/* container and home page most of these components will share the same container class to help create unity in our application */}
            <div className='container home-page'>
                {/* text zone where our h1 and paragraph tags reside */}
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>H</span> 
                        <span className={`${letterClass} _12`} >i,</span> 
                        <br /> 
                        <span className={`${letterClass} _13`} >I</span> 
                        <span className={`${letterClass} _14`} >'m</span>
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters letterClass={letterClass} strArray={"lobodan".split("")} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={"Web Developer.".split("")} idx={22} />
                    </h1>
                    <h2>
                        Frontend Developer / Javascript Expert / Youtuber
                    </h2>
                    <Link to="/contact" className='flat-button'> CONTACT ME </Link>
                </div>
                {/* our logo component that e are displaying when the page loads */}
                <Logo />
            </div>
            {/* loader component that runs a unique css animation that we are using to simulator a loading screen. Runs for a second
            and then fades away as our pagecontent actually loads
            Our page content itself has a 1 second load before it comes in and loads. */}
            <Loader type='pacman' />
        </React.Fragment>
    )
}

export default Home;