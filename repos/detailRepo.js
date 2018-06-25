var db = require('../fn/db');

exports.loadItem = (id) => {
    var sql = 'select * from xe where MaXe = ' + id;
    return db.load(sql);
}
