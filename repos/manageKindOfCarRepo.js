var db = require('../fn/db');
var config = require('../config/config');

exports.loadAllKindOfCar = offset => {
    var sql = `select * from dongxe ORDER BY MaDongXe ASC limit ${config.PRODUCTS_PER_PAGE_ADMIN} offset ${offset}`;
    return db.load(sql);
}

exports.loadAllKindOfCarNoOffset = () => {
    var sql = `select * from dongxe`;
    return db.load(sql);
}

exports.countKindOfCar = () => {
    var sql = `select count(*) as total from dongxe`;
    return db.load(sql);
}

exports.delete = (ma) => {
    var sql = `delete from dongxe where MaDongXe = "${ma}"`;
    return db.save(sql);
}

exports.single = (ma) => {
    return new Promise((resolve, reject) => {
        var sql = `select * from dongxe where MaDongXe = "${ma}"`;
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
    var sql = `update dongxe set TenDongXe = "${object.TenDongXe}" where MaDongXe = "${object.MaDongXe}"`;
    return db.save(sql);
}
