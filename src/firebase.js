import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { doc, getDoc, getDocs, collection } from '@firebase/firestore' 

const firebaseConfig = {
  // apiKey: `${process.env.REACT_APP_API_KEY}`,
  // authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  // projectId: `wheres-waldo-93a2a`,
  // storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  // messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  // appId: `${process.env.REACT_APP_ID}`,
  // measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`
  apiKey: "AIzaSyBzAIGe_zfOB6lC1IzgwSfKr9tGryRXOPs",
  authDomain: "wheres-waldo-93a2a.firebaseapp.com",
  projectId: "wheres-waldo-93a2a",
  storageBucket: "wheres-waldo-93a2a.appspot.com",
  messagingSenderId: "114176723187",
  appId: "1:114176723187:web:bca52b5ee9571486ce4f86",
  measurementId: "G-T23W12R789"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

const getData = async (person) => {
  const docRef = doc(firestore, 'coordinates', person)
  const docSnap = await getDoc(docRef);
  return docSnap.data()
}

const getRecords = async () => {
  const db = getFirestore();
  const colRef = collection(db, 'record-data');
  const arr = [];
  try {
    const docsSnap = await getDocs(colRef);
    if(docsSnap.docs.length > 0) {
       docsSnap.forEach(doc => {
          arr.push(doc.data());
       })
    }
} catch (error) {
    console.log(error);
}
  return arr;
}

export default getData;

export { analytics, firestore, getRecords }