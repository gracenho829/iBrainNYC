import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

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
const analytics = getAnalytics(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
