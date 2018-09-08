var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

const policySchema = new Schema({
	'_id' : false,	
	'days_before' : Number,
	'return_description' : String,
	'services' : String		
  });

  const categorySchema = new Schema({
	'_id' : false,	
	'main' : String,
	'sub' : String,			
  });

const productSchema = new Schema({
	'_id': Object,
	'name' : String,
	'description' : String,
	'price' : Number,
	'quantity' : Number,
	'avilable' : Number,
	'active' : Boolean,
	'image' : Array,
	'specification' : Object,
	'policy' : policySchema,	
	'tags' : Array,
	'category' : categorySchema,
	'modifier_id' : Object,
	'modified_on' : Date,
});

module.exports = mongoose.model('product', productSchema);
