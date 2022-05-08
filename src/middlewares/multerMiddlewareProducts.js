/*
	multerMiddleware (upload):
	Middleware generado para habilitar la carga archivos en el directorio del proyecto, más precisamente imagenes.
*/

const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './public/images/products');
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }
    }
);

const upload = multer({ storage: storage })

module.exports = upload;