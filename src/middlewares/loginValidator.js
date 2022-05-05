/*
	loginValidator (loginValidation):
	Middleware generado para ejecutar las validaciones, del lado del Back-end, realizadas durante el logueo de usuario a la página.
*/

const { check } = require('express-validator');

module.exports = [
    check('email')
        .isEmail().withMessage('Debes ingresar un email válido'),
    check('password')
        .notEmpty().withMessage('Debes completar la contraseña').bail()
        .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres')
]