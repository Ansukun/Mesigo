import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8ziACIRg6ECcFUb9Imv-tIG3XJbAiN2o",
  authDomain: "mesigo-ca576.firebaseapp.com",
  projectId: "mesigo-ca576",
  storageBucket: "mesigo-ca576.appspot.com",
  messagingSenderId: "364970980120",
  appId: "1:364970980120:web:152359cc26d0c7a52a646d",
  measurementId: "G-VL64EHPRKY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
