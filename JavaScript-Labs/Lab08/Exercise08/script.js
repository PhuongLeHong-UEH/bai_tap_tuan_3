/* Exercise 8.8 - JavaScript functions
   Qua các bước: hàm in trực tiếp -> hàm trả về chuỗi -> hàm có tham số -> biến toàn cục / cục bộ */

// Bước 8: biến này có phạm vi toàn cục (global scope)
var boxClass = 'movingDiv';

// Bước 6: hàm có tham số num; Bước 4: hàm trả về chuỗi thay vì tự in ra
function outputBox(num) {
   // "var" làm cho box là biến cục bộ, chỉ dùng được bên trong hàm (Bước 9-10)
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

/* Bước 1 (phiên bản đầu tiên - hàm tự in ra màn hình):
function outputBox() {
   document.write("<div class='movingDiv' id='div1'>");
   document.write("This is div 1");
   document.write("</div>");
}
*/

// Bước 9: biến box là biến cục bộ nên bên ngoài hàm nó không tồn tại -> typeof trả về "undefined".
// (Nếu gọi console.log(box) sẽ báo lỗi "box is not defined" trong Console.)
// Bước 10: nếu bỏ "var" trước box thì box trở thành biến toàn cục - dễ gây lỗi, nên luôn khai báo bằng var.
console.log("typeof box (bên ngoài hàm) = " + typeof box);
