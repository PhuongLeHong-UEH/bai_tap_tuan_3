/* Exercise 9.2 - DOM family relations (quan hệ giữa các node trong cây DOM)
   Mở F12 -> Console để xem các dòng console.log. */

// Bước 2-5: các lệnh thử trong Console
console.log(document.getElementById("first"));
// firstChild là một node văn bản (khoảng trắng/xuống dòng) chứ không phải thẻ <h1>
console.log(document.getElementById("first").firstChild);
// nextSibling: node kế tiếp cùng cấp
console.log(document.getElementById("first").firstChild.nextSibling);
// parentNode: node cha
console.log(document.getElementById("first").parentNode);

// Bước 6: duyệt qua tất cả node con của <div id="stories">
var stories = document.getElementById("stories");
for (var i = 0; i < stories.childNodes.length; i++) {
    console.log("child " + i + " =" + stories.childNodes[i] +
                " nodeType=" + stories.childNodes[i].nodeType);
}

// Bước 7: đổi màu nền cho các node KHÔNG phải node văn bản (nodeType == 1 là thẻ HTML)
for (var j = 0; j < stories.childNodes.length; j++) {
    if (stories.childNodes[j].nodeType == 1) {
        stories.childNodes[j].style.backgroundColor = "#b3e5fc";
    }
}

// Áp dụng tương tự cho các thẻ con của <div id="first">
var first = document.getElementById("first");
for (var k = 0; k < first.childNodes.length; k++) {
    if (first.childNodes[k].nodeType == 1) {
        first.childNodes[k].style.backgroundColor = "#ffe0b2";
    }
}
