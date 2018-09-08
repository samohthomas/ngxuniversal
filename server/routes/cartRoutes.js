var express = require('express');
var cartRouter = express.Router();
var cartController = require('../controllers/cartController.js');

/*
 * GET
 */
cartRouter.get('/', cartController.list);

/*
 * GET
 */
cartRouter.get('/:id', cartController.show);

/*
 * POST
 */
cartRouter.post('/', cartController.create);

/*
 * PUT
 */
cartRouter.put('/:id', cartController.update);

/*
 * DELETE
 */
cartRouter.delete('/:id', cartController.remove);

module.exports = cartRouter;
