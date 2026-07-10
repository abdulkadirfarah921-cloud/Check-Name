import { db } from './firebase.js';
import { doc, getDoc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const nameInput = document.getElementById('nameInput');
const checkBtn = document.getElementById('checkBtn');
const createBtn = document.getElementById('createBtn');
const resultDiv = document.getElementById('result');

async function checkName() {
    const name = nameInput.value.trim().toLowerCase();
    if (name === '') return showResult('⚠️ اكتب اسم اول', 'yellow');
    
    showResult('جاري الفحص...', 'white');
    const docSnap = await getDoc(doc(db, "players", name));

    if (docSnap.exists()) {
        showResult(`❌ الاسم "${name}" متاخد`, 'red');
    } else {
        showResult(`✅ الاسم "${name}" متاح تقدر تنشئه`, '#00ff88');
    }
}

async function createName() {
    const name = nameInput.value.trim().toLowerCase();
    if (name === '') return showResult('⚠️ اكتب اسم اول', 'yellow');
    
    showResult('جاري الانشاء...', 'white');
    checkBtn.disabled = true; createBtn.disabled = true;
    
    const docRef = doc(db, "players", name);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        showResult(`❌ الاسم "${name}" متاخد خلاص`, 'red');
    } else {
        await setDoc(docRef, { takenAt: serverTimestamp() });
        showResult(`✅ تم انشاء الاسم "${name}" بنجاح`, '#00ff88');
        nameInput.value = '';
    }
    checkBtn.disabled = false; createBtn.disabled = false;
}

function showResult(text, color) {
    resultDiv.innerText = text;
    resultDiv.style.color = color;
}

checkBtn.addEventListener('click', checkName);
createBtn.addEventListener('click', createName);