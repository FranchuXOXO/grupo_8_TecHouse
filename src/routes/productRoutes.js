const express = require('express');
const router = express.Router();

const path = require("path");

const productController = require("../controllers/productController");

const upload = require('../middlewares/multerMiddleware');
const administrator = require("../middlewares/LoginCheck");
const authLog = require("../middlewares/Authenticator");

router.get("/Detalle/:id", productController.detailMethod);
router.get("/carrito", productController.cartMethod);
router.get("/productos", productController.stockMethod);
router.post("/productos", upload.single("image"), productController.createProduct)
router.get("/list", productController.listMethod);

router.get("/:id/edit", authLog, administrator, productController.edit);
router.put("/:id", upload.single('image'), productController.update);

router.delete("/:id", productController.delete);

module.exports = router;