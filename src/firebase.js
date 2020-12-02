import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyD1xuZZlVvNsWO4tZtkLW0F920CGNdSV8c",
    authDomain: "eshop-ba029.firebaseapp.com",
    databaseURL: "https://eshop-ba029.firebaseio.com",
    projectId: "eshop-ba029",
    storageBucket: "eshop-ba029.appspot.com",
    messagingSenderId: "498368346423",
    appId: "1:498368346423:web:f8a39953e9aaf3d85202b2"
  };
  // Initialize Firebase
  var fireDB = firebase.initializeApp(firebaseConfig);

  export default fireDB.database().ref();