var db = require('../fn/db');
var config = require('../config/config');

exports.loadAllCar = offset => {
    var sql = `select * from xe x, dongxe d, hangxe h where x.DongXe = d.MaDongXe and x.HangXe = h.MaHangXe ORDER BY MaXe ASC limit ${config.PRODUCTS_PER_PAGE_ADMIN} offset ${offset}`;
    return db.load(sql);
}

exports.countCar = () => {
    var sql = `select count(*) as total from xe`;
    return db.load(sql);
}

exports.loadAllKindOfCar = () => {
    var sql = 'select * from dongxe';
    return db.load(sql);
}

exports.loadAllManufacturer = () => {
    var sql = 'select * from hangxe';
    return db.load(sql);
}

