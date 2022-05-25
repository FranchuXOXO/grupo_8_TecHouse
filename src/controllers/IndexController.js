const controller = {
    index: (req, res) => {
        return res.render("index", {
            siteTitle: "Home - Bienvenidos a TecHouse", 
            user: req.session.userLogged
        });
    }
}

module.exports = controller;