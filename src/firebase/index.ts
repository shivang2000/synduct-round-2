import { initializeApp } from 'firebase/app';
import { getFirestore,collection, addDoc  } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, child } from "firebase/database";


const PROJECT_ID = "synduct-26bab"
const SENDER_ID = "730004230000"
const API_KEY = "AIzaSyAy693BtnssrtUue6jqbwpgR_96-PbiWK0"
const APP_ID = "1:730004230000:web:09187551387ace955089b5"

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: `${PROJECT_ID}.firebaseapp.com`,
  // The value of `databaseURL` depends on the location of the database
  databaseURL: `https://${PROJECT_ID}.${"asia-south1"}.firebaseio.com`,
  projectId: PROJECT_ID,
  // The value of `storageBucket` depends on when you provisioned your default bucket (learn more)
  storageBucket: `${PROJECT_ID}.firebasestorage.app`,
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  // measurementId: "G-MEASUREMENT_ID",
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const database = getDatabase(app);
const auth = getAuth(app)


export {app, firestore, database, auth, ref, set, child, collection, addDoc}