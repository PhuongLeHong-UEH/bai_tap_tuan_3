/* Exercise 10.3 - Advanced selectors (bộ chọn nâng cao) */

// Bước 2: chọn tất cả ô mật khẩu và đổi nền thành màu vàng.
// Bước 3: đã comment lại theo yêu cầu của bài lab.
// $(':password').css('background-color', 'yellow');

// Bước 4: chọn mỗi phần tử con thứ 4 (4n) trong form và đổi nền thành màu vàng
$('form :nth-child(4n)').css('background-color', 'yellow');

// Bước 5: chọn các thẻ <label> có chứa chữ "word" và đổi màu chữ thành đen
$('label:contains("word")').css("color", "black");
