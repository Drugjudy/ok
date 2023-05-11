import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkMGra7oeHygBHq3G4wPRmmNNXJH2Z6Fg",
  authDomain: "react-stude.firebaseapp.com",
  databaseURL: "https://react-stude-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-stude",
  storageBucket: "react-stude.appspot.com",
  messagingSenderId: "586081083422",
  appId: "1:586081083422:web:26a1215e7406b6b70cce0f",
  measurementId: "G-9QMSQWQY9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
