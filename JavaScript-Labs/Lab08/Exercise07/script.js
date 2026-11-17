/* Exercise 8.7 - Arrays: tạo mảng, push/unshift, duyệt mảng bằng vòng lặp và in lịch tháng */

// Bước 2: tạo mảng các ngày trong tuần
var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
// document.write(daysOfWeek + "<br>");

// Bước 3: thêm Saturday vào cuối mảng bằng push()
daysOfWeek.push("Sat");
// document.write(daysOfWeek + "<br/>");

// Bước 4: thêm Sunday vào đầu mảng bằng unshift()
daysOfWeek.unshift("Sun");
// Bước 5: đã comment các lệnh document.write(daysOfWeek) vì dùng vòng lặp bên dưới tốt hơn

// Bước 6-7: duyệt mảng để tạo dòng tiêu đề; tên ngày dài hơn 3 ký tự (Tues, Thur) được in nghiêng
document.write("<table border=1>");
document.write("<tr>");
for (var i = 0; i < daysOfWeek.length; i++) {
    var day;
    if (daysOfWeek[i].length < 4)
        day = daysOfWeek[i];
    else
        day = "<em>" + daysOfWeek[i] + "</em>";
    document.write("<th>" + day + "</th>");
}
document.write("</tr>");

// Bước 8: in các ngày từ 1 đến 30, giả sử tháng bắt đầu từ Chủ nhật
var totalDays = 30;
var dayNumber = 1;
while (dayNumber <= totalDays) {
    document.write("<tr>");
    for (var col = 0; col < daysOfWeek.length; col++) {
        if (dayNumber <= totalDays) {
            document.write("<td>" + dayNumber + "</td>");
        } else {
            document.write("<td></td>");   // ô trống ở cuối tháng
        }
        dayNumber++;
    }
    document.write("</tr>");
}
document.write("</table>");
