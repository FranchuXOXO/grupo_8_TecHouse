function authMiddleware(req, res, next) {
	if (!req.session.userLogged) {
		return res.redirect("/Login");
	}
	next();
}

module.exports = authMiddleware;