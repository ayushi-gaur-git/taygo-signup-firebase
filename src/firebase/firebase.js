import firebase from "firebase/app";
import "firebase/firestore";


// <script src="https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js"></script>
//
// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.2.6/firebase-analytics.js"></script>
var firebaseConfig = {
    apiKey: "AIzaSyAZgBjuoUuurO3tEtJS_wmYlTbGkeWrAbI",
    authDomain: "taygo-442b7.firebaseapp.com",
    projectId: "taygo-442b7",
    storageBucket: "taygo-442b7.appspot.com",
    messagingSenderId: "687866595563",
    appId: "1:687866595563:web:01f2b9d9c909d2b1d956ae",
    measurementId: "G-M1VC7WP0EY"
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
