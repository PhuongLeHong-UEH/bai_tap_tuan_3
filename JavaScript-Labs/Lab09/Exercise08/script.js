/* Exercise 9.8 - Form validation: kiểm tra các ô nhập không được để trống */

/* responsible for setting up event listeners on page */
function init() {
    document.getElementById("sampleForm").addEventListener("submit", checkForEmptyFields);
}

/* initialize handlers once page is ready */
window.addEventListener("load", init);

/* ensures form fields are not empty */
function checkForEmptyFields(e) {
    // Bước 3: ẩn vùng thông báo lỗi từ lần kiểm tra trước
    var errorArea = document.getElementById("errors");
    errorArea.className = "hidden";

    var cssSelector = "input[type=text],input[type=password]";
    var fields = document.querySelectorAll(cssSelector);

    // loop thru the input elements looking for empty values
    var fieldList = [];
    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value == null || fields[i].value == "") {
            // since a field is empty prevent the form submission
            e.preventDefault();
            fieldList.push(fields[i]);
        }
    }

    // now set up the error message
    var msg = "The following fields can't be empty: ";
    if (fieldList.length > 0) {
        for (var j = 0; j < fieldList.length; j++) {
            msg += fieldList[j].id + ",";
        }
        // hiển thị trong thẻ div thay vì alert(msg) ở bước 1
        errorArea.innerHTML = "<p>" + msg + "</p>";
        errorArea.className = "visible";
    }
}
