function taoDoiTuongSanPham(hinhAnh, ten, giaGoc, phanTramGiamGia, khuVuc, id) {
    var sanPham = new Object();
    /* Bước 1: Gắn các thuộc tính cho đối tượng */
    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    sanPham.phanTramGiamGia = phanTramGiamGia;
    sanPham.khuVuc = khuVuc;

    if (id = null) {
        sanPham.id = id;
    } else {
        sanPham.id = taoId();
    }
    

    /* Bước 2: viết phương thức cho đối tượng */
    sanPham.tinhGiaBan = function () {
        // Logic xử lý của phương thức 
        var giaBan = this.giaGoc * (100 - this.phanTramGiamGia) / 100;
        return giaBan;

    }

    sanPham.toJson = function () {
        var json = JSON.stringify(this);
        return json;
    }

    /* Từ json chuyển thành 1 đối tượng đầy đủ các phương thức
       input: json
       output: doiTuongDayDu
     */
    sanPham.fromJSON = function () {
        var doiTuongDayDu = new Object();
        /* Chuyển từ josn thành đối tượng */
        var doiTuong = JSON.parse(json);

        /* Bước 2: Chuyển đối tượng thành đối tượng đầy đủ phương thức */
        var doiTuongDayDu = taoDoiTuongSanPham(doiTuong.hinhAnh, doiTuong.ten, doiTuong.giaGoc, doiTuong.phanTramGiamGia, doiTuong.khuVuc);

        return doiTuongDayDu;
    }
    /* Từ json của danh sách sản phẩm trả về một danh sách sản phẩm có đầy đủ các phương thức
        Input: json của danh sách sản phẩm
        output: danh sách sản phẩm đầy đủ */
    sanPham.fromJSONs = function (jsonDanhSachSanPham) {

        var danhSachSanPhamDayDu = new Array();
        var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
        for (var i = 0; i < danhSachSanPham.length; i++) {
            var sanPham = danhSachSanPham[i];
            var sanPhamDayDu = taoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc);
            danhSachSanPhamDayDu[i] = sanPhamDayDu;
        }
        return danhSachSanPhamDayDu;

    }

    return sanPham;
}
/* Mô tả: là chuyển một danh sách đối tượ   ng, thành 1 đoạn html để hiển thị được danh sách sản phẩm ra màn hình
   Input: danh sách sản phẩm
   Output: html hiển thị danh sách sản phẩm  */
function chuyenDanhSachDoiTuongSanPhamThanhHTML(danhSachSanPham) {
    var HTMLDachSachSanPham = '<div class="items">';
    for (var i = 0; i < danhSachSanPham.length; i++) {
        var sanPham = danhSachSanPham[i];
        var htmlSanPham = ChuyenDoiTuongSanPhamThanhHTML(sanPham);
        HTMLDachSachSanPham = HTMLDachSachSanPham + htmlSanPham;
    }
    HTMLDachSachSanPham = HTMLDachSachSanPham + '</div>';
    return HTMLDachSachSanPham;
}

/* Chuyển 1 đối tượng thành 1 đoạn html  */

function ChuyenDoiTuongSanPhamThanhHTML(sanPham) {
    var saveID = sanPham.id;
    sanPham = taoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc, sanPham.id);
    sanPham.id = saveID;
    console.log(sanPham);
    var html = '';
    html += '<div class="item">'
    html += '<div class="item-hinhanh">'
    html += '<img src="' + sanPham.hinhAnh + '" alt="" srcset="">'
    html += '</div>'
    html += '<h2 class="item-ten">' + sanPham.ten + '</h2>'
    html += '<div class="item-gia">'
    html += '<span class="item-gia-goc">' + sanPham.giaGoc + 'đ</span>'
    html += '<span class="item-gia-ban">' + sanPham.tinhGiaBan() + 'đ</span>'
    html += '</div>'
    html += '<button onclick= "onClickDuaVaoGioHang(\'' + sanPham.id + '\')" class="btn btn-primary">Đưa vào giỏ hàng</button>'
    html += '</div>'

    return html;

}

function laySanPhamTheoId(idSanPham) {
    var sanPham = new Object();
    var danhSachSanPham = layDanhSachSanPhamDuoiLocalStorage();
    console.log(danhSachSanPham);

    for (var i = 0; i < danhSachSanPham.length; i++) {
        var sanPhamHienTai = danhSachSanPham[i];
        if(sanPhamHienTai.id == idSanPham){
            sanPham = sanPhamHienTai;
        }
    }

    sanPham = taoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc, sanPham.id);


    return sanPham;

}
function layDanhSachSanPhamDuoiLocalStorage() {
    var jsonDanhSachSanPham = localStorage.getItem('danhSachSanPham');
    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
    return danhSachSanPham;
}
