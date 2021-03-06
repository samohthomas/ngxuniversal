var express = require('express');
var productRouter = express.Router();
var productController = require('../controllers/productController.js');

/*
 * GET
 */
productRouter.get('/', productController.list);

/*
 * GET
 */
productRouter.get('/:id', productController.show);

/*
 * POST
 */
productRouter.post('/', productController.create);

/*
 * PUT
 */
productRouter.put('/:id', productController.update);

/*
 * DELETE
 */
productRouter.delete('/:id', productController.remove);

module.exports = productRouter;
