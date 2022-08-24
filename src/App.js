import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import './App.css';
import './App.sass';
import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
firebase.initializeApp({
    apiKey: "AIzaSyDMMknRpO0LphNq9_tkAmLf6g4zhJh3yzw",
    authDomain: "ibrainnyc-b475d.firebaseapp.com",
    projectId: "ibrainnyc-b475d",
    storageBucket: "ibrainnyc-b475d.appspot.com",
    messagingSenderId: "563589423427",
    appId: "1:563589423427:web:9c085da6e5a45c2eb18ff6",
    measurementId: "G-D1G3R5GZWY"
})

const auth = firebase.auth();
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

function SignIn(){
  const signInWithGoogle = ()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopUp(provider);
  }
  return(
    <div className="login-UI">
    <div className ="bg-overlay">
      <div class="video">
        <video autoplay loop class="fillWidth">
            <source src="./resources/login_video.mp4" type="video/webm" />Your browser is not supported. Please upgrade your browser to view content.
          </video>
      </div>
    </div>
    <div class="login-block">

    </div>
  </div> 
  )
}

export default App;
