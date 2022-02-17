const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/Detalle", productController.detailMethod);
router.get("/carrito", productController.cartMethod);
router.get("/productos", productController.stockMethod);
<<<<<<< HEAD
router.post("/productos", productController.createProduct)
=======
router.get("/list", productController.listMethod);
>>>>>>> bb06e84e540ecff67366c8b1b41bd15ec437f02a

module.exports = router;