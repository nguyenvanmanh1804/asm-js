/* Xây dựng hàm sinh id tự động, output là chuỗi id duy nhất */
function taoId() {
    var id = '';
    /* Lấy milisecond ở thời điểm hiện tại; 1s = 1000mls */
    id = Math.random().toString().substr(2,10) +"_"+(new Date().getTime());
    return id;

}