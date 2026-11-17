/* Exercise 9.7 - Working with forms: đổi màu nền ô nhập khi nhận/mất focus */

// Bước 2: hàm được gọi mỗi khi sự kiện focus hoặc blur xảy ra trên một ô nhập
function setBackground(e) {
    if (e.type == "focus") {
        e.target.style.backgroundColor = "#FFE393";
    }
    else if (e.type == "blur") {
        e.target.style.backgroundColor = "white";
    }
}

// Bước 3: sau khi trang load xong, gắn hàm trên vào các ô text và password
window.addEventListener("load", function () {
    var cssSelector = "input[type=text],input[type=password]";
    var fields = document.querySelectorAll(cssSelector);

    for (var i = 0; i < fields.length; i++) {
        fields[i].addEventListener("focus", setBackground);
        fields[i].addEventListener("blur", setBackground);
    }
});
