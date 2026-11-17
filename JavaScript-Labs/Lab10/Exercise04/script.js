/* Exercise 10.4 - jQuery listeners (xử lý sự kiện bằng jQuery) */

/* Bước 2: dùng phương thức tắt click()
$(".panel").click(function () {
    $("#message").html("You clicked in the panel");
});

   Bước 3: dùng on() - cách chung cho mọi loại sự kiện
$(".panel").on("click", function () {
    $("#message").html("You clicked in the panel");
});
*/

// Bước 4-5: $(function () {...}) là rút gọn của sự kiện "document ready" (DOM đã sẵn sàng),
// bên trong gắn nhiều trình xử lý nối tiếp nhau (chaining)
$(function () {
    $(".panel")
        .on("mousemove", function (e) {
            $("#message").html("x=" + e.pageX + " y=" + e.pageY);
        })
        .on("mouseleave", function (e) {
            $("#message").html("goodbye!");
        })
        .on("click", function () {
            $("#message").html("stopped move reporting");
            // off() gỡ trình xử lý mousemove nên toạ độ không còn được cập nhật
            $(".panel").off("mousemove");
        });
});
