var db = require('../fn/db');
var config = require('../config/config');

exports.loadAllCar = offset => {
    var sql = `select * from xe x, dongxe d, hangxe h where x.DongXe = d.MaDongXe and x.HangXe = h.MaHangXe ORDER BY MaXe ASC limit ${config.PRODUCTS_PER_PAGE_ADMIN} offset ${offset}`;
    return db.load(sql);
}

exports.loadAllCarNoOffset = () => {
    var sql = `select * from xe`;
    return db.load(sql);
}

exports.countCar = () => {
    var sql = `select count(*) as total from xe`;
    return db.load(sql);
}

exports.delete = (ma) => {
    var sql = `delete from xe where MaXe = "${ma}"`;
    return db.save(sql);
}

exports.single = (ma) => {
    return new Promise((resolve, reject) => {
        var sql = `select * from xe x, dongxe d, hangxe h where x.DongXe = d.MaDongXe and x.HangXe = h.MaHangXe and MaXe = "${ma}"`;
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

exports.update = (object) => {
    var sql = `update xe set TenXe = "${object.TenXe}" where MaXe = "${object.MaXe}"`;
    return db.save(sql);
}

exports.add = user(object) => {
    var sql = `insert into xe(MaXe, TenXe, HangXe, DongXe, Gia, XuatXu, MoTa, NhienLieu, HopSo, MauSac, SoCua, SoCho, SoLuotXem, SoLuongBan, NgayNhan, SoLuongTon) values('${user.username}', '${user.password}', '${user.name}', '${user.email}', '${user.dob}', ${user.permission})`;
    return db.save(sql);
}