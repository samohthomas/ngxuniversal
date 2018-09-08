var purchaseModel = require('../models/purchaseModel.js');

/**
 * purchaseController.js
 *
 * @description :: Server-side logic for managing purchases.
 */
module.exports = {

    /**
     * purchaseController.list()
     */
    list: function (req, res) {
        purchaseModel.find(function (err, purchases) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting purchase.',
                    error: err
                });
            }
            return res.json(purchases);
        });
    },

    /**
     * purchaseController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        purchaseModel.findOne({_id: id}, function (err, purchase) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting purchase.',
                    error: err
                });
            }
            if (!purchase) {
                return res.status(404).json({
                    message: 'No such purchase'
                });
            }
            return res.json(purchase);
        });
    },

    /**
     * purchaseController.create()
     */
    create: function (req, res) {
        var purchase = new purchaseModel({
			active : req.body.active,
			total : req.body.total,
			products : req.body.products

        });

        purchase.save(function (err, purchase) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating purchase',
                    error: err
                });
            }
            return res.status(201).json(purchase);
        });
    },

    /**
     * purchaseController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        purchaseModel.findOne({_id: id}, function (err, purchase) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting purchase',
                    error: err
                });
            }
            if (!purchase) {
                return res.status(404).json({
                    message: 'No such purchase'
                });
            }

            purchase.active = req.body.active ? req.body.active : purchase.active;
			purchase.total = req.body.total ? req.body.total : purchase.total;
			purchase.products = req.body.products ? req.body.products : purchase.products;
			
            purchase.save(function (err, purchase) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating purchase.',
                        error: err
                    });
                }

                return res.json(purchase);
            });
        });
    },

    /**
     * purchaseController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        purchaseModel.findByIdAndRemove(id, function (err, purchase) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the purchase.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
