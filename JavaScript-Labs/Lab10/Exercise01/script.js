/* Exercise 10.1 - Set up jQuery
   Việc cài đặt nằm ở thẻ <head> trong index.html (CDN + file dự phòng).
   Đoạn code dưới đây chỉ kiểm tra jQuery đã sẵn sàng chưa và nó được nạp từ đâu. */
if (window.jQuery) {
    // Nếu CDN lỗi thì lệnh document.write ở <head> thêm một thẻ <script> thứ hai (bản dự phòng).
    var jqScripts = document.querySelectorAll('script[src*="jquery"]').length;
    var source = (jqScripts > 1) ? "file dự phòng trong repository (js/jquery-3.1.1.min.js)" : "CDN (code.jquery.com)";

    $("#jqStatus")
        .removeClass("alert-warning")
        .addClass("alert-success")
        .html("jQuery phiên bản <strong>" + $.fn.jquery + "</strong> đã được nạp thành công từ <strong>" + source + "</strong>.");
} else {
    document.getElementById("jqStatus").innerHTML = "Không nạp được jQuery.";
}
