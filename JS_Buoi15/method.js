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