import firebase from "firebase";
require ("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyA3oMF8QWdf_N7PWSILRaf8tdCATItWTOg",
    authDomain: "bibliotecadigital-fac60.firebaseapp.com",
    projectId: "bibliotecadigital-fac60",
    storageBucket: "bibliotecadigital-fac60.appspot.com",
    messagingSenderId: "879697491403",
    appId: "1:879697491403:web:38d3a7998f8552c0f5324e"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

