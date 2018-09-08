var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

const productSchema = new Schema({
	'_id' : false,
	'product_id' : Object,
	'quantity' : Number,	
	'delivery_charge' : Number,
	'total_price' : Number,
  });

const cartSchema = new Schema({
	'_id':Object,	
	'user_id' : Object,
	'products' : [productSchema],
	'total_price' : Number,
	'date' : Date
});

module.exports = mongoose.model('cart', cartSchema);
