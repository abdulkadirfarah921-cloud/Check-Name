import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJdGdOf_GiH80EHanRfFemhvV_PZ1mj8",
  authDomain: "checknameserver.firebaseapp.com",
  projectId: "checknameserver",
  storageBucket: "checknameserver.firebasestorage.app",
  messagingSenderId: "844037005131",
  appId: "1:844037005131:web:17a4b4553f6683d43412ce",
  measurementId: "G-FLBSWF8H3X"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);