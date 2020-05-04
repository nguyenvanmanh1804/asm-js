var keyLocalStorageItemGioHang = 'danhSachItemGioHang';
/* Yêu cầu: tạo ra đối tượng item giỏ hàng 
   input: idSanPham, soLuong
   output: đối tượng item giỏ hàng */
function taoDoiTuongItemGioHang(idSanPham, soLuong) {
    var itemGioHang = new Object();
    itemGioHang.idSanPham = idSanPham;
    itemGioHang.soLuong = soLuong;
    return itemGioHang;
}


/* Lấy ra toàn bộ các item giỏ hàng được lưu trữ trong local storage
   input: 
   output: lấy danh sách toàn bộ item giỏ hàng lưu trữ trong local storage */
function layDanhSachItemGioHang() {
    var danhSachItemGioHang = new Array();

    /* B1: Lấy chuỗi json lưu trữ trong local storage */
    var jsonDanhSachItemGioHang = localStorage.getItem(keyLocalStorageItemGioHang);

    /* B2: Chuyển từ json qua danh sách item giỏ hàng */
    if (jsonDanhSachItemGioHang != null)
        danhSachItemGioHang = JSON.parse(jsonDanhSachItemGioHang);

    return danhSachItemGioHang;

}
/* Lưu trữ danh sách item giỏ hàng
   input: Danh sách item giỏ hàng
   output: ???
 */
function luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang) {
    /* B1: Chuyển thành chuỗi json */
    var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);


    /* B2: Lưu vào local storage */
    localStorage.setItem(keyLocalStorageItemGioHang, jsonDanhSachItemGioHang);

}
console.log(layDanhSachItemGioHang());