import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import React from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = React.useState('text-animate');

    const refForm = React.useRef();

    React.useEffect(()=> {
        return () => setTimeout(()=> {
            setLetterClass('text-animate-hover')
        }, 3000)
    },[])

    const sendEmail = (e) => {
        e.preventDefault();
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
        <React.Fragment>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                            strArray={["C","o","n","t","a","c","t", " ","m","e"]}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to contact me using below form either.
                    </p>
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