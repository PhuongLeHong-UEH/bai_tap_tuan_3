/* Exercise 9.1 - Basic DOM selection
   Lưu ý: ở bước 13 textarea bị ẩn đi. Muốn nhìn thấy nội dung textarea của các bước 5-12,
   hãy tạm comment dòng ở bước 13 rồi tải lại trang. */
var i;

// Bước 2: chọn phần tử bằng id và gán giá trị cho textarea
var msg = document.getElementById("msgArea");
msg.value = "here is some text";

// Bước 3: đổi nội dung thẻ h1
var title = document.getElementById("pageTitle");
title.innerHTML = "New Title";

// Bước 4: viết gọn, không dùng biến tạm
document.getElementById("pageTitle").innerHTML = "Even newer title";

// Bước 5: innerHTML trả về toàn bộ HTML bên trong phần tử
msg.value = document.getElementById("first").innerHTML;

// Bước 6: innerText chỉ trả về phần chữ, đã bỏ các thẻ
msg.value = document.getElementById("first").innerText;

// Bước 7: getAttribute() lấy giá trị thuộc tính (ở đây là class)
msg.value = "My class is " + msg.getAttribute("class");

// Bước 8: getElementsByTagName() trả về danh sách các phần tử cùng thẻ
var elem = document.getElementsByTagName("textarea");
elem[0].value = "selected by tag name";

// Bước 9: lấy tất cả thẻ span và nối nội dung vào textarea
elem = document.getElementsByTagName("span");
for (i = 0; i < elem.length; i++) {
    document.getElementById("msgArea").value += "\n" + elem[i].innerText;
}

// Bước 10: getElementsByClassName() - chọn theo tên class
document.getElementById("msgArea").value = "";
var counts = document.getElementsByClassName("count-number");
for (i = 0; i < counts.length; i++) {
    document.getElementById("msgArea").value += "\n" + counts[i].innerText;
}

// Bước 11: querySelector() - chọn phần tử đầu tiên khớp với bộ chọn CSS
var ps = document.querySelector("#first p");
document.getElementById("msgArea").value = ps.innerHTML;

// Bước 12: querySelectorAll() - chọn tất cả phần tử khớp
ps = document.querySelectorAll("#first p");
for (i = 0; i < ps.length; i++) {
    document.getElementById("msgArea").value += ps[i].innerHTML + "\n";
}

// Bước 13: đổi thuộc tính class thành "hidden" (class của Bootstrap) để ẩn textarea
document.getElementById("msgArea").setAttribute("class", "hidden");

// Bước 14: đổi kiểu hiển thị (style) - màu nền của khối features
document.getElementById("features").style.backgroundColor = "green";
