<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>Check Name Server</title>
    <style>
        body { font-family: Arial; text-align: center; padding: 50px; background: #111; color: white; }
        input { padding: 10px; width: 250px; }
        button { padding: 10px 20px; background: #00ff88; border: none; cursor: pointer; }
        #result { margin-top: 20px; font-size: 20px; }
    </style>
</head>
<body>
    <h1>سيرفر فحص الاسماء</h1>
    <input type="text" id="nameInput" placeholder="اكتب الاسم هنا">
    <button id="checkBtn">فحص</button>
    <div id="result"></div>

    <script type="module" src="script.js"></script>
</body>
</html>
