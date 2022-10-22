document.getElementById("btnTinhDiem").onclick = function () {
    //Tính điểm khối A
    //input: DiemToan diemLy diemHoa
    //Lưu ý: Dữ liệu người dùng nhập vào mặc định là chuối dù là nhập số.
    var diemToan = document.getElementById("diemToan").value*1;
    var diemLy = document.getElementById("diemLy").value*1;
    var diemHoa = document.getElementById("diemHoa").value*1;

    // output: number
    var diemTBKA = tinhDiemTB(diemToan,diemLy,diemHoa);
    //Hiển thị ra giao diện
    document.getElementById("diemTBKA").value = diemTBKA;

    //Tính điểm trung bình khối C
    var diemVan = document.getElementById('diemVan').value*1;
    var diemSu = document.getElementById('diemSu').value*1;
    var diemDia = document.getElementById('diemDia').value*1;

    //var diemTrungBinhKhoiC
    var diemTBKC = tinhDiemTB(diemVan,diemSu,diemDia);  
    document.getElementById('diemTBKC').value = diemTBKC;
    
}

function tinhDiemTB (diem1,diem2,diem3) {
    var dtb = 0;
    dtb = (diem1 + diem2 + diem3)/3;

    //output: diemTrungBinh
    return dtb;
    //Sau lệnh return chương trình sẽ dừng
}



//Bài tập 1: Xây dựng chức năng zoomin zoomout cho button bên dưới

document.getElementById('btnZoomInHome').onclick= function () {
    
    // var tagId = domID('home');

    // var fontSize = Number(tagId.style.fontSize.replace('px',''));

    // tagId.style.fontSize = (fontSize +5) + 'px';
    zoomFontSize(5,'home');

}

document.getElementById('btnZoomOutHome').onclick = function () {

    //Input: fontSize
    // var fontSize = document.getElementById('home').style.fontSize;

    // var fSize = Number(fontSize.replace('px',''));
    // fSize -= 5;
    
    // document.getElementById('home').style.fontSize = fSize + 'px';
    zoomFontSize(-5,'home');

}

document.getElementById('btnZoomInText').onclick = function() {
    
    zoomFontSize(2,'txtContent');
}
document.getElementById('btnZoomOutText').onclick = function() {
    
    zoomFontSize(-2,'txtContent');
}


function zoomFontSize(size, id) {
     
    var tag = domID(id);
    var fontSize = Number(tag.style.fontSize.replace('px',''));
    fontSize += size;

    tag.style.fontSize = fontSize + 'px'
}
//Viết trả về 1 thẻ sau khi Dom

function domID(id) {
    return document.getElementById(id);
    //Sau lệnh return chương trình sẽ dừng
}