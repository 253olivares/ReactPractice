import React, {useContext,useEffect, useState} from 'react';
import axios from 'axios';
import './usercard.css'

    // Our usercard function component
function Usercard(){ 
    // First we set our states by creating new states for our information we want to track
    // creating a state for first name, lastname, cellphone, email, and profile image
    const [firstName, setFirstName] = useState("Miguel");

    const [gender, setGender] = useState("male");

    const [lastName, setLastName] = useState("Olivares");

    const [cellphone, setCellphone] = useState("(317) 793 5873");

    const [email, setEmail] = useState("olivarezmig@gmail.com");

    const [image, setImage] = useState("./public/qy9jtg8emz7a1.jpg");
    // a function that when we click will get random user information from the random user api.
    async function getUser() {
        // res gets our request using axios
        const res = await axios.get('https://randomuser.me/api/');
        // we deconstruct our array getting only our user
        // results = res.data.results
        const {results} = res.data;
        // once we connect we run the set functions to replace our state values with the api values
        setFirstName(prevfName => prevfName = results[0].name.first);
        setLastName(prevlName => prevlName = results[0].name.last);
        setGender(prevGender => prevGender = results[0].gender);
        setCellphone(prevCellnumber => prevCellnumber = results[0].cell);
        setEmail(prevEmail => prevEmail = results[0].email)
        setImage(prevImage => prevImage = results[0].picture.large)
        // show our user information
        console.log(res);
        console.log(results);
    }

    return(
        <React.Fragment>
            <div className='userCard'>
                <div className='userProfileIcon'>
                    {/* create a turnery to change our css color for our border
                    update base on user gender pulled from api */}
                    <img style={{border: `10px solid ${gender =='female'? 'pink' : 'lightblue'}`}} src={image} alt="userProfileImage" />
                </div>
                <div className='userInformation'>
                    <div className='userName'>
                        <h3>User's Names</h3>
                        <div className='firstlastName'>
                            <p>{firstName}</p>
                            <p>{lastName}</p>
                        </div>
                    </div>
                    <div className='userContactInformation'>
                        <h3>User's Contact Information</h3>
                        <div className='email&phoneContact'>
                            <p>Cellphone: {cellphone}</p>
                            <p>Email: {email}</p>
                        </div>
                    </div>
                </div>
                <div className='userButton'>
                    <button  onClick={()=>getUser()}>Get A New User</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Usercard