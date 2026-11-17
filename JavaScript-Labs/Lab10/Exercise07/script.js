/* Exercise 10.7 - More jQuery animation: popup xem trước ảnh lớn khi rê chuột */
$(function () {

    // Bước 2: khi chuột đi vào ảnh nhỏ thì tạo khung xem trước
    $('figure img').on('mouseover', function (e) {

        // tạo đường dẫn ảnh lớn từ ảnh nhỏ (thay "small" bằng "medium")
        var alt = $(this).attr('alt');
        var src = $(this).attr('src');
        var newsrc = src.replace("small", "medium");

        // tạo phần tử mới gồm ảnh lớn và chú thích
        var preview = $('<div id="preview"></div>');
        var image = $('<img src="' + newsrc + '">');
        var caption = $('<p>' + alt + '</p>');
        preview.append(image);
        preview.append(caption);
        $('body').append(preview);

        // chuyển ảnh nhỏ sang màu xám
        $(this).addClass("gray");

        // hiện khung xem trước dần dần
        $("#preview").fadeIn(1000);
    });

    // Bước 3: hai hàm xóa và di chuyển khung xem trước
    function removePreview() {
        // xóa khung xem trước và bỏ class gray
        $(this).removeClass("gray");
        $("#preview").remove();
    }

    function movePreview(e) {
        // đặt vị trí khung xem trước theo toạ độ chuột
        $("#preview")
            .css("top", (e.pageY - 10) + "px")
            .css("left", (e.pageX + 30) + "px");
    }

    // Bước 4: gắn hai hàm trên vào sự kiện mouseleave và mousemove
    $("figure img").on("mouseleave", removePreview);
    $("figure img").on("mousemove", movePreview);
});
