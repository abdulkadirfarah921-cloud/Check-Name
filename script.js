import { db } from './firebase.js';
import { doc, getDoc, setDoc, serverTimestamp, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const nameInput = document.getElementById('nameInput');
const checkBtn = document.getElementById('checkBtn');
const createBtn = document.getElementById('createBtn');
const resultDiv = document.getElementById('result');
const counterDiv = document.getElementById('counter');

// الكلمات الممنوعة
const bannedWords = ['ادمن', 'admin', 'سب', 'حمار', 'كلب'];

async function updateCounter() {
    const querySnapshot = await getDocs(collection(db, "players"));
    counterDiv.innerText = `🔥 تم حجز ${querySnapshot.size} اسم حتى الان 🔥`;
}

function isNameValid(name) {
    if (name.length < 9) return 'الاسم لازم 9 حروف اقل شي';
    if (name.length > 15) return 'الاسم طويل جدا. اقصى شي 15';
    if (bannedWords.some(word => name.includes(word))) return 'الاسم فيه كلمة ممنوعة';
    return null;
}

async function checkName() {
    const name = nameInput.value.trim().toLowerCase();
    const error = isNameValid(name);
    if (error) return showResult(`⚠️ ${error}`, 'yellow');
    
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
    const error = isNameValid(name);
    if (error) return showResult(`⚠️ ${error}`, 'yellow');
    
    showResult('جاري الانشاء...', 'white');
    checkBtn.disabled = true; createBtn.disabled = true;
    
    const docRef = doc(db, "players", name);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        showResult(`❌ الاسم "${name}" متاخد خلاص`, 'red');
    } else {
        await setDoc(docRef, { 
            takenAt: serverTimestamp(),
            bonus: "50 ميزة مفعلة" // بتاعت موقع البند
        });
        showResult(`✅ تم انشاء "${name}" + تم تفعيل 50 ميزة`, '#00ff88');
        nameInput.value = '';
        updateCounter();
    }
    checkBtn.disabled = false; createBtn.disabled = false;
}

function showResult(text, color) {
    resultDiv.innerText = text;
    resultDiv.style.color = color;
}

checkBtn.addEventListener('click', checkName);
createBtn.addEventListener('click', createName);
updateCounter();