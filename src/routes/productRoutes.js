const express = require('express');
const router = express.Router();

const path = require("path");

const productController = require("../controllers/productController");

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, './public/images/Products')
    },
    filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname) )
    }
   })
   const upload = multer({ storage: storage })


const administrator = require("../middlewares/LoginCheck");
const authLog = require("../middlewares/Authenticator");

router.get("/Detalle/:id", productController.detailMethod);
router.get("/carrito", productController.cartMethod);
router.get("/productos", productController.stockMethod);
router.post("/productos", upload.single("product_image"), productController.createProduct)
router.get("/list", productController.listMethod);

router.get("/:id/edit", authLog, administrator, productController.edit);
router.put("/:id", upload.single('product_image'), productController.update);

router.get("/search", productController.search);

router.delete("/:id", authLog, administrator, productController.delete);

module.exports = router;