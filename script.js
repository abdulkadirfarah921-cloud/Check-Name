import { db } from './firebase.js';
import { collection, doc, getDoc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const nameInput = document.getElementById('nameInput');
const checkBtn = document.getElementById('checkBtn');
const resultDiv = document.getElementById('result');

checkBtn.addEventListener('click', async () => {
    const name = nameInput.value.trim().toLowerCase();
    if (name === '') {
        resultDiv.innerText = 'اكتب اسم اول';
        return;
    }
    
    resultDiv.innerText = 'جاري الفحص...';
    const docRef = doc(db, "players", name);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        resultDiv.innerText = `❌ الاسم "${name}" متاخد`;
    } else {
        await setDoc(docRef, { takenAt: serverTimestamp() });
        resultDiv.innerText = `✅ الاسم "${name}" متاح وتم حجزه`;
    }
});