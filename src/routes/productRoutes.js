const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/Detalle", productController.detailMethod);
router.get("/carrito", productController.cartMethod);
router.get("/productos", productController.stockMethod);
router.post("/productos", productController.createProduct)
router.get("/list", productController.listMethod);

router.get("/:id/edit", productController.edit);
router.put("/:id", upload.single('image'), productcontroller.update);

module.exports = router;