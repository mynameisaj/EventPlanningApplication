import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAsphh5Y1AT0HdUZL7H7Lf5VZJg4gfrBvo",
    authDomain: "seniorproject-a89a7.firebaseapp.com",
    databaseURL: "https://seniorproject-a89a7.firebaseio.com",
    projectId: "seniorproject-a89a7",
    storageBucket: "seniorproject-a89a7.appspot.com",
    messagingSenderId: "71267361151"
  };

export const firebaseinit = firebase.initializeApp(config)