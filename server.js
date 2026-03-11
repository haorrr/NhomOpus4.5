const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// 1. Cấu hình thư mục chứa file tĩnh (CSS, Images, JS từ template)
// Giả sử bạn giải nén template vào thư mục 'public'
app.use(express.static(path.join(__dirname, 'public')));

// 2. Route chính để hiển thị trang chủ Flower Shop
// Route trang chủ
app.get('/', (req, res) => {
    // Xác định đường dẫn đến file index.html trong thư mục 'public'
    const indexPath = path.join(__dirname, 'public', 'index.html');

    // Gửi file này về trình duyệt của người dùng
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.log("Lỗi khi tải file giao diện:", err);
            res.status(500).send("Không tìm thấy file giao diện Flower Shop!");
        }
    });
});

// 3. Khởi chạy server tại port 3000
app.listen(PORT, () => {
    console.log(`Server đang chạy tại: http://localhost:${PORT}`);
    console.log('Haorrr hãy mở trình duyệt và kiểm tra nhé!');
});