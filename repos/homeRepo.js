var db = require('../fn/db');

exports.loadTopSeen = () => {
    var sql = 'select * from xe ORDER BY SoLuotXem DESC LIMIT 10';
    return db.load(sql);
}

exports.loadTopSell = () => {
    var sql = 'select * from xe ORDER BY SoLuongBan DESC LIMIT 10';
    return db.load(sql);
}

exports.loadTopNew = () => {
    var sql = 'select * from xe ORDER BY NgayNhan DESC LIMIT 10';
    return db.load(sql);
}

exports.loadTopNSX = () => {
    var sql = 'select * from hangxe limit 8';
    return db.load(sql);
}

exports.loadTopType = () => {
    var sql = 'select * from dongxe limit 8';
    return db.load(sql);
}

exports.loadAllNSX = () => {
    var sql = 'select * from hangxe';
    return db.load(sql);
}

exports.loadAllType = () => {
    var sql = 'select * from dongxe';
    return db.load(sql);
}
