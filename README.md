<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>فحص الاسم</title>
    <style>
        body { font-family: Arial; text-align: center; padding: 50px; background: #111; color: white; }
        h1 { color: #ff8800; }
        input { padding: 12px; width: 250px; border-radius: 8px; border: 2px solid #ff8800; background: #222; color: white; }
        button { padding: 12px 25px; background: #ff8800; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; margin-top: 10px; }
        #result { margin-top: 20px; font-size: 20px; }
    </style>
</head>
<body>
    <h1>🔥 انشاء اسم اللاعب 🔥</h1>
    <input type="text" id="nameInput" placeholder="اكتب اسمك هنا...">
    <br>
    <button id="checkBtn">فحص</button>
    <div id="result"></div>

    <script type="module" src="script.js"></script>
</body>
</html>
