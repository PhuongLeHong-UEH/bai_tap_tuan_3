/* Exercise 8.9 - Functions as objects (hàm cũng là đối tượng) */

var isCanadian = true;

/* Bước 1: các hàm ban đầu
function taxRate() {
  if (isCanadian) { return 0.05; } else { return 0.0; }
}
function calculateTax(amount) { return amount * taxRate(); }
function calculateTotal(price, quantity) {
  return (price * quantity) + calculateTax(price * quantity);
}

   Bước 3: lồng hàm taxRate() vào trong calculateTax()
   Bước 4: gán hàm vào biến:  var tax = function taxRate() { ... };  return amount * tax();
   Bước 5: dùng hàm ẩn danh (anonymous):  var tax = function () { ... };
*/

// Bước 6: truyền một hàm ẩn danh làm tham số (cách dùng rất phổ biến trong JavaScript thực tế)
function calculateTax(amount, tax) {
    return amount * tax();
}

function calculateTotal(price, quantity) {
    var amount = price * quantity;
    return amount + calculateTax(amount, function () {
        if (isCanadian) {
            return 0.05;
        } else {
            return 0.0;
        }
    });
}
