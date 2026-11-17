/* Exercise 10.5 - Inserting DOM elements
   Mỗi phương thức ở các bước 2-8 của bài lab được viết thành một hàm trong đối tượng "inserters",
   và gắn vào một nút bấm trên trang để có thể thử lần lượt từng cách. */
$(function () {
    var panel = $('.panel');

    // tạo phần tử DOM mới (mỗi lần tạo một ảnh mới)
    function newImage() {
        return $('<img class="inserted" src="../images/art/thumbs/13030.jpg" >');
    }

    var inserters = {
        // Bước 2: chèn ngay sau panel
        after:        function () { var img = newImage(); panel.after(img); },
        // Bước 3: chèn ngay trước panel
        before:       function () { var img = newImage(); panel.before(img); },
        // Bước 4: chèn vào cuối bên trong panel
        append:       function () { var img = newImage(); panel.append(img); },
        // Bước 5: chèn vào đầu bên trong panel
        prepend:      function () { var img = newImage(); panel.prepend(img); },
        // Bước 6: giống append nhưng viết theo chiều ngược lại (img.appendTo(panel))
        appendTo:     function () { var img = newImage(); img.appendTo(panel); },
        // Bước 7: giống prepend (img.prependTo(panel))
        prependTo:    function () { var img = newImage(); img.prependTo(panel); },
        // Bước 8: giống before (img.insertBefore(panel))
        insertBefore: function () { var img = newImage(); img.insertBefore(panel); }
    };

    $('#controls button').on('click', function () {
        var name = $(this).data('method');
        $('img.inserted').remove();          // xóa ảnh đã chèn ở lần thử trước
        inserters[name]();
        $('#info').text("Đang dùng: " + name + "()");
    });

    // Khi tải trang chạy bước 2
    inserters.after();
    $('#info').text("Đang dùng: after()");
});
