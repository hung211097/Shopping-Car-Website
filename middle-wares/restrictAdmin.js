module.exports = (req, res, next) => {
    if (req.session.isAdminLogged === true) {
        next();
    } else {
        res.redirect(`/loginAdmin?retUrl=${req.originalUrl}`);
    }
}
