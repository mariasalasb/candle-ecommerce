import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    /*apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PRODUCT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID*/
    apiKey: "AIzaSyBwPMbmIYyG3X_XUCHxuVtCiixqnuf3kT0",
    authDomain: "candle-ecommerce-d2c82.firebaseapp.com",
    projectId: "candle-ecommerce-d2c82",
    storageBucket: "candle-ecommerce-d2c82.appspot.com",
    messagingSenderId: "791630508765",
    appId: "1:791630508765:web:978278b8aa6eca06152134",
    measurementId:"G-47PFEFEJ9Q"

  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  //const analytics= firebase.analytics();

  export function getFirebase(){
      return app
  }

  export function getFirestore(){
    return firebase.firestore(app)
  }