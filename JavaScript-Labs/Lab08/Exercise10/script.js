/* Exercise 8.10 - Creating JavaScript objects
   Bài lab thay đổi dần cách tạo đối tượng "order". Để xem được kết quả của TẤT CẢ các cách,
   mỗi cách được viết trong một hàm riêng và in ra trang theo thứ tự. */

// In thông tin một order (dùng chung cho các cách 1-4)
function printOrder(o) {
    document.write("<br>Product=" + o.product);
    document.write("<br>Price=" + o.price);
    document.write("<br>Quantity=" + o.quantity);
    document.write("<br>Total=" + o.total());
}

// Cách 1 (bước 1-3): new Object() rồi gán từng thuộc tính
function way1() {
    document.write("<h3>Cách 1: new Object()</h3>");
    var order = new Object();
    order.product = "Self Portrait in a Straw Hat";
    order.price = 15.0;
    order.quantity = 2;
    order.total = function () { return this.price * this.quantity; };
    printOrder(order);
    // Bước 3: nếu viết order.total (không có dấu ngoặc) thì nhận về nội dung hàm chứ không chạy hàm
    document.write("<br>Total (thiếu dấu ngoặc)=" + order.total);
}

// Cách 2 (bước 4): khởi tạo đối tượng rỗng bằng {}
function way2() {
    document.write("<h3>Cách 2: {}</h3>");
    var order = {};
    order.product = "Self Portrait in a Straw Hat";
    order.price = 15.0;
    order.quantity = 2;
    order.total = function () { return this.price * this.quantity; };
    printOrder(order);
}

// Cách 3 (bước 5): dùng bracket notation
function way3() {
    document.write("<h3>Cách 3: bracket notation order[\"...\"]</h3>");
    var order = {};
    order["product"] = "Self Portrait in a Straw Hat";
    order["price"] = 15.0;
    order["quantity"] = 2;
    order["total"] = function () { return this.price * this.quantity; };
    printOrder(order);
}

// Cách 4 (bước 6): object literal notation
function way4() {
    document.write("<h3>Cách 4: object literal</h3>");
    var order = {
        product: "Self Portrait in a Straw Hat",
        price: 15.0,
        quantity: 2,
        total: function () { return this.price * this.quantity; }
    };
    printOrder(order);
}

// Cách 5 (bước 7-11): constructor function, tạo được nhiều đối tượng cùng kiểu
function way5() {
    document.write("<h3>Cách 5: constructor function + method output()</h3>");

    function order(product, price, quantity) {
        this.product = product;
        this.price = price;
        this.quantity = quantity;
        this.total = function () { return this.price * this.quantity; };

        // Bước 10: đưa phần in ra vào trong đối tượng
        this.output = function () {
            document.write("<p>Product=" + this.product);
            document.write("<br>Price=" + this.price);
            document.write("<br>Quantity=" + this.quantity);
            document.write("<br>Total=" + this.total());
        };
    }

    // Bước 8 và 11: tạo hai đối tượng và gọi output()
    var example1 = new order("Self Portrait in a Straw Hat", 15, 2);
    var example2 = new order("Untitled #23", 10, 4);

    example1.output();
    example2.output();
}

way1();
way2();
way3();
way4();
way5();
