# JavaScript-Labs

Bài tập cá nhân môn Phát triển ứng dụng Thương mại điện tử (giảng viên: Nguyễn Mạnh Tuấn).

- **Sinh viên:** Lê Hồng Phương
- **Ngành / Trường:** E-Commerce, UEH
- **MSSV:** 31241024012
- **Lớp học phần:** 26C1INF50902701
- **GitHub Repository:** https://github.com/PhuongLeHong-UEH/bai_tap_tuan_3
- **GitHub Pages:** https://phuonglehong-ueh.github.io/bai_tap_tuan_3/JavaScript-Labs/ 


## Cấu trúc thư mục

```
JavaScript-Labs/
├── index.html            Trang chủ (thông tin cá nhân, giới thiệu, kiến thức đã học, liên kết 3 Lab)
├── README.md
├── css/                  style.css (giao diện trang chủ + trang Lab), lab-nav.css (nút quay lại Lab)
├── js/main.js            JavaScript của trang chủ (menu, tab, hiệu ứng cuộn)
├── images/avatar.jpg     Ảnh đại diện
├── vendor/               Bootstrap 3.3.5 và Font Awesome 4.4.0 (đóng gói sẵn, không phụ thuộc CDN)
├── Lab08/                JavaScript 1: Language Foundations
│   ├── index.html        Danh sách 11 Exercise + bài mở rộng
│   ├── css/ js/ images/ flags/   Tài nguyên dùng chung của Lab 08
│   ├── Exercise01 ... Exercise11/   Mỗi Exercise có index.html + mã JavaScript riêng
│   └── ExtraExercise/    Bài mở rộng (giao diện bài viết du lịch)
├── Lab09/                JavaScript 2: DOM and Events
│   ├── index.html        Danh sách 8 Exercise
│   ├── css/ images/
│   └── Exercise01 ... Exercise08/
└── Lab10/                JavaScript 3: jQuery
    ├── index.html        Danh sách 10 Exercise
    ├── css/ js/jquery-3.1.1.min.js images/ data/cities.json
    └── Exercise01 ... Exercise10/
```

## Nội dung từng Lab

**Lab 08 – Language Foundations (11 Exercise + 1 mở rộng):** nhúng script (trực tiếp, file ngoài, noscript), Console, đối tượng String/Date/Math, mảng, hàm, phạm vi biến, hàm ẩn danh, 5 cách tạo đối tượng, mảng các đối tượng và `for...in`.

**Lab 09 – DOM and Events (8 Exercise):** chọn phần tử, duyệt `childNodes`, `createElement`/`removeChild`, `addEventListener` (click, mouseover, mouseout, load, focus, blur, submit), `preventDefault`, kiểm tra Form.

**Lab 10 – jQuery (10 Exercise):** nạp jQuery 3.1.1 (CDN + bản dự phòng), selectors, sự kiện, chèn phần tử DOM, hiệu ứng fade/slide/animate, `$.get()`, jqXHR (`done`/`fail`/`always`).

## Cách chạy

- Mở `index.html` ở thư mục gốc bằng trình duyệt, hoặc dùng **Live Server** của VS Code.
- Exercise 10.9 và 10.10 dùng AJAX nên phải chạy qua server (GitHub Pages hoặc Live Server), không mở bằng `file://`.

## Ghi chú kỹ thuật

- Tất cả đường dẫn là đường dẫn tương đối nên chạy được trên GitHub Pages.
- jQuery được nạp từ CDN (https); nếu CDN lỗi, trang tự dùng `Lab10/js/jquery-3.1.1.min.js`.
- Exercise 10.9/10.10 gọi web service của giáo trình; nếu không truy cập được sẽ dùng dữ liệu dự phòng `Lab10/data/cities.json` (dữ liệu tự tạo, cùng định dạng).
- Bootstrap và Font Awesome được lưu trong `vendor/` để không phụ thuộc mạng.
