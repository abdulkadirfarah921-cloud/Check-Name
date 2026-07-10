<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>انشاء اسم اللاعب | سيرفرك</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@700&display=swap');
        body { font-family: 'Cairo'; text-align: center; padding: 30px 20px; background: linear-gradient(180deg, #0a0a0a, #1a0a00); color: white; min-height: 100vh; }
        h1 { color: #ff8800; text-shadow: 0 0 20px #ff8800; font-size: 32px; animation: glow 1.5s infinite alternate; }
        @keyframes glow { from { text-shadow: 0 0 10px #ff8800; } to { text-shadow: 0 0 25px #ff5500; } }
        
        .counter { background: #ff8800; color: black; padding: 10px 20px; border-radius: 10px; font-size: 18px; font-weight: bold; margin-bottom: 20px; display: inline-block; }
        
        input { padding: 15px; width: 80%; max-width: 320px; border-radius: 12px; border: 3px solid #ff8800; background: #1a1a1a; color: white; text-align: center; font-size: 18px; margin: 15px 0; }
        
        .btn-group { display: flex; gap: 15px; justify-content: center; margin-top: 15px; }
        button { padding: 15px 30px; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 18px; color: black; flex: 1; max-width: 160px; transition: 0.3s; font-family: 'Cairo'; }
        #checkBtn { background: linear-gradient(90deg, #00aaff, #0055ff); }
        #createBtn { background: linear-gradient(90deg, #00ff88, #00cc66); }
        button:hover { transform: scale(1.05); box-shadow: 0 0 15px currentColor; }
        button:active { transform: scale(0.92); }
        button:disabled { opacity: 0.5; cursor: not-allowed; }
        
        #result { margin-top: 25px; font-size: 22px; font-weight: bold; min-height: 35px; }
        
        .names-list { background: #1a1a1a; border: 2px solid #ff8800; border-radius: 15px; padding: 20px; margin-top: 30px; max-width: 400px; margin-left: auto; margin-right: auto; }
        .names-list h2 { color: #ff8800; margin-top: 0; }
        #takenNames { text-align: right; max-height: 200px; overflow-y: auto; }
        #takenNames p { background: #0a0a0a; padding: 8px; border-radius: 8px; margin: 5px 0; color: #00ff88; }
    </style>
</head>
<body>
    <h1>🔥 انشاء اسم اللاعب 🔥</h1>
    <div class="counter" id="counter">جاري تحميل العداد...</div>
    
    <input type="text" id="nameInput" placeholder="اكتب اسمك 7 الى 12 حرف..." maxlength="12">
    
    <div class="btn-group">
        <button id="checkBtn">فحص</button>
        <button id="createBtn">إنشاء</button>
    </div>
    
    <div id="result"></div>

    <div class="names-list">
        <h2>📋 الاسماء المأخوذة</h2>
        <div id="takenNames">جاري التحميل...</div>
    </div>

    <script type="module" src="script.js"></script>
</body>
</html>
