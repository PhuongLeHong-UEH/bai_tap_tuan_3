/* Exercise 8.5 - Using the Browser Console

   Các bước đã thực hiện:
   - Cố ý gõ sai "document" thành "doccumment" -> trang không in chữ nào và Console báo
     "Uncaught ReferenceError: doccumment is not defined". Sau đó sửa lại đúng như bên dưới.
   - Gõ vào Console:  count  (=2),  output,  var temp = count * 7;  rồi gõ  temp  (=14)
     để kiểm tra giá trị biến đang có trong trang. */
document.write("this text was written from JS");
var count = 1;
document.write(" Count = " + count);

count++;
var output = "<br>Count = " + count;
document.write(output);
