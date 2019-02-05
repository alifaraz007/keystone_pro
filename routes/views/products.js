const keystone = require('keystone');

exports = module.exports = function (req, res) {
    const view = new keystone.View(req, res);
    const locals = res.locals;

    //Set locals (used as key in middleware.js)
    locals.section = 'store';

    //Load products
    view.query('products', keystone.list('Product').model.find());

    //render view
    view.render('products');
}