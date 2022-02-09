const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController")

router.get("/Detalle", productController.detailMethod)
router.get("/Carrito", productController.cartMethod)
router.get("/Stock", productController.stockMethod);

module.exports=router