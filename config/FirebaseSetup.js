import * as firebase from 'firebase';
//import Firebase

var config = {
    //set up configuration for Firebase API
    apiKey: "AIzaSyBaWYZ94G8h071WIUiTz4C-2EVok8iZX-s",
    authDomain: "pickup-4de9f.firebaseapp.com",
    databaseURL: "https://pickup-4de9f.firebaseio.com",
    projectId: "pickup-4de9f",
    storageBucket: "pickup-4de9f.appspot.com",
    messagingSenderId: "184041685269"
};

export const configureFirebase = () => {
  //initialize Firebase
  firebase.initializeApp(config);
}
