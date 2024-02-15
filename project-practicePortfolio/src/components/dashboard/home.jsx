import React from "react";
import { auth, db, storage } from "../../firebase";
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore/lite";

const Home = () => {

    // Create ref hook
    const form = React.useRef();
    // submitionPortfolio function that will run when our form submits
    const submitPortfolio = (e) => {
        e.preventDefault();

        // use our ref form to grab our data from our form using current index location to target each element
        // thenw e target our value and files for our image
        const name = form.current[0]?.value;
        const description = form.current[1]?.value;
        const url = form.current[2]?.value;
        const file = form.current[3]?.files[0];

        // run storage ref to create a variable that holds our storage login cred and directory o our cloud server
        const storageRef = ref(storage, `portfolio/${file.name}`);

        // upload bytes sends our filed to our cloud storage
        // then we retrieve our url link and set it over yo our save portfolio function that uploads our portfolio input to our firebase collection.
        uploadBytes(storageRef,file).then((snapshot)=> {
            getDownloadURL(snapshot.ref).then((downloadUrl)=> {
                savePortfolio({
                    name,
                    description,
                    url,
                    file: downloadUrl
                })
                // error that throws it to our console
            },(error)=>{
                console.log(error);
                savePortfolio({
                    name,
                    description,
                    url,
                    file: null
                })
            });

            // error that throws it to our console
        },(error)=>{
            console.log(error);
            savePortfolio({
                name,
                description,
                url,
                file: null
            })
        });
    }

    // save portfolio function where we add our collection to firebase so it shows up on our portfolio page ager

    const savePortfolio = async (portfolio) => {
        console.log(portfolio)
        try{
            await addDoc(collection(db, `portfolio`),portfolio);
            // we reload our page right after we submit our portfolio 
            window.location.reload(false);
        } catch(error) {
            alert('Failed to add portfolio')
            console.log(error);
        }
    }

    return (
        <div className="dashboard">
            {/* create a ref to our form and runs a submitsPortfolio function */}
            <form ref={form} onSubmit={submitPortfolio}>
                <p>
                    <input type="text" placeholder="Name" />
                </p>
                <p>
                    <textarea placeholer="Description" />
                </p>
                <p>
                    <input type="text" placeholder="Url" />
                </p>
                <p>
                    <input type="file" placeholder="Image" />
                </p>
                <button type="submit">Submit</button>
                {/* sign out button that clears our authentication and signs us out */}
                <button onClick={()=>auth.signOut()}>Sign out</button>
            </form>
        </div>
    )
}

export default Home;