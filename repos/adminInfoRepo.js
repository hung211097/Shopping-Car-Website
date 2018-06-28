var db = require('../fn/db');

exports.updateName = user => {
    var sql = `update admin set Name = '${user.Name}' where Username = '${user.Username}'`;
    return db.save(sql);
}

exports.updatePass = user => {
    var sql = `update admin set Password = '${user.Password}' where Username = '${user.Username}'`;
    return db.save(sql);
}

exports.updateEmail = user => {
    var sql = `update admin set Email = '${user.Email}' where Username = '${user.Username}'`;
    return db.save(sql);
}

