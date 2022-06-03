// Bài tập 1 
// Mô hình 3 khối
// - input: số ngày làm việc của nhân viên
// - output: tiền lương tính theo ngày
// - progress: 
//     + tạo biến a lưu số ngày việc
//     + tạo biến b lưu tiền lương
//     + b = a*100000

document.getElementById('btnTinhTienLuong').onclick = function() {
    //input
    var soNgayLamViec = document.getElementById('soNgayLamViec').value;
    // output
    var tienLuong = 0;
    //progress
    tienLuong = soNgayLamViec * 100000;
    //in ra màn hình
    document.getElementById('tinhTienLuong').innerHTML = tienLuong.toLocaleString();
}

// Bài tập 2
// Mô hình 3 khối
// - input: 5 số a, b, c, d, e nhập từ người dùng
// - output: trung bình cộng của 5 số
// - progress
//      + tạo biến a,b,c,d,e lưu lần lượt 5 số nhập từ người dùng
// + tạo biến trungBinh lưu giá trị trung bình của 5 số
// + trungBinh = (a + b + c + d + e)/5

document.getElementById('btnTinhTrungBinh').onclick = function() {
    //input
    var number1 = +document.getElementById('number1').value;
    var number2 = +document.getElementById('number2').value;
    var number3 = +document.getElementById('number3').value;
    var number4 = +document.getElementById('number4').value;
    var number5 = +document.getElementById('number5').value;
    //output
    var trungBinh = 0;
    //progress
    trungBinh = (number1 + number2 + number3 + number4 + number5) / 5;
    //in ra
    document.getElementById('tinhTrungBinh').innerHTML = trungBinh.toFixed(2);
}

// Bài tập 3
// mô hình 3 khối
// - input: số tiền USD
// - output: Số tiền đã đổi sang VND
// - progress:
//     + tạo biến a lưu số tiền USD
//     + tạo biến b lưu số tiền VND
//     + b = a * 23500;

document.getElementById('btnDoiTien').onclick = function() {
    //input
    var tienUSD = document.getElementById('tienUSD').value;
    //output
    var tienVND = 0;
    //progress
    tienVND = tienUSD * 23500;
    //in ra
    document.getElementById('quyDoi').innerHTML = tienVND.toLocaleString() + ' VND';
}

// bài tập 4 
// mô hình 3 khối
// - input: chiều dài, chiều rộng nhập từ người dùng
// - output: chu vi, diện tích được tính theo chiều dài, chiều rộng đã cho
// - Progress
//     + tạo biến a lưu chiều dài, biến b lưu chiều rộng
//     + tạo biến CV lưu chu vi, biến S lưu diện tích
//     + CV = (a + b)/2;
//     + s = a * b;

document.getElementById('btnTinhCVS').onclick = function() {
    //input
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    //output
    var chuVi = 0;
    var dienTich = 0;
    //progress
    chuVi = (chieuDai + chieuRong) / 2;
    dienTich = chieuDai * chieuRong;
    //in ra
    document.getElementById('chuVi').innerHTML = chuVi.toFixed(2);
    document.getElementById('dienTich').innerHTML = dienTich;
}

// bài tập 5
// mô hình 3 khối
// - input: số có 2 chữ số nhập từ người dùng
// - output: tổng ký số của số đó
// - progress: 
//     + tạo biến a lưu số người dùng nhập vào
//     + tạo biến Tong lưu tổng ký số
//     + tạo biến hangChuc lưu ký số ở hàng chục
//     + tạo biến hangDonVi lưu ký số hàng đơn vị
//     + int hangDonVi = a % 10;
//     + int hangChuc = a / 10;

document.getElementById('btnTinhTongKySo').onclick = function() {
    //input 
    var number = document.getElementById('number').value;
    //output
    var tongKySo = 0;
    // progress
    var hangDonVi = number % 10;
    var hangChuc = Math.floor(number / 10);
    tongKySo = hangChuc + hangDonVi;
    // in ra
    document.getElementById('tongKySo').innerHTML = tongKySo;
}