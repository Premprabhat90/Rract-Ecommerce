import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDJof7ox1ZsTs-DnQ1oQA5fZvYvJYCEIn4",
    authDomain: "react-ecommerce-project-9f156.firebaseapp.com",
    projectId: "react-ecommerce-project-9f156",
    storageBucket: "react-ecommerce-project-9f156.appspot.com",
    messagingSenderId: "1038786710533",
    appId: "1:1038786710533:web:45aef82ae58752a15fa06c",
    measurementId: "G-WH7Q5S98TM"
  };

  export const app = firebase.initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
  export const db = firebase.firestore()