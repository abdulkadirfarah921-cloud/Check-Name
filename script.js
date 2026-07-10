import { db } from './firebase.js';
import { doc, getDoc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const nameInput = document.getElementById('nameInput');
const checkBtn = document.getElementById('checkBtn');
const resultDiv = document.getElementById('result');

checkBtn.addEventListener('click', async () => {
    const name = nameInput.value.trim().toLowerCase();
    if (name === '') {
        resultDiv.innerText = '⚠️ اكتب اسم اول';
        resultDiv.style.color = 'yellow';
        return;
    }
    
    resultDiv.innerText = 'جاري الفحص...';
    resultDiv.style.color = 'white';
    checkBtn.disabled = true;
    
    try {
        const docRef = doc(db, "players", name);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            resultDiv.innerText = `❌ الاسم "${name}" متاخد`;
            resultDiv.style.color = 'red';
        } else {
            await setDoc(docRef, { takenAt: serverTimestamp() });
            resultDiv.innerText = `✅ الاسم "${name}" متاح وتم حجزه`;
            resultDiv.style.color = '#00ff88';
            nameInput.value = '';
        }
    } catch (error) {
        resultDiv.innerText = 'خطأ في الاتصال. جرب تاني';
        resultDiv.style.color = 'red';
        console.log(error);
    }
    checkBtn.disabled = false;
});