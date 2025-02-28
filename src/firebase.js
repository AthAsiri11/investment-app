import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDpGmvwwRI_mgdpFepnUHYj6Epxk7uaxts",
  authDomain: "investment-f31be.firebaseapp.com",
  projectId: "investment-f31be",
  storageBucket: "investment-f31be.appspot.com",
  messagingSenderId: "351881254544",
  appId: "1:351881254544:web:53e2b24edc2a76a64cea15",
  measurementId: "G-DEP47RHMSG",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export { auth, db, storage };
