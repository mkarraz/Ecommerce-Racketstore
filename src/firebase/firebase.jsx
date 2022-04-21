import {initializeApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCeZSXFR47x7vYjby5iYCG0DTOkmx0dXV8",
  authDomain: "coderh-ecommerce-react.firebaseapp.com",
  projectId: "coderh-ecommerce-react",
  storageBucket: "coderh-ecommerce-react.appspot.com",
  messagingSenderId: "429866762669",
  appId: "1:429866762669:web:bd6504c6794e7e01282124"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)