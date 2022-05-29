/*
	Authenticator (AuthLog):
	Middleware generado para validar si el usuario que ingresó a la página NO se encuentra logueado.
*/

function authMiddleware(req, res, next) {
	if (!req.session.userLogged) {
		req.session.persistedUrl = req.originalUrl;
		return res.redirect("/Login");	// en caso de no detectar un usuario logueado en la sesión, se redirige al usuario a la pantalla de login.
	}
	
	next();
}

module.exports = authMiddleware;