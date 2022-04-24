function adminMiddleware(req, res, next) {
	if ( req.session.userLogged.id_category != "1") {
        res.send("No sos administrador")	
	}
	else{
        next()
    }
}

module.exports = adminMiddleware;