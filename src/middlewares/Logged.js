/*
	Logged (logged):
	Middleware generado para validar si el usuario que ingresó a la página se encuentra logueado.
*/

function logMiddleware(req, res, next) {
	if (req.session.userLogged) {
		return res.redirect("/profile");	// en caso de detectar que el usuario esta logueado, se redirige al mismo a la pantalla de profile.
	}

	next();
}

module.exports = logMiddleware;