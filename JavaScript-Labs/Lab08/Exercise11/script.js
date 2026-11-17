/* Exercise 8.11 - Arrays of objects */

// define constructor function for Country objects
function Country(name, iso, capital, population) {
    this.name = name;
    this.iso = iso;
    this.capital = capital;
    this.population = population;
}

// create an array of country objects
var countries = [
    new Country("Bahamas", "BS", "Nassau", 301790),
    new Country("Canada", "CA", "Ottawa", 33679000),
    new Country("Germany", "DE", "Berlin", 81802257)
];

// you can also push each new country object onto the end of the array
countries.push(new Country("Spain", "ES", "Madrid", 46505963));
countries.push(new Country("United Kingdom", "GB", "London", 62348447));

/* Các bước 1-4: duyệt mảng và in tên quốc gia ra Console (mở F12 -> Console để xem) */
var i, c;

// Bước 1: duyệt mảng bằng chỉ số
for (i = 0; i < countries.length; i++) {
    console.log("Bước 1: " + countries[i].name);
}

// Bước 2: dùng biến tạm c cho dễ đọc
for (i = 0; i < countries.length; i++) {
    c = countries[i];
    console.log("Bước 2: " + c.name);
}

// Bước 3: truy cập thuộc tính bằng bracket notation
for (i = 0; i < countries.length; i++) {
    c = countries[i];
    console.log("Bước 3: " + c["name"]);
}

// Bước 4: tên thuộc tính lưu trong biến
var temp = "name";
for (i = 0; i < countries.length; i++) {
    c = countries[i];
    console.log("Bước 4: " + c[temp]);
}

// Bước 5: dùng for..in để duyệt qua tất cả thuộc tính của đối tượng, in ra trang kèm cờ quốc gia
for (i = 0; i < countries.length; i++) {
    c = countries[i];
    document.write("<div class='box'>");
    document.write("<img src='../flags/" + c.iso + ".png' class='boxImg'>");
    for (var propertyName in c) {
        document.write("<strong>");
        document.write(propertyName + ": ");
        document.write("</strong>");
        document.write(c[propertyName]);
        document.write("<br>");
    }
    document.write("</div>");
}
