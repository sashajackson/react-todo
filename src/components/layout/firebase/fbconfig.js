import firebase from "firebase/app"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDKgeIc0-WHw7e6Y9s5E4cZXeu9NphtFA4",
    authDomain: "glco-19bf1.firebaseapp.com",
    projectId: "glco-19bf1",
    storageBucket: "glco-19bf1.appspot.com",
    messagingSenderId: "632497291581",
    appId: "1:632497291581:web:11a0387c20bbbdc8148554",
    measurementId: "G-N58Z5EKQ7R"
  };

  firebase.initializeApp(firebaseConfig)
  const storage = firebase.storage();


  export default firebase