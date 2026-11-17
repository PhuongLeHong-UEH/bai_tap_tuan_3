/* Exercise 10.2 - Basic selectors (bộ chọn cơ bản của jQuery) */

// Bước 2: chọn theo id, val() đặt giá trị cho textarea
var msg = $('#msgArea');
msg.val("here is some new text");

// Bước 3: html() lấy/đặt nội dung HTML của phần tử.
// (Giáo trình dùng $('#first') nhưng #first chứa cả h1 lẫn textarea nên sẽ xóa hết nội dung của hàng này;
//  ở đây dùng $('#pageTitle') để chỉ đổi tiêu đề.)
$('#pageTitle').html("new Title");

// Bước 4: attr() lấy/đặt thuộc tính HTML
$('#msgArea').val("My class is " + $('#msgArea').attr("class"));

// Bước 5: chọn tất cả thẻ button; jQuery tự áp dụng cho cả tập hợp, không cần vòng lặp
var buttons = $('button');
buttons.css('background-color', 'red');

// Bước 6: chọn thẻ body (tập hợp chỉ có 1 phần tử) vẫn dùng css() như bình thường
var temp = $('body');
temp.css("background-color", "ivory");

// Bước 7: chọn theo class và thêm class "selected" (nền vàng, định nghĩa trong lab10.css)
$('.center-icons').addClass('selected');
