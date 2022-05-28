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
router.get("/Detalle/:id", productController.detail);
router.get("/cart", auth, productController.cart);
router.get("/cart/empty", productController.emptyCart);
// router.post("/cart/checkout", productController.checkout);

router.get("/buy/:id", auth, productController.buy)

router.get("/products", auth, administrator, productController.create);
router.post("/products", upload.single("product_image"), validator, productController.store)

router.get("/list", productController.list);

router.get("/:id/edit", auth, administrator, productController.edit);
router.put("/:id", upload.single('product_image'), validator, productController.update);

router.get("/search", productController.search);

router.delete("/:id", auth, administrator, productController.delete);

module.exports = router;