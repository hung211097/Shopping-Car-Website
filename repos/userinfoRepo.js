var db = require('../fn/db');

exports.updateName = user => {
    var sql = `update users set Name = '${user.Name}' where Username = '${user.Username}'`;
    return db.save(sql);
}

exports.updatePass = user => {
    var sql = `update users set Password = '${user.Password}' where Username = '${user.Username}'`;
    return db.save(sql);
}

exports.updateEmail = user => {
    var sql = `update users set Email = '${user.Email}' where Username = '${user.Username}'`;
    return db.save(sql);
}

exports.selectHoaDon = user => {
    var sql = `select * from hoadon, tinhtrang where hoadon.KhachHang = '${user}' and hoadon.TinhTrang = tinhtrang.MaTinhTrang ORDER BY NgayDat DESC`;
    return db.save(sql);
}

exports.countHoaDon = user => {
    var sql = `select count(*) as total from hoadon where KhachHang = '${user}'`;
    return db.load(sql);
}

exports.selectDetail = user => {
    var sql = `select * from chitiethoadon, xe where KhachHang = '${user.KhachHang}' and NgayDat = '${user.NgayDat}' and chitiethoadon.MaXe = xe.MaXe`;
    return db.load(sql);
}

exports.countDetail = user => {
    var sql = `select count(*) as total from chitiethoadon, xe where KhachHang = '${user.KhachHang}' and NgayDat = '${user.NgayDat}' and chitiethoadon.MaXe = xe.MaXe`;
    return db.load(sql);
}

exports.selectCar = user => {
    var sql = `select * from xe where MaXe = '${user}'`;
    return db.load(sql);
}