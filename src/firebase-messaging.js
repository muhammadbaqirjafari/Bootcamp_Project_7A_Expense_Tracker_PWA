import firebase from 'firebase';

export default function firebaseMessaging() {
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
    const db = firebase.firestore();

    // First request permission
    messaging.requestPermission()
    .then(() => {
        console.log("Have Permission");
        return messaging.getToken();
    })
    .then(token => {
        console.log("Token : ", token);

        // Now stroe the generated token to database
        db.collection('messaging-db').doc('token').set({
            Token: token
        });
    })
    .catch(err => {
        console.log("Error Occured While Geting Permission : ", err);
    })
}