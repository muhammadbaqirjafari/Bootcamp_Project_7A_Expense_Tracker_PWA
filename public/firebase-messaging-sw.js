// importScripts('/__/firebase/7.18.0/firebase-app.js');
// importScripts('/__/firebase/7.18.0/firebase-messaging.js');
// importScripts('/__/firebase/init.js');

importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyDGfNCvRqGuvUP7DBXVvN95VFpckfxsXSo",
    authDomain: "bootcamp-expense-tracker.firebaseapp.com",
    databaseURL: "https://bootcamp-expense-tracker.firebaseio.com",
    projectId: "bootcamp-expense-tracker",
    storageBucket: "bootcamp-expense-tracker.appspot.com",
    messagingSenderId: "843241177281",
    appId: "1:843241177281:web:66e694576bef0323b11440",
    measurementId: "G-TY4WKRCLG1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();