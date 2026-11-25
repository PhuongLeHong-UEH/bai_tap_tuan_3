'use strict';
// Dữ liệu mock: ngày được tính tương đối so với hôm nay để trang "Hôm nay" luôn có việc.
const CATEGORIES = [
  ['Học tập', '#6366f1'], ['Công việc', '#0ea5e9'], ['Cá nhân', '#f59e0b'],
  ['Sức khỏe', '#10b981'], ['Mua sắm', '#ec4899'],
];
// [tiêu đề, mô tả, danh mục, ưu tiên, trạng thái, lệch ngày hạn, giờ hoàn thành (nếu done)]
const TASKS = [
  ['Làm báo cáo CSS nâng cao', 'Chụp ảnh code và kết quả cho Lab 07', 'Học tập', 'high', 'doing', 0],
  ['Ôn bài Phát triển ứng dụng TMĐT', 'Xem lại JavaScript và ASP.NET Core', 'Học tập', 'high', 'todo', 0],
  ['Nộp bài tập nhóm Chiến lược kinh doanh', 'Kiểm tra file cuối trước khi gửi', 'Học tập', 'high', 'todo', 0],
  ['Họp nhóm 20h tối', 'Chốt phần phân công slide', 'Công việc', 'medium', 'todo', 0],
  ['Trả lời email giảng viên', '', 'Công việc', 'low', 'done', 0],
  ['Tập thể dục 30 phút', 'Chạy bộ hoặc đạp xe', 'Sức khỏe', 'medium', 'done', 0],
  ['Uống đủ 2 lít nước', '', 'Sức khỏe', 'low', 'todo', 0],
  ['Mua sổ tay và bút highlight', 'Hiệu sách gần trường', 'Mua sắm', 'low', 'todo', 0],
  ['Gọi điện về nhà', '', 'Cá nhân', 'medium', 'todo', 0],
  ['Nộp bài tập ASP.NET Core', 'Đã làm xong, chờ nộp', 'Học tập', 'high', 'todo', -1],
  ['Dọn dẹp bàn học', '', 'Cá nhân', 'low', 'todo', -2],
  ['Đọc tài liệu Bootstrap', 'Grid và navbar', 'Học tập', 'medium', 'todo', 1],
  ['Chuẩn bị slide thuyết trình', 'Phần Mở đầu và Khái niệm', 'Công việc', 'high', 'doing', 1],
  ['Đặt lịch khám sức khỏe', '', 'Sức khỏe', 'medium', 'todo', 2],
  ['Mua quà sinh nhật bạn', 'Ngân sách khoảng 300k', 'Mua sắm', 'medium', 'todo', 3],
  ['Viết README cho đồ án', '', 'Công việc', 'medium', 'todo', 4],
  ['Lên kế hoạch cuối tuần', '', 'Cá nhân', 'low', 'todo', 5],
  ['Làm Lab JavaScript 3 (jQuery)', '', 'Học tập', 'high', 'done', -1, 1],
  ['Chụp ảnh minh chứng Lab 07', '', 'Học tập', 'medium', 'done', -1, 1],
  ['Ôn tập giữa kỳ', '', 'Học tập', 'high', 'done', -2, 2],
  ['Họp nhóm tuần trước', '', 'Công việc', 'medium', 'done', -2, 2],
  ['Chạy bộ buổi sáng', '', 'Sức khỏe', 'low', 'done', -3, 3],
  ['Giặt đồ cuối tuần', '', 'Cá nhân', 'low', 'done', -3, 3],
  ['Thiết kế infographic R4K26', '', 'Công việc', 'high', 'done', -4, 4],
  ['Mua đồ dùng học tập', '', 'Mua sắm', 'low', 'done', -4, 4],
  ['Đọc chương 6 Advanced FrontEnd', '', 'Học tập', 'medium', 'done', -5, 5],
  ['Tập yoga', '', 'Sức khỏe', 'low', 'done', -5, 5],
  ['Nộp bài CSS cơ bản', '', 'Học tập', 'high', 'done', -6, 6],
  ['Sắp xếp lại thư mục tài liệu', '', 'Cá nhân', 'low', 'done', -6, 6],
  ['Làm bài tập cơ sở dữ liệu', '', 'Học tập', 'high', 'done', -7, 7],
  ['Gặp bạn cà phê', '', 'Cá nhân', 'low', 'done', -7, 7],
  ['Phân tích SWOT cho KQM', '', 'Công việc', 'high', 'done', -8, 8],
];

function ymd(offset) {
  const d = new Date(); d.setDate(d.getDate() + offset);
  const p = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function seed(db) {
  const insCat = db.prepare('INSERT INTO categories (name, color) VALUES (?, ?)');
  const insTask = db.prepare(`INSERT INTO tasks
    (title, description, category_id, priority, status, due_date, created_at, updated_at, completed_at)
    VALUES (@title, @description, @category_id, @priority, @status, @due, @created, @created, @completed)`);
  db.transaction(() => {
    const ids = {};
    for (const [n, c] of CATEGORIES) ids[n] = insCat.run(n, c).lastInsertRowid;
    TASKS.forEach(([title, description, cat, priority, status, off, ago], i) => {
      const done = status === 'done';
      const doneDay = ymd(done ? -(ago ?? 0) : 0);
      insTask.run({
        title, description, category_id: ids[cat], priority, status, due: ymd(off),
        created: `${ymd(Math.min(off, 0) - 2)} 08:${String(10 + i).padStart(2, '0')}:00`,
        completed: done ? `${doneDay} ${String(9 + (i % 9)).padStart(2, '0')}:30:00` : null,
      });
    });
  })();
}
module.exports = { seed, ymd };
