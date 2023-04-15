import './App.css';
import logo from './image/Card.jpg'
// Import the functions you need from the SDKs you need
import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlM1wFzmmgQfkkol5JjtSFUu1Z9MXIpnc",
  authDomain: "images-48989.firebaseapp.com",
  databaseURL: "https://images-48989-default-rtdb.firebaseio.com",
  projectId: "images-48989",
  storageBucket: "images-48989.appspot.com",
  messagingSenderId: "137220238746",
  appId: "1:137220238746:web:a6ba57ef23e05509bf1e23",
  measurementId: "G-E02J1LK7ZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app)


function App() {

  const [image, setImage] = useState(null)

  const handleImage = () => {
    if (image == null) return;
    const imageRef = ref(storage, `images/${image.name + v4()}`)
    uploadBytes(imageRef, image).then(() => {
      alert("Image Upload")
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='container' >
          <p style={{ color: 'black' }}>
            Kindly Upload Your Documents
          </p>
          <input onChange={(e) => setImage(e.target.files[0])} type='file' />
          <button onClick={handleImage} style={{ alignSelf: 'center' }} >Upload Image</button>
        </div>
      </header>
    </div>
  );
}

export default App;
