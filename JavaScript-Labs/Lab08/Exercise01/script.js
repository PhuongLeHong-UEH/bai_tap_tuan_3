/* Exercise 8.1 - Enabling/Disabling JavaScript
   Nếu trình duyệt đang bật JavaScript thì file này chạy và đổi nội dung thông báo.
   Nếu JavaScript bị tắt, file này không chạy nên thông báo "disabled" trong HTML được giữ nguyên. */
var statusBox = document.getElementById("jsStatus");
statusBox.innerHTML = "You have JavaScript enabled";
statusBox.className = "status on";
