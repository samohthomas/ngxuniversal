var express = require('express');
var purchaseRouter = express.Router();

var jwt = require("jsonwebtoken");
var jwtConfig = require('../config/jwtConfig');

var purchaseController = require('../controllers/purchaseController.js');

purchaseRouter.use(function(req, res, next){
    var token = req.headers.auth;
    userId = req.headers.userid;
    userName = req.headers.username;
    viewId = req.headers.viewid;

    jwt.verify(token, jwtConfig.secret, function (tokenError) {
        if (tokenError) {
            return res.status(403).json({
                message: "Invalid token, please Log in first"
            });
        }
        next();
    });
});

/*
 * GET
 */
purchaseRouter.get('/', purchaseController.list);

/*
 * GET
 */
purchaseRouter.get('/:id', purchaseController.show);

/*
 * POST
 */
purchaseRouter.post('/', purchaseController.create);

/*
 * PUT
 */
purchaseRouter.put('/:id', purchaseController.update);

/*
 * DELETE
 */
purchaseRouter.delete('/:id', purchaseController.remove);

module.exports = purchaseRouter;
