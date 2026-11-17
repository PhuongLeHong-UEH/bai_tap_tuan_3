/* Exercise 9.3 - Modifying the DOM (tạo, thêm và xóa phần tử) */

/* Bước 1: tạo thẻ <p> mới, gắn nội dung chữ rồi thêm vào cuối <div id="first"> */
var first = document.getElementById("first");

var text = document.createTextNode("this is programmatically created");
var p = document.createElement("p");

p.appendChild(text);
first.appendChild(p);

/* Bước 3: xóa một thẻ <li> (phần tử có id="deleteThisOne") khỏi danh sách icon */
var icons = document.getElementById("iconList");
icons.removeChild(document.getElementById("deleteThisOne"));
