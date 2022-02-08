const indexCont = {
    indexMethod: (req, res) => {
        res.render("index", {
            siteTitle: "Home - Bienvenidos a TecHouse",
        });
    }
}
module.exports=indexCont