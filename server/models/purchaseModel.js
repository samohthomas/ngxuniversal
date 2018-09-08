var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

const shippingSchema = new Schema({
	'_id' : false,
	'type' : String,
	'name' : String,
	'dispatch_date' : Date,
	'delivery_date' : Date,
	'current' : String
  });
  const productSchema = new Schema({
	'_id' : false,
	'product_id' : Object,
	'quantity' : Number,	
	'delivery_charge' : Number,
	'tax' : Number
  });

  const returnSchema = new Schema({
	'_id' : false,
	'product_id' : Object,
	'quantity' : Number,
	'return_status' : Boolean,
	'return_date' : Date,
	'amount' : Number		
  });

  const paymentSchema = new Schema({
	'_id' : false,
	'type' : String,
	'details' : String,
	'amount' : Number,
	'type_id' : Object
  });

const purchaseSchema = new Schema({
	'_id':Object,
	'active' : Boolean,
	'total' : Number,
	'products' : [productSchema],
	'user_id' : Object,
	'payment' : [paymentSchema],
	'shipping' : [shippingSchema],
	'delivery_status' : Boolean,
	'date' : Date,
	'total_tax' : Number,
	'return' : [returnSchema],
});

module.exports = mongoose.model('purchase', purchaseSchema);
