import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAmg3514eFlu-9fkik9Jk2tP2JiSnMkc4E",
    authDomain: "olx-clone-4c0c4.firebaseapp.com",
    projectId: "olx-clone-4c0c4",
    storageBucket: "olx-clone-4c0c4.appspot.com",
    messagingSenderId: "728322660297",
    appId: "1:728322660297:web:3c6cb97b46e39928cd3a18",
    measurementId: "G-NBVB77MYB5"
  };
 export default firebase.initializeApp(firebaseConfig)