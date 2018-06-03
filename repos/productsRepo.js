var db = require('../fn/db');
var config = require('../config/config');

exports.loadAll = (offset) => {
    var sql = `select * from xe limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}

exports.loadAllPriceAsc = (offset) => {
    var sql = `select * from xe order by Gia ASC limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}

exports.loadAllPriceDesc = (offset) => {
    var sql = `select * from xe order by Gia DESC limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}

exports.loadAllAZ = (offset) => {
    var sql = `select * from xe order by TenXe ASC limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}

exports.loadAllZA = (offset) => {
    var sql = `select * from xe order by TenXe DESC limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}
// -----------------------------------------------------------
exports.loadNSX = (nsx, offset) => {
    var sql = `select * from xe x, hangxe h where x.HangXe = h.MaHangXe and h.TenHangXe = "${nsx}" limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}

exports.loadNSXAZ = (nsx, offset) => {
    var sql = `select * from xe x, hangxe h where x.HangXe = h.MaHangXe and h.TenHangXe = "${nsx}" order by x.TenXe ASC limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}

exports.loadNSXZA = (nsx, offset) => {
    var sql = `select * from xe x, hangxe h where x.HangXe = h.MaHangXe and h.TenHangXe = "${nsx}" order by x.TenXe DESC limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}

exports.loadNSXPriceAsc = (nsx, offset) => {
    var sql = `select * from xe x, hangxe h where x.HangXe = h.MaHangXe and h.TenHangXe = "${nsx}" order by x.Gia ASC limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}

exports.loadNSXPriceDesc = (nsx, offset) => {
    var sql = `select * from xe x, hangxe h where x.HangXe = h.MaHangXe and h.TenHangXe = "${nsx}" order by x.GIA DESC limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}
// ------------------------------------------------------------------
exports.loadType = (type, offset) => {
    var sql = `select * from xe x, dongxe d where x.DongXe = d.MaDongXe and d.TenDongXe = "${type}" limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}

exports.loadTypeAZ = (type, offset) => {
    var sql = `select * from xe x, dongxe d where x.DongXe = d.MaDongXe and d.TenDongXe = "${type}" order by x.TenXe ASC limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}

exports.loadTypeZA = (type, offset) => {
    var sql = `select * from xe x, dongxe d where x.DongXe = d.MaDongXe and d.TenDongXe = "${type}" order by x.TenXe DESC limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}

exports.loadTypePriceAsc = (type, offset) => {
    var sql = `select * from xe x, dongxe d where x.DongXe = d.MaDongXe and d.TenDongXe = "${type}" order by x.Gia ASC limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}

exports.loadTypePriceDesc = (type, offset) => {
    var sql = `select * from xe x, dongxe d where x.DongXe = d.MaDongXe and d.TenDongXe = "${type}" order by x.Gia DESC limit ${config.PRODUCTS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}
// -------------------------------------------------------------
exports.countAll = () => {
	var sql = `select count(*) as total from xe`;
    return db.load(sql);
}

exports.countByNSX = NSXxe => {
	var sql = `select count(*) as total from xe x, hangxe h where x.HangXe = h.MaHangXe and h.TenHangXe = "${NSXxe}"`;
    return db.load(sql);
}

exports.countByType = Type => {
	var sql = `select count(*) as total from xe x, dongxe d where x.DongXe = d.MaDongXe and d.TenDongXe = "${Type}"`;
    return db.load(sql);
}
