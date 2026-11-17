/* Exercise 9.4 - Simple event handling (addEventListener) */

// Bước 2, 5, 6: hàm xử lý sự kiện click của nút - ẩn/hiện đoạn văn có hiệu ứng chuyển mờ
function simpleHandler(event) {
    var content = document.getElementById("content");
    if (btn.innerHTML == "Hide") {
        btn.innerHTML = "Show";
        content.className = "makeItDisappear";
        // đổi display sau khi hiệu ứng mờ dần chạy (trễ 1000 mili giây)
        setTimeout(function () {
            content.style.display = "none";
        }, 1000);
    }
    else {
        btn.innerHTML = "Hide";
        content.style.display = "block";

        // đổi class sau 500 mili giây
        setTimeout(function () {
            content.className = "makeItNormal";
        }, 500);
    }
}

var btn = document.getElementById("testButton");
btn.addEventListener("click", simpleHandler);

// Bước 3: đổi sang màu xám khi rê chuột vào hình (dùng hàm ẩn danh làm trình xử lý)
var img = document.getElementById("mainImage");
img.addEventListener("mouseover", function (event) {
    img.className = "makeItGray";
});

// Bước 4: trả về bình thường khi chuột rời khỏi hình
img.addEventListener("mouseout", function (event) {
    img.className = "makeItNormal";
});
