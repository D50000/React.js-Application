import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // It copy from firebase.
    apiKey: "AIzaSyDXUCNSpi5u07F76httlCTXAA4mPVQlEHs",
    authDomain: "catch-of-the-day-wes-bos-2.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-wes-bos-2.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;