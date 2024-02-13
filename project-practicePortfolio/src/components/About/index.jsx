import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import React from 'react';
// Our about style
import './index.scss'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
// Our loader component
import Loader from 'react-loaders';


// our about component
const About = () => {   
    // same letter class state from our home that will fulfill our our desired animation from home
    const [letterClass, setLetterClass] = React.useState('text-animate');
    
    // use effect that changes our text animate into a hover animation

    React.useEffect(()=> {
        return ()=> setTimeout(()=> {
            setLetterClass('text-animate-hover')
        }, 3000);
    })

    // return component html
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    {/* our header page title */}
                    <h1>
                        {/* animated letter components that takes in our string and our delay we want to start at*/}
                        <AnimatedLetters 
                        letterClass={letterClass}
                            strArray={["A", "b", "o", "u", "t"," ", "m", "e"]}
                            idx={15}
                        />
                    </h1>
                    {/* p tags that will play with pulse animation when we load the page */}
                    <p>
                        I'm a very ambitious front-end developer looking for a role in an
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <p>
                        I'm quiet confident, naturally curious, and perpetually working on
                        improving my chops one design problem at a time.
                    </p>
                    <p>
                        If I need to define myself in one sentence that would be a family
                        person, father of a beautiful daughter, a sports fanatic,
                        photography enthusiast, and tech-obsessed!!!
                    </p>
                </div>
                {/* cube container that will plage a cube animation on the right with the programming languages we understand */}
                <div className='stage-cube-cont'>
                    {/* we create 6 divs that will be the faces of our cubes
                    we load our icons in each with the color we want 
                    then we transform our faces in css by giving them unique xyz cordinates to create a cube in a 3d space that we will then spin
                     */}
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}
export default About;