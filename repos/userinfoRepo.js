var db = require('../fn/db');

exports.updateName = user => {
    var sql = `update users set Name = '${user.Name}' where Username = '${user.Username}'`;
    return db.save(sql);
}


