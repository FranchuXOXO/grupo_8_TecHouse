const productCont={
    detailMethod: 
    (req, res) => {
        res.render("products/Detalle", {
            siteTitle: "Detalle",
        });
    },

    cartMethod: (req, res) => {
        res.render("products/productCart", {
            siteTitle: "Carrito",
        });
    },

    stockMethod: (req, res) => {
        res.render("products/productCreate", {
            siteTitle: "Manejo de Stock"
        });
    }
}
module.exports=productCont