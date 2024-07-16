let imageHashMap = JSON.parse(localStorage.getItem('imageHashMap')) || {};

function convertAndHashImage() {
    const file = document.getElementById('fileInput').files[0];
    const reader = new FileReader();
    reader.onload = function() {
        const base64 = reader.result.split(',')[1]; // Lấy phần Base64 của hình ảnh
        const hash = CryptoJS.SHA256(base64).toString(CryptoJS.enc.Hex);
        document.getElementById('hashOutput').value = hash;
        imageHashMap[hash] = reader.result; // Lưu trữ hash và hình ảnh tương ứng

        // Lưu imageHashMap vào localStorage
        localStorage.setItem('imageHashMap', JSON.stringify(imageHashMap));
    };
    reader.readAsDataURL(file);
}

function lookupImage() {
    const hash = document.getElementById('hashInput').value;
    if (imageHashMap[hash]) {
        document.getElementById('imageOutput').src = imageHashMap[hash];
    } else {
        alert('Hash không hợp lệ hoặc không có hình ảnh tương ứng.');
    }
}
var catEl = document.getElementById("cat");
var startTime = new Date().getTime();

var walkTheCat = function() {
    var currTime = new Date().getTime();
    var secondsElapsed = ((currTime - startTime)/1000);
};

walkTheCat();
