var db = require('../fn/db');

exports.loadShipFee = () => {
    var sql = 'select * from phivanchuyen';
    return db.load(sql);
}

exports.addHoaDon = hoadon => {
    var sql = `insert into hoadon(KhachHang, NgayDat, TongTien, SDT, GhiChu, DiaChi, SoLuongXe) values('${hoadon.KhachHang}', '${hoadon.NgayDat}', '${hoadon.TongTien}', '${hoadon.SDT}', '${hoadon.GhiChu}', '${hoadon.DiaChi}', '${hoadon.SoLuongXe}')`;
    return db.save(sql);
}

exports.addCtHoaDon = hoadon => {
    var sql = `insert into chitiethoadon(KhachHang, NgayDat, MaXe, SoLuong) values('${hoadon.KhachHang}', '${hoadon.NgayDat}', '${hoadon.MaXe}','${hoadon.SoLuong}')`;
    return db.save(sql);
}

exports.decreaseCar = xe => {
    var sql = `update xe set SoLuongTon = SoLuongTon - '${xe.SoLuong}' where MaXe = '${xe.MaXe}'`;
    return db.save(sql);
}