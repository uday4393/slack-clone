import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBAZUV3DOkYc74BQAQtCC1URhfcfhj_VqM",
    authDomain: "slack-clone-540b8.firebaseapp.com",
    databaseURL: "https://slack-clone-540b8.firebaseio.com",
    projectId: "slack-clone-540b8",
    storageBucket: "slack-clone-540b8.appspot.com",
    messagingSenderId: "800726847765",
    appId: "1:800726847765:web:da47ba988a64619a63d91c",
    measurementId: "G-TGZRWTDKQ8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
