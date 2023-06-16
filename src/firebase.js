
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,

  getDocs,
  
} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyBe8uY_TN3rvbJ9JAMZ0iSTMNH6iMfgkmo",
  authDomain: "profile-4c24e.firebaseapp.com",
  projectId: "profile-4c24e",
  storageBucket: "profile-4c24e.appspot.com",
  messagingSenderId: "507311988974",
  appId: "1:507311988974:web:046c6e4a13d554d23993ff"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const certificatesCollectionRef = collection(db, "certificates")

export default async function getCertificates(){
  const querySnapshot = await getDocs(certificatesCollectionRef)
  const mappedArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return mappedArr
}