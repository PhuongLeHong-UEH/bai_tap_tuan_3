/* Exercise 9.5 - Responding to load events */

// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

/* Bước 2-3: nếu chạy ngay thì thẻ div1 chưa được tạo (DOM chưa load xong) nên báo lỗi:
var divToGet = document.getElementById("div1");
alert(divToGet.innerHTML);
*/

// Bước 4: đưa code vào trình nghe sự kiện "load" để chỉ chạy sau khi trang đã tải xong
window.addEventListener("load", function () {
    var divToGet = document.getElementById("div1");
    alert(divToGet.innerHTML);
});
