const { check } = require('express-validator');
const path = require('path');

module.exports = [
    check('product_name')
    .notEmpty().withMessage('Debes completar el nombre del producto').bail()
    .isLength({ min: 5 }).withMessage('El nombre del producto debe tener al menos 5 caracteres'),
    check('product_description')
    .notEmpty().withMessage('Debes completar la descripción del producto').bail()
    .isLength({ min: 20 }).withMessage('La descripción del producto debe tener al menos 20 caracteres'),
    check('product_image')
    .custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.jpeg','.png', '.gif', '.JPG', '.JPEG','.PNG', '.GIF'];
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error('Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}');
			}
		} return true;
    }),
    check('product_price')
    .notEmpty().withMessage('Debes indicar el precio del producto')
    .isDecimal().withMessage('El valor ingresado debe ser numérico con dos decimales')
]

