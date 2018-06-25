var db = require('../fn/db');
var config = require('../config/config');

exports.loadAllManufacturer = offset => {
    var sql = `select * from hangxe ORDER BY MaHangXe ASC limit ${config.PRODUCTS_PER_PAGE_ADMIN} offset ${offset}`;
    return db.load(sql);
}

exports.loadAllManufacturerNoOffset = () => {
    var sql = `select * from hangxe`;
    return db.load(sql);
}

exports.countManufacturer = () => {
    var sql = `select count(*) as total from hangxe`;
    return db.load(sql);
}

exports.delete = (ma) => {
    var sql = `delete from hangxe where MaHangXe = "${ma}"`;
    return db.save(sql);
}

exports.single = (ma) => {
    return new Promise((resolve, reject) => {
        var sql = `select * from hangxe where MaHangXe = "${ma}"`;
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
    var sql = `update hangxe set TenHangXe = "${object.TenHangXe}" where MaHangXe = "${object.MaHangXe}"`;
    return db.save(sql);
}