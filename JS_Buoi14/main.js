//Bài tập 1: Nhạp vào điểm trung bình. Nếu lớn hơn hoặc = 5 thì in ra là đậu ngược lại bé hơn 5 in ra rớt.
document.getElementById("btnXepLoai").onclick = function(){
    //input:number
    var diemTB = document.getElementById("diemTrungBinh").value;
    
    // Output: string 
    var ketQua = "";

    //Progress
    if(Number(diemTB)>=5) {
        ketQua = "Đậu";
    } else {
        ketQua = "Rớt";
    }

    //Đầu ra
    document.getElementById("ketQuaBai1").innerHTML = "Kết quả là: " + ketQua;

}

//Bài tập 2: Cho người dùng nhập vào 2 số. Tìm số lớn nhất và in ra kết quả.
document.getElementById("btnTimSoLonNhat").onclick = function (){
    //input: number, string or boolean
    var soThu1 = Number(document.getElementById("soThu1").value);
    var soThu2 = Number(document.getElementById("soThu2").value);

    //Xử lý
    var max = soThu1;

    if(max < soThu2) {
        max = soThu2;
    }
    // Output: string, number?
    var ketQua = max;
    document.getElementById("ketQuaBai2").innerHTML = "Số lớn nhất là: " + ketQua;

}

//Bài tập 3: Viết chương trình cho phép người dùng nhập vào số giờ làm và tiền công 1 giờ. Yêu cầu: Tính tiền
document.getElementById("btnTinhTien").onclick = function(){
// input: number ? string ?
var soGioLamTrenTuan = Number(document.getElementById("soGioLamTrenTuan").value);
var tienCongTrenGio = Number(document.getElementById("tienCongTrenGio").value);

//Output: number ??

//Xét số giờ nhập vào có lớn hơn 40 không?
if(soGioLamTrenTuan > 40){
    //Số giờ sau
    var soGioSau = soGioLamTrenTuan - 40;
    var tienTangCa = soGioSau * tienCongTrenGio * 1.5;
    tienLuong = (tienCongTrenGio * 40) + tienTangCa;
}else {
    tienLuong = soGioLamTrenTuan * 40;
}


//Đầu ra
document.getElementById("ketQuaBai3").innerHTML = "Tiền lương là: "
+ tienLuong;
}

//Bài tập 4: Viết chương trình cho phép người dùng nhập vào điểm toán lsy hóa. Yêu cầu in ra điểm trung bình và xếp loại
document.getElementById("btnTinhDTB").onclick = function(){
    //Input: Điểm toán, lý, hóa
    var diemToan = document.getElementById("diemToan").value*1;
    var diemLy = document.getElementById("diemLy").value*1;
    var diemHoa = document.getElementById("diemHoa").value*1;
    
    //Progress
    var diemTrungBinh = (Number(diemToan)+Number(diemLy)+Number(diemHoa))/3;
    var xepLoai = "";
    if(diemTrungBinh > 0 && diemHoa < 5) {
        xepLoai = "Không đạt";}
    else if (diemTrungBinh >=5 && diemTrungBinh < 8){
        xepLoai = "Đạt";
    }else if (diemTrungBinh >8 && diemTrungBinh <= 10) {
        xepLoai = "Giỏi";
    }else {
        xepLoai = "Không hợp lệ";
    }
    
    //Đầu ra
    ketQua = "Điểm trung bình: " + diemTrungBinh + " - Xếp loại " + xepLoai;
    document.getElementById("ketQuaBai4").innerHTML = ketQua;
}