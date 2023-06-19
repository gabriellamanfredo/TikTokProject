import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAfOaoPDBHS2k4i6EVthYBDqOaK_IuPHJ0",
  authDomain: "tiktok-jornadadev-7c266.firebaseapp.com",
  projectId: "tiktok-jornadadev-7c266",
  storageBucket: "tiktok-jornadadev-7c266.appspot.com",
  messagingSenderId: "366475997905",
  appId: "1:366475997905:web:325477109d2ca259c84bf0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
