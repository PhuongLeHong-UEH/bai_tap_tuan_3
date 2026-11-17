/* Exercise 9.6 - Debugging events */

// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

/* Bước 2-6: dùng Developer Tools (F12 -> Sources), mở file script.js và click vào số dòng bên cạnh
   lệnh alert() để đặt breakpoint, sau đó rê chuột qua ô div để chương trình dừng lại.
   Có thể bỏ comment dòng "debugger;" bên dưới để chương trình tự dừng khi mở DevTools. */

// Bước 7: gắn sự kiện mouseover cho tất cả các ô .movingDiv
window.addEventListener("load", function () {
    var divs = document.querySelectorAll(".movingDiv");
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", function (e) {
            // debugger;
            // Bước 9: xem biến e và e.target trong cửa sổ Watch/Scope khi dừng tại breakpoint
            alert("triggered by " + e.target.id);
        });
    }
});
