const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");
const multer = require('multer');
const path = require("path")
const storage = multer.diskStorage({
 destination: function (req, file, cb) {
 cb(null, './public/images/Products')
 },
 filename: function (req, file, cb) {
 cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname) )
 }
})
const upload = multer({ storage: storage })


router.get("/Detalle/:id", productController.detailMethod);
router.get("/carrito", productController.cartMethod);
router.get("/productos", productController.stockMethod);
router.post("/productos", upload.single("image"), productController.createProduct)
router.get("/list", productController.listMethod);

router.get("/:id/edit", loginCheck, productController.edit);
router.put("/:id", upload.single('image'), productController.update);

router.delete("/:id", productController.delete);

module.exports = router;