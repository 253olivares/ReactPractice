// import our google sign in button from firebase
import { signInWithGoogle } from "../../firebase";

// login component
const Login = () => {
    return (
        // return a dashboard that has a button that allows us to sign in
        <div className="dashboard">
            <button onClick={()=>signInWithGoogle()}>
                Sign in with google!
            </button>
        </div>
    )
}

export default Login;