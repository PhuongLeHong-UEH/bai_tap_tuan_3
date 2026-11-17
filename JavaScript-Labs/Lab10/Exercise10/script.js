/* Exercise 10.10 - jqXHR handling: xử lý lỗi và trạng thái bằng .done() .fail() .always() */
$(function () {
    $('.animLoading').hide();

    // Web service của giáo trình (dùng https vì GitHub Pages chạy trên https)
    var url = "https://www.randyconnolly.com/funwebdev/services/travel/cities.php";
    // Dữ liệu dự phòng trong repository, dùng khi web service bên ngoài bị lỗi
    var localUrl = "../data/cities.json";

    function consume(requestUrl, isFallback) {
        var fallbackStarted = false;
        $('.animLoading').show();
        $("#results").html("<ul></ul>");

        $.get(requestUrl)
            // done chạy đầu tiên khi request thành công
            .done(function (data) {
                if (isFallback) {
                    $("#results").prepend('<p class="note">Đang hiển thị dữ liệu dự phòng (data/cities.json).</p>');
                }
                $.each(data, function (index, value) {
                    var li = $('<li/>').html(value.name);
                    li.appendTo("div#results ul");
                });
            })
            // fail chạy nếu có lỗi, trước always()
            .fail(function (xhr, status, error) {
                alert("failed loading data - status=" + status + " error=" + error);
                if (!isFallback) {
                    fallbackStarted = true;
                    consume(localUrl, true);   // thử lại bằng dữ liệu dự phòng
                }
            })
            // always luôn chạy sau cùng, dù thành công hay thất bại
            .always(function (data) {
                if (!fallbackStarted) {
                    $('.animLoading').fadeOut("slow");
                }
            });
    }

    $("#consume").click(function () {
        consume(url, false);
    });
});
