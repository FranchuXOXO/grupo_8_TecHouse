/*
	LoginCheck (administrator):
	Middleware generado para validar si el usuario que se encuentra logueado es administrador.
*/

function adminMiddleware(req, res, next) {
        if (req.session.userLogged.id_category != "1") {
                res.send("No sos administrador");       // en caso de no detectar que el usuario logueado sea administrador, devuelve un mensaje por pantalla indicándolo.	
        }
        else {
                next()  // si se detecta que se trata de un usuario administrador, permite el avance de la ejecución.
        }
}

module.exports = adminMiddleware;