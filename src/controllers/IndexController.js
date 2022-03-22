const indexCont = {
    indexMethod: (req, res) => {
        res.render("index", {
            siteTitle: "Home - Bienvenidos a TecHouse", 
            user: req.session.userLogged
        });
    }
}

module.exports = indexCont;