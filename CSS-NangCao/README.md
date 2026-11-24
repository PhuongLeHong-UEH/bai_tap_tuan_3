# Lab 07 – Advanced CSS Layout | Lê Hồng Phương

## Thông tin sinh viên
| Mục | Thông tin |
|---|---|
| Họ và tên | **Lê Hồng Phương** |
| Mã số sinh viên | **31241024012** |
| Mã lớp học phần | **26C1INF50902701** |
| Giảng viên | **TS. Nguyễn Mạnh Tuấn** |
| Repository | https://github.com/PhuongLeHong-UEH/bai_tap_tuan_3 |
| GitHub Pages (dự kiến khi bật Pages từ main/root) | https://phuonglehong-ueh.github.io/bai_tap_tuan_3/CSS-NangCao/ |

## Mục tiêu
Thực hành các kỹ thuật bố cục và hiệu ứng CSS nâng cao, hiểu cách làm trang web hiển thị tốt trên nhiều kích thước màn hình.

## Giới thiệu
Đây là bộ **19 nội dung thực hành CSS nâng cao (Lab 07)** gồm document flow, relative/absolute positioning, z-index, float/clear, layout nhiều cột, media queries, viewport, transforms, transitions, filters, animation và Bootstrap.

Giao diện trang chủ sáng, dễ đọc, có ảnh đại diện và thông tin cá nhân; mỗi bài có trang riêng với phần minh họa trực tiếp.

## Cấu trúc
```text
CSS-NangCao/
├── index.html            (trang chủ: thông tin cá nhân, giới thiệu, 5 nhóm bài, đã học, tự đánh giá)
├── README.md
├── images/avatar.jpg
├── assets/
│   ├── style.css
│   └── exercise.css
└── Lab07/
    ├── index.html (danh sách 19 bài)
    ├── Exercise01/ ... Exercise12/
    ├── Exercise13/README.md (7.13 thực hiện trong Exercise12)
    ├── Exercise14/ ... Exercise19/
    ├── bootstrap/ (CSS và JavaScript dùng offline)
    └── images/ (tài nguyên SVG)
```

## Các bài thực hành
- [Exercise 7.1 – Document Flow](Lab07/Exercise01/index.html)
- [Exercise 7.2 – Relative Positioning](Lab07/Exercise02/index.html)
- [Exercise 7.3 – Absolute Positioning](Lab07/Exercise03/index.html)
- [Exercise 7.4 – Stacking Using Z-Index](Lab07/Exercise04/index.html)
- [Exercise 7.5 – Floating Elements](Lab07/Exercise05/index.html)
- [Exercise 7.6 – Floating in a Container](Lab07/Exercise06/index.html)
- [Exercise 7.7 – Floating Multiple Items](Lab07/Exercise07/index.html)
- [Exercise 7.8 – Floating and Clearing](Lab07/Exercise08/index.html)
- [Exercise 7.9 – Using Positioning](Lab07/Exercise09/index.html)
- [Exercise 7.10 – Two-Column Layout](Lab07/Exercise10/index.html)
- [Exercise 7.11 – Three-Column Layout](Lab07/Exercise11/index.html)
- [Exercise 7.12 – Media Queries](Lab07/Exercise12/index.html)
- [Exercise 7.13 – Setting the Viewport](Lab07/Exercise12/index.html#viewport-demo)
- [Exercise 7.14 – Transforms](Lab07/Exercise14/index.html)
- [Exercise 7.15 – Transitions](Lab07/Exercise15/index.html)
- [Exercise 7.16 – More Transitions](Lab07/Exercise16/index.html)
- [Exercise 7.17 – Filters](Lab07/Exercise17/index.html)
- [Exercise 7.18 – Animations](Lab07/Exercise18/index.html)
- [Exercise 7.19 – Using Bootstrap](Lab07/Exercise19/index.html)

## Cách xem
1. Mở `CSS-NangCao/index.html` bằng Live Server trong VS Code hoặc trình duyệt.
2. Chọn một trong 5 nhóm bài (7.1–7.4, 7.5–7.9, 7.10–7.13, 7.14–7.18, 7.19) hoặc mở `Lab07/index.html` để xem toàn bộ danh sách.
3. Trên GitHub Pages, đường dẫn của bộ bài là `https://phuonglehong-ueh.github.io/bai_tap_tuan_3/CSS-NangCao/` **nếu** repository được triển khai từ main và thư mục gốc.
4. Kiểm tra desktop/mobile với Exercise 7.12 và 7.13, tương tác hover với 7.14–7.16 và xem Bootstrap trong 7.19.

## Báo cáo minh chứng
Báo cáo Word cần có **ảnh chụp thực tế** của code và kết quả trình duyệt cho mỗi Exercise, chú thích theo thứ tự `Hình 1. ...`, `Hình 2. ...`. Không dùng ảnh giả lập hoặc ảnh tự động render làm bằng chứng nộp chính thức.

## Ghi chú triển khai
Thêm thư mục `CSS-NangCao` vào **gốc repo cũ**, không xóa các thư mục khác. Bật GitHub Pages (Settings → Pages → main / root) rồi truy cập link ở bảng thông tin. Mọi đường dẫn là tương đối nên chạy được trên GitHub Pages.
