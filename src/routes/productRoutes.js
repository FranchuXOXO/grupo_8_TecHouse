const express = require('express');
const path = require("path");

const router = express.Router();

// Middlewares
const upload = require('../middlewares/multerMiddlewareProducts');
const administrator = require("../middlewares/LoginCheck");
const auth = require("../middlewares/Authenticator");
const validator = require("../middlewares/productValidator");

// Controllers
const productController = require("../controllers/productController");

// Routes
router.get("/Detalle/:id", productController.detailMethod);
router.get("/carrito", auth, productController.cartMethod);

router.get("/productos", auth, administrator, productController.stockMethod);
router.post("/productos", upload.single("product_image"), validator, productController.createProduct)

router.get("/list", productController.listMethod);

router.get("/:id/edit", auth, administrator, productController.edit);
router.put("/:id", upload.single('product_image'), validator, productController.update);

router.get("/search", productController.search);

router.delete("/:id", auth, administrator, productController.delete);

module.exports = router;