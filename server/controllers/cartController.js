var cartModel = require('../models/cartModel.js');

/**
 * cartController.js
 *
 * @description :: Server-side logic for managing carts.
 */
module.exports = {

    /**
     * cartController.list()
     */
    list: function (req, res) {
        cartModel.find(function (err, carts) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting cart.',
                    error: err
                });
            }
            return res.json(carts);
        });
    },

    /**
     * cartController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        cartModel.findOne({_id: id}, function (err, cart) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting cart.',
                    error: err
                });
            }
            if (!cart) {
                return res.status(404).json({
                    message: 'No such cart'
                });
            }
            return res.json(cart);
        });
    },

    /**
     * cartController.create()
     */
    create: function (req, res) {
        var cart = new cartModel({
			active : req.body.active,
			products : req.body.products

        });

        cart.save(function (err, cart) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating cart',
                    error: err
                });
            }
            return res.status(201).json(cart);
        });
    },

    /**
     * cartController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        cartModel.findOne({_id: id}, function (err, cart) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting cart',
                    error: err
                });
            }
            if (!cart) {
                return res.status(404).json({
                    message: 'No such cart'
                });
            }

            cart.active = req.body.active ? req.body.active : cart.active;
			cart.products = req.body.products ? req.body.products : cart.products;
			
            cart.save(function (err, cart) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating cart.',
                        error: err
                    });
                }

                return res.json(cart);
            });
        });
    },

    /**
     * cartController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        cartModel.findByIdAndRemove(id, function (err, cart) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the cart.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
