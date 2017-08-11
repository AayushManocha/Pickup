import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBaWYZ94G8h071WIUiTz4C-2EVok8iZX-s",
    authDomain: "pickup-4de9f.firebaseapp.com",
    databaseURL: "https://pickup-4de9f.firebaseio.com",
    projectId: "pickup-4de9f",
    storageBucket: "pickup-4de9f.appspot.com",
    messagingSenderId: "184041685269"
};

export const configureFirebase = () => {
  firebase.initializeApp(config);
}