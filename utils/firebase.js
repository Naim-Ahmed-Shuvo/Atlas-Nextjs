import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBGgQbMop9SyOm31xhHtde_oIzsz27jUXs",

    authDomain: "atlas-39657.firebaseapp.com",
  
    projectId: "atlas-39657",
  
    storageBucket: "atlas-39657.appspot.com",
  
    messagingSenderId: "89691281595",
  
    appId: "1:89691281595:web:890ec613ecccab392eb19e",
  
    measurementId: "G-52Y77YPYNL"
  
}

if(!firebase.apps.length){
    firebase.initializeApp(config)
}
export const auth = firebase.auth()
// export default auth;


