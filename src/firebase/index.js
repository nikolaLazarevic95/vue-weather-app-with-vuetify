import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCSfp4C2iRmbHCp-PfrHeHQMyjCllHtyUY",
  authDomain: "weatherapp-c42e5.firebaseapp.com",
  projectId: "weatherapp-c42e5",
  storageBucket: "weatherapp-c42e5.appspot.com",
  messagingSenderId: "785288234244",
  appId: "1:785288234244:web:e8be62c660a473b9a7fc51"
};

const app = initializeApp(firebaseConfig); 
const db = getFirestore(app)

export  {
    db
}