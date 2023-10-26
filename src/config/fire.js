import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCJY_YMme-x7sUgfI2YHpaYCL6CdbfQB6I",
    authDomain: "login--signup-firebase.firebaseapp.com",
    projectId: "login--signup-firebase",
    storageBucket: "login--signup-firebase.appspot.com",
    messagingSenderId: "381470544022",
    appId: "1:381470544022:web:a1facb078281a7be1a72b7"
};
const fire = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
  
export default db;

  

// export default fire;