/* main.js - JavaScript cho trang chủ index.html
   Dùng chính các kỹ thuật đã học ở Lab 09: chọn phần tử DOM, xử lý sự kiện, thêm/bớt class. */
(function () {
    "use strict";

    // Trình duyệt chạy được JavaScript -> bỏ class no-js để hiệu ứng "reveal" hoạt động
    document.documentElement.classList.remove("no-js");

    // ----- 1. Menu thu gọn trên điện thoại -----
    var toggle = document.getElementById("navToggle");
    var links = document.getElementById("navLinks");
    if (toggle && links) {
        toggle.addEventListener("click", function () {
            var open = links.classList.toggle("open");
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
        });
        links.addEventListener("click", function (e) {
            if (e.target.tagName === "A") {            // chọn xong một mục thì đóng menu
                links.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    // ----- 2. Các tab "Kiến thức đã học" -----
    var tabButtons = document.querySelectorAll(".tab-btn");
    var tabPanels = document.querySelectorAll(".tab-panel");

    function showTab(id) {
        for (var i = 0; i < tabButtons.length; i++) {
            var active = tabButtons[i].getAttribute("data-tab") === id;
            tabButtons[i].setAttribute("aria-selected", active ? "true" : "false");
        }
        for (var j = 0; j < tabPanels.length; j++) {
            tabPanels[j].classList.toggle("active", tabPanels[j].id === id);
        }
    }
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].addEventListener("click", function () {
            showTab(this.getAttribute("data-tab"));
        });
    }

    // ----- 3. Số liệu thống kê đếm tăng dần -----
    function countUp(el) {
        var target = parseInt(el.getAttribute("data-count"), 10);
        var current = 0;
        var step = Math.max(1, Math.round(target / 30));
        var timer = setInterval(function () {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            el.textContent = current;
        }, 40);
    }

    // ----- 4. Hiện dần các khối khi cuộn tới + đếm số -----
    var reveals = document.querySelectorAll(".reveal");
    var counters = document.querySelectorAll("[data-count]");
    var started = false;

    function onScreen(el) {
        var r = el.getBoundingClientRect();
        return r.top < window.innerHeight - 40 && r.bottom > 0;
    }
    function checkScroll() {
        for (var i = 0; i < reveals.length; i++) {
            if (onScreen(reveals[i])) { reveals[i].classList.add("in"); }
        }
        if (!started && counters.length && onScreen(counters[0])) {
            started = true;
            for (var j = 0; j < counters.length; j++) { countUp(counters[j]); }
        }
        if (backTop) { backTop.classList.toggle("show", window.pageYOffset > 400); }
    }

    // ----- 5. Nút quay lại đầu trang -----
    var backTop = document.getElementById("toTop");
    if (backTop) {
        backTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    window.addEventListener("scroll", checkScroll);
    window.addEventListener("load", checkScroll);
    checkScroll();

    // ----- 6. Năm hiện tại ở chân trang -----
    var year = document.getElementById("year");
    if (year) { year.textContent = new Date().getFullYear(); }
})();
