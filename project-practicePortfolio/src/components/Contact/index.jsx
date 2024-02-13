// importing our loaders
import Loader from 'react-loaders';
// our contact css 
import './index.scss'
// import our animated letters component
import AnimatedLetters from '../AnimatedLetters';
import React from 'react';
// email js currently doesnt work since I didnt set up an account and only wnt to play with the form
import emailjs from '@emailjs/browser'
// react leaflet used for our map on contact
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// contact component
const Contact = () => {

    // letterClass state
    const [letterClass, setLetterClass] = React.useState('text-animate');

    // react ref on refForm
    const refForm = React.useRef();

    // React use effect doing the same as we did previously 
    // it would prob be beneficial to set up a hoc but due to inexperience I am opting to just copy paste the code where needed
    React.useEffect(()=> {
        return () => setTimeout(()=> {
            setLetterClass('text-animate-hover')
        }, 3000)
    },[])

    // sendemail function the the form will fun when it detects that it has been submitted
    const sendEmail = (e) => {
        // prevent page reload
        e.preventDefault();
        // emailjs 
        emailjs
            .sendForm(
                'gmail',
                'token',
                refForm.current,
                'usertoken'
            )
            .then(
                ()=> {
                    alert("Message successfully sent!")
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again!')
                }
            )
    }


    return(
        // react fragment to hold all our content and inject it into our layout
        <React.Fragment>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        {/* animated letters takes in string array and a starting delay 1.5s */}
                        <AnimatedLetters 
                        letterClass={letterClass}
                            strArray={["C","o","n","t","a","c","t", " ","m","e"]}
                            idx={15}
                        />
                    </h1>
                    <p>
                        {/* p description will run pulse animation when loaded */}
                        I am interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to contact me using below form either.
                    </p>
                    {/* our form that using a ref we trie a reference to in react  */}
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={(e)=>sendEmail(e)}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type='text' name='subject' required/>
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required/>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                {/* info map div */}
                <div className='info-map'>
                    Slobodan Gajic,
                    <br />
                    Serbia,
                    <br />
                    Branka RadiCevicia 19, 2000
                    <br />
                    Sremska Mitrovica 
                    <br />
                    <span>freelancerslobodan@gmail.com</span>
                </div>
                {/* our map that using leaflet we set up a map container and tile layer that brings up our map
                // we create a marker and give is coordinate to start with */}
                {/* would have to do more research on leaflet I am not currently familiar with what all the components do
                just aware this is more versatile then using html built in function iframe */}
                <div className='map-wrap'>
                    <MapContainer center={[44.96366, 19.61045]} zoom={13} > 
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[44.96366, 19.61045]}>
                            <Popup>Sloba lives here, come over for a cup of coffee!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </React.Fragment>
    )
}

export default Contact;