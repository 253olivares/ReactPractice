import React from "react";
import { auth, db, storage } from "../../firebase";
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore/lite";

const Home = () => {


    const form = React.useRef();

    const submitPortfolio = (e) => {
        e.preventDefault();

        const name = form.current[0]?.value;
        const description = form.current[1]?.value;
        const url = form.current[2]?.value;
        const file = form.current[3]?.files[0];

        const storageRef = ref(storage, `portfolio/${file.name}`);

        uploadBytes(storageRef,file).then((snapshot)=> {
            getDownloadURL(snapshot.ref).then((downloadUrl)=> {
                savePortfolio({
                    name,
                    description,
                    url,
                    file: downloadUrl
                })
            },(error)=>{
                console.log(error);
                savePortfolio({
                    name,
                    description,
                    url,
                    file: null
                })
            });

        },()=>{
            console.log(error);
            savePortfolio({
                name,
                description,
                url,
                file: null
            })
        });
    }

    const savePortfolio = async (portfolio) => {
        console.log(portfolio)
        try{
            await addDoc(collection(db, `portfolio`),portfolio);
            window.location.reload(false);
        } catch(error) {
            alert('Failed to add portfolio')
            console.log(error);
        }
    }

    return (
        <div className="dashboard">
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
                <button onClick={()=>auth.signOut()}>Sign out</button>
            </form>
        </div>
    )
}

export default Home;