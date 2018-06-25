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
