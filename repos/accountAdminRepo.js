var db = require('../fn/db');

exports.add = user => {
    var sql = `insert into admin(Username, Password, Name, Email) values('${user.username}', '${user.password}', '${user.name}', '${user.email}')`;
    return db.save(sql);
}

exports.login = user => {
    var sql = `select * from admin where Username = '${user.username}' and Password = '${user.password}'`;
    return db.load(sql);
}

exports.exist = user => {
    var sql = `select * from admin where Username = '${user.username}'`;
    return db.load(sql);
}

