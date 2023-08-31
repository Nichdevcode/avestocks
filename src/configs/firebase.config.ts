// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCESesB0xN8MB5sNC6hDJ-DdmIY6i1oYw8",
  authDomain: "aves-defbd.firebaseapp.com",
  projectId: "aves-defbd",
  storageBucket: "aves-defbd.appspot.com",
  messagingSenderId: "306122192756",
  appId: "1:306122192756:web:b877da229c2a617ff91e21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export default storage;
