const { check } = require('express-validator');
const path = require('path');

module.exports = [
    check ('first_name')
    .notEmpty().withMessage('Debes completar tu nombre').bail()
    .isLength({ min: 2 }).withMessage('Tu nombre debe tener al menos 2 caracteres'),
    check ('last_name')
    .notEmpty().withMessage('Debes completar tu apellido').bail()
    .isLength({ min: 2 }).withMessage('Tu apellido debe tener al menos 2 caracteres'),
    check('email')
    .notEmpty().withMessage('Debes completar el email').bail()
    .isEmail().withMessage('Debes ingresar un email válido'),
    check('profile_image')
    .custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.jpeg','.png', '.gif', '.JPG', '.JPEG','.PNG', '.GIF'];
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		} return true;
    }),
    check('password')
    .notEmpty().withMessage('Debes completar la contraseña').bail()
    .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
    .matches(/^(=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i").withMessage('La contraseña debe tener al menos un caracter en mayúscula, un caracter en minúscula, un número y un caracter especial')
]