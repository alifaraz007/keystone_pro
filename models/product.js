const keystone = require('keystone');
const Types = keystone.Field.Types;

const Product = new keystone.List('Product', {
    map: { name: 'title' },
    singular: 'Product',
    plural: 'Products',
    autokey: { path: 'slug', from: 'title', unique: true }
});

Product.add({
    title: { type: String, required: true },
    price: { type: Number },
    qty: { type: Number },
    description: { type: Types.Html, wysiwyg: true, height: 300 }, //what you see is what you get
    image: { type: Types.CloudinaryImage },
    publishedDate: { type: Date, default: Date.now }
});

Product.register();