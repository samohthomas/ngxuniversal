var productModel = require('../models/productModel.js');

/**
 * productController.js
 *
 * @description :: Server-side logic for managing products.
 */
module.exports = {

    /**
     * productController.list()
     */
    list: function (req, res) {
        productModel.find(function (err, products) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting product.',
                    error: err
                });
            }
            return res.json(products);
        });
    },

    /**
     * productController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        productModel.findOne({_id: id}, function (err, product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting product.',
                    error: err
                });
            }
            if (!product) {
                return res.status(404).json({
                    message: 'No such product'
                });
            }
            return res.json(product);
        });
    },

    /**
     * productController.create()
     */
    create: function (req, res) {
        var product = new productModel({
			name : req.body.name,
			description : req.body.description,
			price : req.body.price,
			quantity : req.body.quantity,
			avilable : req.body.avilable,
			active : req.body.active,
            image : req.body.image,
            specification = req.body.specification,
            policy = req.body.policy,
            tags = req.body.tags,
            category = req.body.category,
            modifier_id = userId,
            modified_on = new Date()
        });

        product.save(function (err, product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating product',
                    error: err
                });
            }
            return res.status(201).json(product);
        });
    },

    /**
     * productController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        productModel.findOne({_id: id}, function (err, product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting product',
                    error: err
                });
            }
            if (!product) {
                return res.status(404).json({
                    message: 'No such product'
                });
            }

            product.name = req.body.name ? req.body.name : product.name;
			product.description = req.body.description ? req.body.description : product.description;
			product.price = req.body.price ? req.body.price : product.price;
			product.quantity = req.body.quantity ? req.body.quantity : product.quantity;
			product.avilable = req.body.avilable ? req.body.avilable : product.avilable;
			product.active = req.body.active ? req.body.active : product.active;
            product.image = req.body.image ? req.body.image : product.image;
            product.specification = req.body.specification ? req.body.specification : product.specification;
            product.policy = req.body.policy ? req.body.policy : product.policy;
            product.tags = req.body.tags ? req.body.tags : product.tags;
            product.category = req.body.category ? req.body.category : product.category;
            product.modifier_id = userId ? userId : product.category;
            product.modified_on = new Date();
			
            product.save(function (err, product) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating product.',
                        error: err
                    });
                }

                return res.json(product);
            });
        });
    },

    /**
     * productController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        productModel.findByIdAndRemove(id, function (err, product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the product.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
