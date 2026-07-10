<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>فحص اسم اللاعب</title>
    <style>
        body { font-family: 'Cairo', Arial; text-align: center; padding: 50px 20px; background: #0a0a0a; color: white; }
        h1 { color: #ff8800; text-shadow: 0 0 15px #ff8800; }
        input { padding: 14px; width: 80%; max-width: 300px; border-radius: 10px; border: 2px solid #ff8800; background: #1a1a1a; color: white; text-align: center; font-size: 16px; margin: 10px 0; }
        
        .btn-group { display: flex; gap: 10px; justify-content: center; margin-top: 10px; }
        button { padding: 14px 25px; border: none; border-radius: 10px; cursor: pointer; font-weight: bold; font-size: 16px; color: black; flex: 1; max-width: 150px; transition: 0.2s; }
        #checkBtn { background: linear-gradient(90deg, #00aaff, #0055ff); }
        #createBtn { background: linear-gradient(90deg, #00ff88, #00cc66); }
        button:active { transform: scale(0.92); }
        button:disabled { opacity: 0.5; cursor: not-allowed; }
        
        #result { margin-top: 25px; font-size: 20px; font-weight: bold; min-height: 30px; }
    </style>
</head>
<body>
    <h1>🔥 انشاء اسم اللاعب 🔥</h1>
    <input type="text" id="nameInput" placeholder="اكتب اسمك هنا..." maxlength="15">
    
    <div class="btn-group">
        <button id="checkBtn">فحص</button>
        <button id="createBtn">إنشاء</button>
    </div>
    
    <div id="result"></div>

    <script type="module" src="script.js"></script>
</body>
</html>
