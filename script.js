import { db } from './firebase.js';
import { doc, getDoc, setDoc, serverTimestamp, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const nameInput = document.getElementById('nameInput');
const searchInput = document.getElementById('searchInput');
const checkBtn = document.getElementById('checkBtn');
const createBtn = document.getElementById('createBtn');
const resultDiv = document.getElementById('result');
const counterDiv = document.getElementById('counter');
const takenNamesDiv = document.getElementById('takenNames');

let allNames = []; // نحفظ كل الاسماء هنا عشان البحث
const bannedWords = ['ادمن', 'admin', 'سب', 'حمار', 'كلب'];

async function loadAllData() {
    const querySnapshot = await getDocs(collection(db, "players"));
    allNames = [];
    
    counterDiv.innerText = `🔥 تم حجز ${querySnapshot.size} اسم حتى الان 🔥`;
    
    querySnapshot.forEach((doc) => {
        allNames.push({id: doc.id, data: doc.data()});
    });
    
    displayNames(allNames);
}

function displayNames(names) {
    takenNamesDiv.innerHTML = '';
    if (names.length === 0) {
        takenNamesDiv.innerHTML = '<p>لا يوجد اسماء</p>';
    } else {
        names.forEach((item) => {
            const date = item.data.takenAt ? new Date(item.data.takenAt.seconds * 1000).toLocaleDateString('ar-EG') : 'اليوم';
            takenNamesDiv.innerHTML += `
                <div class="name-item">
                    <span>👑 ${item.id}</span>
                    <div>
                        <span class="date">${date}</span>
                        <button class="copyBtn" onclick="copyName('${item.id}')">نسخ</button>
                    </div>
                </div>
            `;
        });
    }
}

window.copyName = (name) => {
    navigator.clipboard.writeText(name);
    showResult(`✅ تم نسخ "${name}"`, '#00ff88');
    setTimeout(() => resultDiv.innerText = '', 2000);
}

searchInput.addEventListener('input', (e) => {
    const search = e.target.value.toLowerCase();
    const filtered = allNames.filter(item => item.id.includes(search));
    displayNames(filtered);
});

function isNameValid(name) {
    if (name.length < 7) return '⚠️ الاسم لازم 7 حروف اقل شي';
    if (name.length > 12) return '⚠️ الاسم طويل جدا. اقصى شي 12';
    if (bannedWords.some(word => name.includes(word))) return '⚠️ الاسم فيه كلمة ممنوعة';
    return null;
}

async function checkName() {
    const name = nameInput.value.trim().toLowerCase();
    const error = isNameValid(name);
    if (error) return showResult(error, 'yellow');
    
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
    if (error) return showResult(error, 'yellow');
    
    showResult('جاري الانشاء...', 'white');
    checkBtn.disabled = true; createBtn.disabled = true;
    
    const docRef = doc(db, "players", name);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        showResult(`❌ الاسم "${name}" متاخد خلاص`, 'red');
    } else {
        await setDoc(docRef, { 
            takenAt: serverTimestamp(),
            bonus: "50 ميزة مفعلة"
        });
        showResult(`✅ تم انشاء "${name}" + تم تفعيل 50 ميزة`, '#00ff88');
        nameInput.value = '';
        loadAllData();
    }
    checkBtn.disabled = false; createBtn.disabled = false;
}

function showResult(text, color) {
    resultDiv.innerText = text;
    resultDiv.style.color = color;
}

checkBtn.addEventListener('click', checkName);
createBtn.addEventListener('click', createName);
loadAllData();