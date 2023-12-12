// Lấy tham chiếu đến button và cả document
const scrollBtn = document.getElementById('btn');
const doc = document.documentElement;
let arr = [
    {
        id: 1,
        image:''
    }
]

// Xác định hàm để kiểm tra khi cuộn trang


// Thêm sự kiện cho button để cuộn lên đầu khi click
scrollBtn.addEventListener('click', function() {
  doc.scrollTo({
    top: 0,
    behavior: 'smooth' // Cuộn mượt
  });
});

// Thêm sự kiện cho window để kiểm tra khi cuộn trang và hiển thị/ẩn button
window.addEventListener('scroll', function checkScroll() {
    // Nếu vị trí cuộn lớn hơn hoặc bằng chiều cao của toàn bộ document trừ đi chiều cao của cửa sổ trình duyệt
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
      scrollBtn.style.display = 'block'  // Hiển thị button khi ở cuối trang
    } else {
        scrollBtn.style.display = 'none'  // Hiển thị button khi ở cuối trang
        // Ẩn button khi không ở cuối trang
      console.log('aaaaaa')
    }
  });