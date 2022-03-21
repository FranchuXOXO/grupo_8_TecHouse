function adminMiddleware(req, res, next) {
	if ( req.session.userLogged.category != "admin") {
        res.send("No sos administrador")	
	}
	else{
        next()
    }
}

module.exports = adminMiddleware;