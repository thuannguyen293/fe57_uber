function tinhDongia(loaiXe){
    var dongia = [];
    var dongia1, dongia2, dongia3, dongiaTg;
    if (loaiXe == 'uberX') {
        dongia1 = 8000;
        dongia2 = 12000;
        dongia3 = 10000;
        dongiaTg = 2000;
    } else if (loaiXe == 'uberSUV'){
        dongia1 = 9000;
        dongia2 = 14000;
        dongia3 = 12000;
        dongiaTg = 3000;
    } else if (loaiXe == 'uberBlack'){
        dongia1 = 1000;
        dongia2 = 16000;
        dongia3 = 14000;
        dongiaTg = 4000;
    }
    dongia.push(dongia1, dongia2, dongia3, dongiaTg);
    return dongia;
}
function tinhtien(dongia, km, thoiGian){
    if(km <= 20){
        thanhtien = dongia[0] + (km - 1)*dongia[1];
    }else{
        thanhtien = dongia[0] + (km - 1)*dongia[1] + (km - 20)*dongia[2];
    }
    thanhtien = thanhtien + thoiGian*dongia[3];
    return thanhtien;
}
$('.btn-tinhtien').on('click', function(){
    var loaiXe = $("input[name='loaixe']:checked").val();
    var km = $("input[name='km']").val();
    var thoiGian = $("input[name='thoigian']").val();
    var thanhtien, dongia;
    if (!loaiXe || !km || !thoiGian || km <= 0 || thoiGian <= 0) {
        alert("Vui lòng nhập thông tin chính xác");
    }else{
        dongia = tinhDongia(loaiXe);
        thanhtien = tinhtien(dongia, km, thoiGian);
        $('#xuatTien').text(thanhtien);
        $('#divThanhTien').show();
    }
});

$('.btn-inhoadon').on('click', function(){
    var loaiXe = $("input[name='loaixe']:checked").val();
    var km = $("input[name='km']").val();
    var thoiGian = $("input[name='thoigian']").val();
    var thanhtien, dongia, html;
    if (!loaiXe || !km || !thoiGian || km <= 0 || thoiGian <= 0) {
        alert("Vui lòng nhập thông tin chính xác");
    }else{
        dongia = tinhDongia(loaiXe);
        thanhtien = tinhtien(dongia, km, thoiGian);
        html = '<tr>';
        html += '<td>' + loaiXe + '</td>';
        html += '<td>1 km</td>';
        html += '<td>' + dongia[0] + '</td>';
        html += '<td>' + 8000 + '</td>';
        html += '</tr>';
        if (km > 1 && km <= 20 ) {
            html += '<tr>';
            html += '<td>' + loaiXe + '</td>';
            html += '<td>' + (km-1) + ' km</td>';
            html += '<td>' + dongia[1] + '</td>';
            html += '<td>' + (km-1)*dongia[1] + '</td>';
            html += '</tr>';
        }
        if (km > 20) {
            html += '<tr>';
            html += '   <td>' + loaiXe + '</td>';
            html += '   <td>' + (km-20) + ' km</td>';
            html += '   <td>' + dongia[2] + '</td>';
            html += '   <td>' + (km-20)*dongia[2] + '</td>';
            html += '</tr>';
        }
        html += '<tr>';
        html += '   <td>Thời gian chờ</td>';
        html += '   <td>' + thoiGian + ' phút</td>';
        html += '   <td>' + dongia[3] + '</td>';
        html += '   <td>' + thoiGian*dongia[3] + '</td>';
        html += '</tr>';
        html += '<tr class="table-success">';
        html += '   <td>Tổng cộng</td>';
        html += '   <td></td>';
        html += '   <td></td>';
        html += '   <td>' + thanhtien + '</td>';
        html += '</tr>';
    }
    $('.table tbody').html(html);
})