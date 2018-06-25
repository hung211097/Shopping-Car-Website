var homeRepo = require('../repos/homeRepo');

module.exports = (req, res, next) => {

  if (req.session.isLogged === undefined) {
    req.session.isLogged = false;
  }

	if (req.session.cart === undefined) {
    req.session.cart = [];
  }

  var p1 = homeRepo.loadTopNSX();
  var p2 = homeRepo.loadTopType();
  Promise.all([p1, p2]).then(([NSXRows, TypeRows]) => {
    var dem = 0;
  	for(var i = 0; i < req.session.cart.length; i++)
  		dem += req.session.cart[i].Quantity;
    res.locals.layoutVM = {
      cartCount: dem,
      isLogged: req.session.isLogged,
      curUser: req.session.user,
      topNSX: NSXRows,
      topType: TypeRows
    };
    next();
  });
};
