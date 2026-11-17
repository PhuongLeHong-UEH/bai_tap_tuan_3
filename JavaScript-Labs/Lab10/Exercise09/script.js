/* Exercise 10.9 - GET requests: lấy dữ liệu JSON từ web service bằng $.get() */
$(function () {
    // Web service của giáo trình (bước 3). Dùng https vì GitHub Pages chạy trên https.
    var url = "https://www.randyconnolly.com/funwebdev/services/travel/cities.php";
    // Bản sao dữ liệu nằm trong repository, chỉ dùng khi web service bên ngoài không truy cập được.
    var localUrl = "../data/cities.json";

    // Bước 5: dùng $.each() duyệt dữ liệu, mỗi thành phố là một thẻ <li> trong <ul>
    // (Bước 3-4 là cách duyệt bằng vòng for, cộng chuỗi list += data[i].name + "<br>"
    //  và kiểm tra status == "success" - cách làm của bước 5 gọn hơn.)
    function showCities(data) {
        if (!$.isArray(data)) {
            return false;      // dữ liệu nhận về không đúng định dạng danh sách
        }
        $("#results").html("<ul></ul>");
        $.each(data, function (index, value) {
            var li = $('<li/>').html(value.name);
            li.appendTo("div#results ul");
        });
        return true;
    }

    // Dùng dữ liệu dự phòng khi web service chính bị lỗi
    function useLocalData() {
        $.get(localUrl, function (data, status) {
            if (showCities(data)) {
                $("#results").prepend('<p class="note">Không truy cập được web service gốc, đang hiển thị dữ liệu dự phòng (data/cities.json).</p>');
            }
        });
    }

    $("#consume").click(function () {
        $("#results").html("<ul></ul>");
        $.get(url, function (data, status) {
            if (status == "success" && !showCities(data)) {
                useLocalData();
            }
        }).fail(useLocalData);
    });
});
