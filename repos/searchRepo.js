var db = require('../fn/db');
var config = require('../config/config');

exports.loadAll = (offset, price, brand, type) => {
  var sql = `select * from xe x `;
  switch (price) {
    case "below500m":
      sql += `where x.Gia < 500000000`;
      break;
    case "from500mTo1b":
      sql += `where x.Gia >= 500000000 and x.Gia <= 1000000000`;
      break;
    case "from1bTo2b":
      sql += `where x.Gia >= 1000000000 and x.Gia <= 2000000000`;
      break;
    case "above2b":
      sql += `where x.Gia > 2000000000`
      break;
    case "default":
      break;
  }



  if(price == "default")
  {
      if(brand != "default")
      {
        sql = sql.substr(0, sql.indexOf("x ") + 1) + ', hangxe h' + sql.substr(sql.indexOf("x ") + 1);
        sql += `where x.HangXe = h.MaHangXe and h.TenHangXe = "${brand}"`;
      }
  }
  else
  {
    if(brand != "default")
    {
      sql = sql.substr(0, sql.indexOf("x ") + 1) + ', hangxe h' + sql.substr(sql.indexOf("x ") + 1);
      sql += ` and x.HangXe = h.MaHangXe and h.TenHangXe = "${brand}"`;
    }
  }



  if(price == "default")
  {
    if(brand == "default")
    {
      if(type != "default")
      {
        sql = sql.substr(0, sql.indexOf("x ") + 1) + ', dongxe d' + sql.substr(sql.indexOf("x ") + 1);
        sql += `where x.DongXe = d.MaDongXe and d.TenDongXe = "${type}"`;
      }
    }
    else
    {
      if(type != "default")
      {
        sql = sql.substr(0, sql.indexOf("h ") + 1) + ', dongxe d' + sql.substr(sql.indexOf("h ") + 1);
        sql += `and x.DongXe = d.MaDongXe and d.TenDongXe = "${type}"`;
      }
    }
  }
  else
  {
    if(brand == "default")
    {
      if(type != "default")
      {
        sql = sql.substr(0, sql.indexOf("x ") + 1) + ', dongxe d' + sql.substr(sql.indexOf("x ") + 1);
        sql += ` and x.DongXe = d.MaDongXe and d.TenDongXe = "${type}"`;
      }
    }
    else
    {
      if(type != "default")
      {
        sql = sql.substr(0, sql.indexOf("h ") + 1) + ', dongxe d' + sql.substr(sql.indexOf("h ") + 1);
        sql += `and x.DongXe = d.MaDongXe and d.TenDongXe = "${type}"`;
      }
    }
  }

  var end = ` limit ${config.PRODUCTS_PER_SEARCHPAGE} offset ${offset}`;
  sql += end;
  return db.load(sql);
}

exports.countAll = (price, brand, type) => {
  var sql = `select count(*) as total from xe x `;
  switch (price) {
    case "below500m":
      sql += `where x.Gia < 500000000`;
      break;
    case "from500mTo1b":
      sql += `where x.Gia >= 500000000 and x.Gia <= 1000000000`;
      break;
    case "from1bTo2b":
      sql += `where x.Gia >= 1000000000 and x.Gia <= 2000000000`;
      break;
    case "above2b":
      sql += `where x.Gia > 2000000000`
      break;
    case "default":
      break;
  }



  if(price == "default")
  {
      if(brand != "default")
      {
        sql = sql.substr(0, sql.indexOf("x ") + 1) + ', hangxe h' + sql.substr(sql.indexOf("x ") + 1);
        sql += `where x.HangXe = h.MaHangXe and h.TenHangXe = "${brand}"`;
      }
  }
  else
  {
    if(brand != "default")
    {
      sql = sql.substr(0, sql.indexOf("x ") + 1) + ', hangxe h' + sql.substr(sql.indexOf("x ") + 1);
      sql += ` and x.HangXe = h.MaHangXe and h.TenHangXe = "${brand}"`;
    }
  }



  if(price == "default")
  {
    if(brand == "default")
    {
      if(type != "default")
      {
        sql = sql.substr(0, sql.indexOf("x ") + 1) + ', dongxe d' + sql.substr(sql.indexOf("x ") + 1);
        sql += `where x.DongXe = d.MaDongXe and d.TenDongXe = "${type}"`;
      }
    }
    else
    {
      if(type != "default")
      {
        sql = sql.substr(0, sql.indexOf("h ") + 1) + ', dongxe d' + sql.substr(sql.indexOf("h ") + 1);
        sql += `and x.DongXe = d.MaDongXe and d.TenDongXe = "${type}"`;
      }
    }
  }
  else
  {
    if(brand == "default")
    {
      if(type != "default")
      {
        sql = sql.substr(0, sql.indexOf("x ") + 1) + ', dongxe d' + sql.substr(sql.indexOf("x ") + 1);
        sql += ` and x.DongXe = d.MaDongXe and d.TenDongXe = "${type}"`;
      }
    }
    else
    {
      if(type != "default")
      {
        sql = sql.substr(0, sql.indexOf("h ") + 1) + ', dongxe d' + sql.substr(sql.indexOf("h ") + 1);
        sql += `and x.DongXe = d.MaDongXe and d.TenDongXe = "${type}"`;
      }
    }
  }
  return db.load(sql);
}

// ---------------------------------------------------------------
exports.loadKeyword = (name, offset, price, brand, type) => {
  // var sql = `select * from xe x where TenXe like "%${name}%" limit ${config.PRODUCTS_PER_SEARCHPAGE} offset ${offset}`;
  var sql = `select * from xe x `;
  switch (price) {
    case "below500m":
      sql += `where x.Gia < 500000000`;
      break;
    case "from500mTo1b":
      sql += `where x.Gia >= 500000000 and x.Gia <= 1000000000`;
      break;
    case "from1bTo2b":
      sql += `where x.Gia >= 1000000000 and x.Gia <= 2000000000`;
      break;
    case "above2b":
      sql += `where x.Gia > 2000000000`
      break;
    case "default":
      break;
  }



  if(price == "default")
  {
      if(brand != "default")
      {
        sql = sql.substr(0, sql.indexOf("x ") + 1) + ', hangxe h' + sql.substr(sql.indexOf("x ") + 1);
        sql += `where x.HangXe = h.MaHangXe and h.TenHangXe = "${brand}"`;
      }
  }
  else
  {
    if(brand != "default")
    {
      sql = sql.substr(0, sql.indexOf("x ") + 1) + ', hangxe h' + sql.substr(sql.indexOf("x ") + 1);
      sql += ` and x.HangXe = h.MaHangXe and h.TenHangXe = "${brand}"`;
    }
  }



  if(price == "default")
  {
    if(brand == "default")
    {
      if(type != "default")
      {
        sql = sql.substr(0, sql.indexOf("x ") + 1) + ', dongxe d' + sql.substr(sql.indexOf("x ") + 1);
        sql += `where x.DongXe = d.MaDongXe and d.TenDongXe = "${type}"`;
      }
    }
    else
    {
      if(type != "default")
      {
        sql = sql.substr(0, sql.indexOf("h ") + 1) + ', dongxe d' + sql.substr(sql.indexOf("h ") + 1);
        sql += `and x.DongXe = d.MaDongXe and d.TenDongXe = "${type}"`;
      }
    }
  }
  else
  {
    if(brand == "default")
    {
      if(type != "default")
      {
        sql = sql.substr(0, sql.indexOf("x ") + 1) + ', dongxe d' + sql.substr(sql.indexOf("x ") + 1);
        sql += ` and x.DongXe = d.MaDongXe and d.TenDongXe = "${type}"`;
      }
    }
    else
    {
      if(type != "default")
      {
        sql = sql.substr(0, sql.indexOf("h ") + 1) + ', dongxe d' + sql.substr(sql.indexOf("h ") + 1);
        sql += `and x.DongXe = d.MaDongXe and d.TenDongXe = "${type}"`;
      }
    }
  }

  var end = ` x.TenXe like "%${name}%" limit ${config.PRODUCTS_PER_SEARCHPAGE} offset ${offset}`;
  if(price == "default" && brand == "default" && type == "default")
    sql += " where ";
  else
    sql += " and ";
  sql += end;
  return db.load(sql);
}

exports.countKeyword = (name, price, brand, type) => {
  var sql = `select count(*) as total from xe x `;
  switch (price) {
    case "below500m":
      sql += `where x.Gia < 500000000`;
      break;
    case "from500mTo1b":
      sql += `where x.Gia >= 500000000 and x.Gia <= 1000000000`;
      break;
    case "from1bTo2b":
      sql += `where x.Gia >= 1000000000 and x.Gia <= 2000000000`;
      break;
    case "above2b":
      sql += `where x.Gia > 2000000000`
      break;
    case "default":
      break;
  }



  if(price == "default")
  {
      if(brand != "default")
      {
        sql = sql.substr(0, sql.indexOf("x ") + 1) + ', hangxe h' + sql.substr(sql.indexOf("x ") + 1);
        sql += `where x.HangXe = h.MaHangXe and h.TenHangXe = "${brand}"`;
      }
  }
  else
  {
    if(brand != "default")
    {
      sql = sql.substr(0, sql.indexOf("x ") + 1) + ', hangxe h' + sql.substr(sql.indexOf("x ") + 1);
      sql += ` and x.HangXe = h.MaHangXe and h.TenHangXe = "${brand}"`;
    }
  }



  if(price == "default")
  {
    if(brand == "default")
    {
      if(type != "default")
      {
        sql = sql.substr(0, sql.indexOf("x ") + 1) + ', dongxe d' + sql.substr(sql.indexOf("x ") + 1);
        sql += `where x.DongXe = d.MaDongXe and d.TenDongXe = "${type}"`;
      }
    }
    else
    {
      if(type != "default")
      {
        sql = sql.substr(0, sql.indexOf("h ") + 1) + ', dongxe d' + sql.substr(sql.indexOf("h ") + 1);
        sql += `and x.DongXe = d.MaDongXe and d.TenDongXe = "${type}"`;
      }
    }
  }
  else
  {
    if(brand == "default")
    {
      if(type != "default")
      {
        sql = sql.substr(0, sql.indexOf("x ") + 1) + ', dongxe d' + sql.substr(sql.indexOf("x ") + 1);
        sql += ` and x.DongXe = d.MaDongXe and d.TenDongXe = "${type}"`;
      }
    }
    else
    {
      if(type != "default")
      {
        sql = sql.substr(0, sql.indexOf("h ") + 1) + ', dongxe d' + sql.substr(sql.indexOf("h ") + 1);
        sql += `and x.DongXe = d.MaDongXe and d.TenDongXe = "${type}"`;
      }
    }
  }

  if(price == "default" && brand == "default" && type == "default")
    sql += " where ";
  else
    sql += " and ";
  sql += ` x.TenXe like "%${name}%"`;

  return db.load(sql);
}
