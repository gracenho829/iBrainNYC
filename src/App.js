import ReactDOM from 'react-dom/client';
import './App.css';
import './App.sass';
import firebase from 'firebase/app'; 
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDMMknRpO0LphNq9_tkAmLf6g4zhJh3yzw",
    authDomain: "ibrainnyc-b475d.firebaseapp.com",
    projectId: "ibrainnyc-b475d",
    storageBucket: "ibrainnyc-b475d.appspot.com",
    messagingSenderId: "563589423427",
    appId: "1:563589423427:web:9c085da6e5a45c2eb18ff6",
    measurementId: "G-D1G3R5GZWY"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);    
const auth = getAuth(app);


function App() {
  const[user] = useAuthState(auth);
  return (
    <div className = "App">
      <header>

      </header>
      <section>
        {user? <Dashboard/> : <SignIn/>}
      </section>
    </div>
  );
}
function signInWithGoogle(){
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
}
function SignIn(){
  return(
    <div class ="login-UI">
      <div className ="video-block">
        <div class="video">
          <video autoplay loop class="fillWidth">
              <source src="src/resources/login_video.mp4"/>Your browser is not supported. Please upgrade your browser to view content.
            </video>
        </div>
      </div>
    <div class="login-block">
      <img></img>
      <h3>Parent Portal</h3>
      <div class = "inputField">
        <h6>Email</h6>
        <input type="email"></input>
      </div>
      <div class = "inputField">
        <h6>Password</h6>
        <input type="password"></input>
        <a href="">Forgot Your Password?</a>
      </div>
      <button onClick={signInWithGoogle}>Sign In</button>
      <div>
        <p>Don't have an account?</p>
        <a href="">Sign Up</a>
      </div>
    </div>
  </div> 
  )
}

function SignOut(){
  signOut(auth).then(() => {
  }).catch((error) => {
    console.log("Error");
  });
}

function Dashboard(){
  return (
    <div>
      <section>
      console.log(user);
    </section>
    Logged In
    <button onClick = {SignOut}>Sign Out</button>
    </div>
  )
}
export default App;
