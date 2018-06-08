var db = require('../fn/db');

exports.loadShipFee = () => {
    var sql = 'select * from phivanchuyen';
    return db.load(sql);
}
