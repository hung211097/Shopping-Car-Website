var express = require('express');
var exphbs = require('express-handlebars');
var express_handlebars_sections = require('express-handlebars-sections');
var bodyParser = require('body-parser');
var path = require('path');
var wnumb = require('wnumb');

var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

var handle404MDW = require('./middle-wares/handle404');
var handleLayoutMDW = require('./middle-wares/handleLayout');
var restrict = require('./middle-wares/restrict');

var homeController = require('./controllers/homeController');
var productsController = require('./controllers/productsController');
var searchController = require('./controllers/searchController');
var cartController = require('./controllers/cartController');
var checkoutController = require('./controllers/checkoutController');
var accountController = require('./controllers/accountController');
var userinfoController = require('./controllers/userinfoController');

var app = express();

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: 'views/_layouts/',
    helpers: {
        section: express_handlebars_sections(),
        number_format: price => {
          var str = "" + price;
          var dot = 0;
          for (var i = str.length - 1; i >= 0; i--) {
            dot++;
            if (dot == 3 && i != 0) {
              str = str.substr(0, i) + '.' + str.substr(i);
              dot = 0;
            }
          }
          str += '₫';
          return str;
        }
    }
}));
app.set('view engine', 'hbs');

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


//session
var sessionStore = new MySQLStore({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'carshopping',
    createDatabaseTable: true,
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
});

app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

app.use(handleLayoutMDW);

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.use('/home', homeController);
app.use('/account', accountController);
app.use('/products', productsController);
app.use('/search', searchController);
app.use('/cart', cartController);
app.use('/checkout', checkoutController);
app.use('/UserInfo', userinfoController);



app.use(handle404MDW);

app.listen(3000, () => {
    console.log('Site running on port 3000');
});
