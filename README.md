<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>فحص اسم اللاعب</title>
    <style>
        body { font-family: Arial; text-align: center; padding: 50px 20px; background: #0a0a0a; color: white; }
        h1 { color: #ff8800; text-shadow: 0 0 10px #ff8800; }
        input { padding: 14px; width: 80%; max-width: 300px; border-radius: 10px; border: 2px solid #ff8800; background: #1a1a1a; color: white; text-align: center; font-size: 16px; margin: 10px 0; }
        button { padding: 14px 30px; background: linear-gradient(90deg, #ff8800, #ff5500); border: none; border-radius: 10px; cursor: pointer; font-weight: bold; font-size: 18px; color: black; }
        button:active { transform: scale(0.95); }
        #result { margin-top: 25px; font-size: 22px; font-weight: bold; min-height: 30px; }
    </style>
</head>
<body>
    <h1>🔥 انشاء اسم اللاعب 🔥</h1>
    <input type="text" id="nameInput" placeholder="اكتب اسمك هنا...">
    <br>
    <button id="checkBtn">فحص الاسم</button>
    <div id="result"></div>

    <script type="module" src="script.js"></script>
</body>
</html>
