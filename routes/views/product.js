const keystone = require('keystone');

exports = module.exports = function (req, res) {
    const view = new keystone.View(req, res);
    const locals = res.locals;

    //Set locals (used as key in middleware.js)
    locals.section = 'store';
    locals.filter = {
        product: req.params.product
    }
    locals.data = {
        products: []
    }

    //Load products
    view.on('init', function(next){
        var q = keystone.list('Product').model.findOne({
            slug: locals.filter.product
        })

        q.exec(function(err, result){
            locals.data.product = result;
            next(err);
        })
    })

    //render view
    view.render('product');
}