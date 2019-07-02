import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAMHjU4THqBDAGpLHoq9DOZLkKSHmhY-70",
    authDomain: "firebcss.firebaseapp.com",
    databaseURL: "https://firebcss.firebaseio.com",
    projectId: "firebcss",
    storageBucket: "firebcss.appspot.com",
    messagingSenderId: "686416807484",
    appId: "1:686416807484:web:784897785fb85240"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()
//const settings ={timestampsInSnapshots:true}
//firestore.settings(settings)
export const auth =firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle =()=>auth.signInWithPopup(provider)
export const signOut =()=> auth.signOut()
window.firebase =firebase
  export default firebase