import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyC5BrqpyroHvUaQsLPRQMzfcJlSgjwdm8I",
  authDomain: "eshop-app-3603f.firebaseapp.com",
  databaseURL: "https://eshop-app-3603f.firebaseio.com",
  projectId: "eshop-app-3603f",
  storageBucket: "eshop-app-3603f.appspot.com",
  messagingSenderId: "107209908502",
  appId: "1:107209908502:web:164028b2e83a3a3581f037"
};
// Initialize Firebase
const fireDB = firebase.initializeApp(firebaseConfig);

  export default fireDB.database().ref();