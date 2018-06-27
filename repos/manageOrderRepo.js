var db = require('../fn/db');
var config = require('../config/config');

exports.loadAllOrder = offset => {
    var sql = `select * from hoadon hd, users us, tinhtrang tr where hd.KhachHang = us.Username and tr.MaTinhTrang = hd.TinhTrang ORDER BY hd.NgayDat ASC, hd.KhachHang ASC limit ${config.PRODUCTS_PER_PAGE_ADMIN} offset ${offset}`;
    return db.load(sql);
}

exports.loadAllOrderNoOffset = () => {
    var sql = `select * from hoadon`;
    return db.load(sql);
}

exports.countOrder = () => {
    var sql = `select count(*) as total from hoadon`;
    return db.load(sql);
}

exports.loadAllViewOneOrderNoOffset = () => {
    var sql = `select * from chitiethoadon`;
    return db.load(sql);
}

exports.loadAllViewOneOrder = (kh, ngay, offset) => {
    var sql = `select * from chitiethoadon ct, xe x, users us where ct.KhachHang = "${kh}" and ct.NgayDat = "${ngay}" and ct.MaXe = x.MaXe and ct.KhachHang = us.Username ORDER BY ct.MaXe ASC limit ${config.PRODUCTS_PER_PAGE_ADMIN} offset ${offset}`;
    return db.load(sql);
}

exports.countViewOneOrder = (kh, ngay) => {
    var sql = `select count(*) as total from chitiethoadon where KhachHang = "${kh}" and NgayDat = "${ngay}"`;
    return db.load(sql);
}

exports.loadAllStatus = () => {
    var sql = `select * from tinhtrang`;
    return db.load(sql);
}

exports.update = (object) => {
    var sql = `update hoadon set TinhTrang = ${object.TinhTrang} where KhachHang = "${object.KhachHang}" and NgayDat = "${object.NgayDat}"`;
    return db.save(sql);
}

exports.single = (kh, ngay) => {
    return new Promise((resolve, reject) => {
        var sql = `select * from hoadon hd, tinhtrang tr where hd.TinhTrang = tr.MaTinhTrang and KhachHang = "${kh}" and NgayDat = "${ngay}"`;
        db.load(sql).then(rows => {
            if (rows.length === 0) {
                resolve(null);
            } else {
                resolve(rows[0]);
            }
        }).catch(err => {
            reject(err);
        });
    });
}